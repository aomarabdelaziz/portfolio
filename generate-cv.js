#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const DATA_FILE   = path.join(__dirname, 'cv-data.json');
const HTML_OUTPUT = path.join(__dirname, 'cv-output.html');
const RESUME_OUT  = path.join(__dirname, 'resume.html');
const PDF_OUTPUT  = path.join(__dirname, 'cv-output.pdf');

const generatePDF = process.argv.includes('--pdf');

// ─── Load data ────────────────────────────────────────────────────────────────

const cv = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

// ─── Helpers ──────────────────────────────────────────────────────────────────

function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function dateRange(start, end) {
  if (!start && !end) return '';
  if (!end) return esc(start);
  return `${esc(start)} - ${esc(end)}`;
}

// ─── Section renderers ────────────────────────────────────────────────────────

function renderHeader(p) {
  const locationStr = p.location_note
    ? `${esc(p.location)} (${esc(p.location_note)})`
    : esc(p.location);

  const contactParts = [p.phone, p.email, locationStr].filter(Boolean).map(esc);

  const linksHtml = (p.links || [])
    .map(l => `<a href="${esc(l.url)}">${esc(l.display || l.label)}</a>`)
    .join(' | ');

  return `
<div class="cv-header">
  <h1>${esc(p.name)}</h1>
  <p class="cv-subtitle">${esc(p.title)}</p>
  <p class="cv-contact">${contactParts.join(' | ')}</p>
  ${linksHtml ? `<p class="cv-links">${linksHtml}</p>` : ''}
</div>`;
}

function renderSummary(summary) {
  if (!summary) return '';
  return `
<section>
  <h2>PROFESSIONAL SUMMARY</h2>
  <p>${esc(summary)}</p>
</section>`;
}

function renderExperience(experience) {
  if (!experience || !experience.length) return '';
  const items = experience.map(job => `
  <div class="entry">
    <div class="entry-row">
      <div class="entry-left">
        <h3><strong>${esc(job.title)}</strong> | ${esc(job.company)} | ${esc(job.location)}</h3>
      </div>
      <div class="entry-date">${dateRange(job.start, job.end)}</div>
    </div>
    ${job.highlights && job.highlights.length ? `
    <ul>
      ${job.highlights.map(h => `<li>${esc(h)}</li>`).join('\n      ')}
    </ul>` : ''}
  </div>`).join('\n');
  return `
<section>
  <h2>WORK EXPERIENCE</h2>${items}
</section>`;
}

function renderEducation(education) {
  if (!education || !education.length) return '';
  const items = education.map(edu => {
    const details = [edu.institution, edu.grade ? `Grade: ${edu.grade}` : null, edu.project]
      .filter(Boolean).map(esc).join(' | ');
    return `
  <div class="entry">
    <div class="entry-row">
      <div class="entry-left">
        <h3><strong>${esc(edu.degree)}</strong></h3>
        ${details ? `<p class="entry-sub">${details}</p>` : ''}
      </div>
      <div class="entry-date">${dateRange(edu.start, edu.end)}</div>
    </div>
  </div>`;
  }).join('\n');
  return `
<section>
  <h2>EDUCATION</h2>${items}
</section>`;
}

function renderCertifications(certifications) {
  if (!certifications || !certifications.length) return '';
  const items = certifications.map(cert => `
  <div class="entry">
    <div class="entry-row">
      <div class="entry-left">
        <h3><strong>${esc(cert.name)}</strong></h3>
        ${cert.issuer ? `<p class="entry-sub">Issued by ${esc(cert.issuer)}</p>` : ''}
      </div>
      <div class="entry-date">${dateRange(cert.start, cert.end)}</div>
    </div>
  </div>`).join('\n');
  return `
<section>
  <h2>CERTIFICATIONS</h2>${items}
</section>`;
}

function renderSkills(skills) {
  if (!skills || !skills.length) return '';
  const rows = skills.map(s =>
    `  <p><strong>${esc(s.category)}:</strong> ${esc(s.items.join(', '))}</p>`
  ).join('\n');
  return `
<section>
  <h2>TECHNICAL SKILLS</h2>
${rows}
</section>`;
}

function renderTraining(training) {
  if (!training || !training.length) return '';
  const items = training.map(t => `
  <div class="entry">
    <div class="entry-row">
      <div class="entry-left">
        <h3><strong>${esc(t.name)}</strong></h3>
        ${t.institution ? `<p class="entry-sub">${esc(t.institution)}</p>` : ''}
      </div>
      <div class="entry-date">${dateRange(t.start, t.end)}</div>
    </div>
  </div>`).join('\n');
  return `
<section>
  <h2>TRAINING &amp; COURSES</h2>${items}
</section>`;
}

function renderProjects(projects) {
  if (!projects || !projects.length) return '';
  const items = projects.map(p => `
  <div class="entry">
    <div class="entry-left">
      <h3><strong>${esc(p.name)}</strong>${p.url ? ` | <a href="${esc(p.url)}">${esc(p.url)}</a>` : ''}</h3>
      <p class="entry-sub">${esc(p.description)}</p>
      ${p.tech && p.tech.length ? `<p class="entry-sub"><em>${esc(p.tech.join(' · '))}</em></p>` : ''}
    </div>
  </div>`).join('\n');
  return `
<section>
  <h2>PROJECTS</h2>${items}
</section>`;
}

function renderLanguages(languages) {
  if (!languages || !languages.length) return '';
  const rows = languages.map(l =>
    `  <p><strong>${esc(l.language)}:</strong> ${esc(l.level)}</p>`
  ).join('\n');
  return `
<section>
  <h2>LANGUAGES</h2>
${rows}
</section>`;
}

// ─── Section dispatch ─────────────────────────────────────────────────────────

const RENDERERS = {
  summary:        () => renderSummary(cv.summary),
  experience:     () => renderExperience(cv.experience),
  education:      () => renderEducation(cv.education),
  certifications: () => renderCertifications(cv.certifications),
  skills:         () => renderSkills(cv.skills),
  projects:       () => renderProjects(cv.projects),
  training:       () => renderTraining(cv.training),
  languages:      () => renderLanguages(cv.languages),
};

// ─── CV CSS (shared) ──────────────────────────────────────────────────────────

const CV_CSS = `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Calibri', 'Arial', sans-serif;
  font-size: 10.5pt;
  color: #111;
  background: #fff;
  line-height: 1.45;
}

.cv-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 36px 48px;
}

/* Header */
.cv-header { text-align: center; margin-bottom: 16px; }
.cv-header h1 { font-size: 22pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
.cv-subtitle { font-size: 11.5pt; color: #444; margin-top: 3px; }
.cv-contact, .cv-links { font-size: 9.5pt; color: #333; margin-top: 4px; }
.cv-links a { color: #1a3c6e; text-decoration: none; }
.cv-links a:hover { text-decoration: underline; }

/* Sections */
section { margin-bottom: 13px; }

h2 {
  font-size: 10.5pt;
  font-weight: 700;
  color: #1a3c6e;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding-bottom: 3px;
  border-bottom: 1.5px solid #1a3c6e;
  margin-bottom: 9px;
}

/* Entries */
.entry { margin-bottom: 10px; }

.entry-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.entry-left { flex: 1; }

h3 { font-size: 10.5pt; font-weight: normal; color: #111; }
h3 strong { font-weight: 700; }

.entry-date { font-size: 10pt; white-space: nowrap; font-weight: 700; color: #111; padding-top: 1px; }
.entry-sub { font-size: 10pt; color: #444; margin-top: 2px; }

/* Lists */
ul { margin: 5px 0 0 20px; list-style-type: disc; }
li { font-size: 10.5pt; margin-bottom: 3px; }

/* Skills */
section p { font-size: 10.5pt; margin-bottom: 3px; }

/* Print */
@media print {
  .no-print { display: none !important; }
  body { font-size: 10pt; }
  .cv-wrap { padding: 0; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  section { page-break-inside: avoid; }
  .entry { page-break-inside: avoid; }
}

@page { size: A4; margin: 2cm 2.5cm; }`;

// ─── JSON-LD structured data ──────────────────────────────────────────────────

function buildJsonLd() {
  const p = cv.personal;
  const exp = (cv.experience || []).map(j => ({
    '@type': 'OrganizationRole',
    'roleName': j.title,
    'startDate': j.start,
    'endDate': j.end === 'Present' ? undefined : j.end,
    'memberOf': { '@type': 'Organization', 'name': j.company }
  }));
  const certs = (cv.certifications || []).map(c => ({
    '@type': 'EducationalOccupationalCredential',
    'name': c.name,
    'credentialCategory': 'Professional Certification',
    'recognizedBy': { '@type': 'Organization', 'name': c.issuer }
  }));
  const allSkills = (cv.skills || []).flatMap(s => s.items);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': p.name,
    'jobTitle': p.title,
    'email': p.email,
    'telephone': p.phone,
    'address': { '@type': 'PostalAddress', 'addressLocality': p.location },
    'url': (p.links || []).find(l => l.label === 'Portfolio')?.url || '',
    'sameAs': (p.links || []).filter(l => l.label !== 'Portfolio').map(l => l.url),
    'description': cv.summary,
    'knowsAbout': allSkills,
    'hasCredential': certs,
    'worksFor': exp[0] ? exp[0].memberOf : undefined,
    'alumniOf': (cv.education || []).map(e => ({ '@type': 'EducationalOrganization', 'name': e.institution })),
  };

  return JSON.stringify(ld, null, 2);
}

// ─── Build CV body HTML ───────────────────────────────────────────────────────

function buildCVBody() {
  const sectionOrder = (cv._meta && cv._meta.sections) || Object.keys(RENDERERS);
  return sectionOrder
    .map(key => (RENDERERS[key] ? RENDERERS[key]() : ''))
    .filter(Boolean)
    .join('\n');
}

// ─── Build cv-output.html (clean, no toolbar) ─────────────────────────────────

function buildCleanHTML() {
  const body = buildCVBody();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${esc(cv.personal.name)} - ${esc(cv.personal.title)}">
  <title>${esc(cv.personal.name)} - CV</title>
  <style>${CV_CSS}</style>
  <script type="application/ld+json">
${buildJsonLd()}
  </script>
</head>
<body>
<div class="cv-wrap">
  ${renderHeader(cv.personal)}
  ${body}
</div>
</body>
</html>`;
}

// ─── Build resume.html (with toolbar, fully static — no JS required for content) ──

function buildResumeHTML() {
  const p    = cv.personal;
  const body = buildCVBody();

  const TOOLBAR_CSS = `
    #toolbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      height: 52px;
      background: #0a0a0a;
      border-bottom: 1px solid #1e1e1e;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
    }
    #tb-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: #4b5563;
      white-space: nowrap;
      pointer-events: none;
    }
    .tb-back {
      display: flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      color: #6b7280;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      transition: color 0.15s;
    }
    .tb-back:hover { color: #d1d5db; }
    .tb-sep { width: 1px; height: 20px; background: #1e1e1e; margin: 0 12px; }
    .tb-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      color: #22c55e;
      background: rgba(34,197,94,0.08);
      border: 1px solid rgba(34,197,94,0.2);
      padding: 2px 10px;
      border-radius: 20px;
    }
    .tb-pdf {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 7px 16px;
      background: rgba(34,197,94,0.1);
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 8px;
      color: #22c55e;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s;
    }
    .tb-pdf:hover { background: rgba(34,197,94,0.18); border-color: rgba(34,197,94,0.5); }

    body { background: #111; }

    #cv-stage {
      padding: 72px 24px 48px;
      display: flex;
      justify-content: center;
    }

    .cv-wrap {
      width: 100%;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 4px 40px rgba(0,0,0,0.5);
    }`;

  const PRINT_OVERRIDE = `
    @media print {
      #toolbar { display: none !important; }
      body { background: #fff; }
      #cv-stage { padding: 0; display: block; }
      .cv-wrap { box-shadow: none; border-radius: 0; max-width: 100%; }
    }`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${esc(p.name)} — ${esc(p.title)}. ${esc((cv.summary || '').slice(0, 155))}">
  <meta name="keywords" content="${esc(p.title)}, DevOps, AWS, Kubernetes, Terraform, Ansible, CI/CD, GitOps, ${esc(p.location)}, Resume, CV">
  <meta name="author" content="${esc(p.name)}">
  <meta property="og:title" content="${esc(p.name)} — Resume">
  <meta property="og:description" content="${esc((cv.summary || '').slice(0, 200))}">
  <meta property="og:type" content="profile">
  <title>${esc(p.name)} — Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>${CV_CSS}${TOOLBAR_CSS}${PRINT_OVERRIDE}</style>
  <script type="application/ld+json">
${buildJsonLd()}
  </script>
</head>
<body>

<div id="toolbar" class="no-print">
  <div style="display:flex;align-items:center;">
    <a class="tb-back" href="index.html">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" d="M15 18l-6-6 6-6"/>
      </svg>
      Portfolio
    </a>
    <div class="tb-sep"></div>
    <span class="tb-badge">ATS-Compatible</span>
  </div>

  <div id="tb-center">${esc(p.name)} — Resume</div>

  <button class="tb-pdf" onclick="window.print()">
    <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
    </svg>
    Download PDF
  </button>
</div>

<div id="cv-stage">
  <div class="cv-wrap">
    ${renderHeader(p)}
    ${body}
  </div>
</div>

</body>
</html>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Always generate both
  fs.writeFileSync(HTML_OUTPUT, buildCleanHTML(), 'utf-8');
  console.log(`✓ cv-output.html  → ${HTML_OUTPUT}`);

  fs.writeFileSync(RESUME_OUT, buildResumeHTML(), 'utf-8');
  console.log(`✓ resume.html     → ${RESUME_OUT}`);

  if (!generatePDF) {
    console.log('\n  Tip: run with --pdf to also generate a PDF (requires puppeteer).');
    return;
  }

  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch {
    console.error('\n✗ puppeteer not found. Run: npm install --save-dev puppeteer');
    process.exit(1);
  }

  console.log('\n  Launching browser for PDF export…');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(`file://${HTML_OUTPUT}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: PDF_OUTPUT,
    format: 'A4',
    margin: { top: '2cm', right: '2.5cm', bottom: '2cm', left: '2.5cm' },
    printBackground: false,
  });
  await browser.close();
  console.log(`✓ cv-output.pdf   → ${PDF_OUTPUT}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
