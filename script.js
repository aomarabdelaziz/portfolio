/* ════════════════════════════════════════════════════════
   script.js  —  Portfolio interactive logic
   Reads all data from CONFIG (config.js)
   ════════════════════════════════════════════════════════ */

// ── Render all dynamic sections ──────────────────────────
(function renderFromConfig() {
  const C = CONFIG;

  // Meta
  document.title = `${C.fullName} | ${C.title}`;
  document.querySelector('meta[name="description"]').content = `${C.fullName} - ${C.title} Portfolio`;
  document.querySelector('meta[name="author"]').content = C.fullName;

  // Section backgrounds
  if (C.sectionBackgrounds) {
    const bgMap = { home: '#home', about: '#about', experience: '#projects', skills: '#skills', contact: '#contact' };
    Object.entries(C.sectionBackgrounds).forEach(([key, bg]) => {
      if (bg && bgMap[key]) {
        const el = document.querySelector(bgMap[key]);
        if (el) el.style.background = bg;
      }
    });
  }

  // Footer
  document.getElementById('footer-copy').textContent = `© ${new Date().getFullYear()} ${C.fullName}`;
  document.getElementById('footer-info').textContent = `${C.title} · ${C.location}`;

  // ── HERO ────────────────────────────────────────────────
  const heroContent = document.getElementById('hero-content');
  const socialIcons = {
    github: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
    linkedin: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    email: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  };

  heroContent.innerHTML = `
    <p class="anim" style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--primary);transition-delay:0.05s;">
      ${C.heroGreeting}
    </p>
    <h1 class="anim" style="font-size:clamp(2.5rem,6vw,4.5rem);font-weight:700;line-height:1.1;letter-spacing:-0.03em;margin:0;transition-delay:0.1s;">
      Hi! I'm <br/><span style="color:var(--primary);">${C.name}</span>
    </h1>
    <div class="anim" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.1rem,2.5vw,1.5rem);opacity:0.65;min-height:2em;transition-delay:0.15s;">
      <span id="typing-text"></span>
    </div>
    <p class="anim" style="font-size:1rem;opacity:0.6;line-height:1.75;max-width:480px;margin:0;transition-delay:0.2s;">
      ${C.heroDescription}
    </p>
    <div class="anim" style="display:flex;flex-wrap:wrap;gap:12px;transition-delay:0.25s;">
      <a href="#contact" style="padding:12px 24px;border-radius:10px;background:var(--primary);color:#fff;font-weight:600;font-size:0.875rem;text-decoration:none;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
        Get in Touch
      </a>
      <a href="${C.resumeUrl}" target="_blank" style="padding:12px 24px;border-radius:10px;border:1px solid rgba(128,128,128,0.2);font-weight:600;font-size:0.875rem;text-decoration:none;color:inherit;transition:transform 0.2s,border-color 0.2s;" onmouseover="this.style.transform='scale(1.04)';this.style.borderColor='var(--primary)'" onmouseout="this.style.transform='scale(1)';this.style.borderColor='rgba(128,128,128,0.2)'">
        View Resume ↗
      </a>
    </div>
    <div class="anim" style="display:flex;gap:12px;transition-delay:0.3s;">
      ${['github','linkedin','email'].map(key => {
        const s = C.socials[key];
        return `<a href="${s.url}" ${key !== 'email' ? 'target="_blank"' : ''} title="${key}" style="padding:10px;border-radius:10px;border:1px solid rgba(128,128,128,0.15);color:inherit;opacity:0.6;transition:opacity 0.2s,border-color 0.2s;" onmouseover="this.style.opacity=1;this.style.borderColor='var(--primary)'" onmouseout="this.style.opacity=0.6;this.style.borderColor='rgba(128,128,128,0.15)'">${socialIcons[key]}</a>`;
      }).join('')}
    </div>
  `;

  // Avatar
  document.getElementById('hero-avatar').innerHTML = `
    <div style="position:relative;width:280px;height:280px;">
      <div style="width:280px;height:280px;border-radius:50%;border:2px solid rgba(var(--primary-rgb),0.25);background:rgba(var(--primary-rgb),0.04);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
        ${C.avatar
          ? `<img src="${C.avatar}" alt="${C.fullName}" style="width:100%;height:100%;object-fit:cover;" />`
          : `<div style="position:absolute;inset:0;background:radial-gradient(circle at 30% 30%, rgba(var(--primary-rgb),0.15), transparent 70%);"></div>
             <span style="font-family:'JetBrains Mono',monospace;font-size:5rem;font-weight:700;color:rgba(var(--primary-rgb),0.35);user-select:none;">${C.initials}</span>`
        }
      </div>
      <div style="position:absolute;bottom:-12px;right:-12px;background:var(--background);border:1px solid rgba(128,128,128,0.15);border-radius:10px;padding:8px 14px;backdrop-filter:blur(8px);">
        <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:var(--primary);">${C.title}</span>
      </div>
      <div style="position:absolute;top:-12px;left:-12px;background:var(--background);border:1px solid rgba(128,128,128,0.15);border-radius:10px;padding:8px 14px;backdrop-filter:blur(8px);">
        <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#22c55e;">● Available</span>
      </div>
    </div>
  `;

  // ── ABOUT BIO ───────────────────────────────────────────
  const aboutBio = document.getElementById('about-bio');
  aboutBio.innerHTML = C.aboutBio.map(p => `<p style="margin:0;">${p}</p>`).join('') +
    `<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;">
      ${C.aboutBadges.map(b => {
        const style = b.primary
          ? 'background:rgba(var(--primary-rgb),0.1);color:var(--primary);border:1px solid rgba(var(--primary-rgb),0.2);'
          : 'background:rgba(128,128,128,0.08);opacity:0.7;border:1px solid rgba(128,128,128,0.15);';
        return `<span style="padding:4px 12px;font-family:'JetBrains Mono',monospace;font-size:0.7rem;border-radius:20px;${style}">${b.label}</span>`;
      }).join('')}
    </div>`;

  // ── ABOUT TIMELINE ──────────────────────────────────────
  const aboutTL = document.getElementById('about-timeline');
  aboutTL.innerHTML = `
    <h3 style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;opacity:0.5;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 24px;">// journey</h3>
    <div style="position:relative;padding-left:28px;">
      <div class="tl-line"></div>
      ${C.timeline.map((t, i) => {
        const isLast = i === C.timeline.length - 1;
        const dotStyle = t.current
          ? 'background:var(--primary);border:2px solid rgba(var(--primary-rgb),0.6);'
          : 'background:var(--background);border:2px solid rgba(var(--primary-rgb),0.4);';
        const innerDot = t.current
          ? '<div style="width:5px;height:5px;border-radius:50%;background:#fff;"></div>'
          : '<div style="width:5px;height:5px;border-radius:50%;background:var(--primary);opacity:0.7;"></div>';
        return `
          <div style="${isLast ? '' : 'margin-bottom:24px;'}position:relative;">
            <div style="position:absolute;left:-28px;top:4px;width:14px;height:14px;border-radius:50%;${dotStyle}display:flex;align-items:center;justify-content:center;">${innerDot}</div>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:var(--primary);">${t.year}</span>
            <p style="font-size:0.85rem;opacity:0.6;margin:4px 0 0;">${t.text}</p>
          </div>`;
      }).join('')}
    </div>
  `;

  // ── EXPERIENCE ──────────────────────────────────────────
  const expContent = document.getElementById('experience-content');
  const calendarSvg = '<svg width="12" height="12" fill="none" stroke="#06b6d4" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';

  let expHTML = '<div style="position:relative;">';
  expHTML += '<div class="tl-center-line" style="position:absolute;left:50%;top:0;bottom:0;width:2px;background:rgba(var(--primary-rgb),0.15);transform:translateX(-50%);pointer-events:none;"></div>';

  C.experience.forEach((job, i) => {
    const isLeft = i % 2 === 0;
    const delay = 0.05 + i * 0.05;
    const isLast = i === C.experience.length - 1;
    const subtitle = job.subtitle ? ` <span style="font-size:0.7rem;opacity:0.4;font-weight:400;">${job.subtitle}</span>` : '';
    const tags = job.tags.map(t => `<span style="font-family:'JetBrains Mono',monospace;font-size:0.62rem;padding:3px 8px;border-radius:6px;border:1px solid rgba(var(--primary-rgb),0.3);color:var(--primary);">${t}</span>`).join('');

    const card = `
      <div class="tl-card ${isLeft ? 'tl-left-col' : 'tl-right-col'} card" style="text-align:${isLeft ? 'right' : 'left'};">
        <div style="display:inline-flex;align-items:center;gap:6px;color:#06b6d4;font-family:'JetBrains Mono',monospace;font-size:0.7rem;margin-bottom:14px;">
          ${calendarSvg} ${job.period}
        </div>
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 4px;">${job.company}${subtitle}</h3>
        <p style="font-size:0.8rem;opacity:0.5;margin:0 0 14px;font-family:'JetBrains Mono',monospace;">${job.role} · ${job.location}</p>
        <p style="font-size:0.85rem;opacity:0.65;line-height:1.7;margin:0 0 16px;">${job.description}</p>
        <div class="tl-tags" style="display:flex;flex-wrap:wrap;gap:6px;${isLeft ? 'justify-content:flex-end;' : ''}">${tags}</div>
      </div>`;
    const dot = '<div class="tl-dot"><div style="width:14px;height:14px;border-radius:50%;border:2px solid var(--primary);background:var(--background);box-shadow:0 0 0 4px rgba(var(--primary-rgb),0.1);"></div></div>';
    const spacer = '<div class="tl-spacer"></div>';

    expHTML += `<div class="tl-entry anim" style="${isLast ? 'margin-bottom:0;' : ''}transition-delay:${delay}s;">`;
    if (isLeft) {
      expHTML += card + dot + spacer;
    } else {
      expHTML += spacer + dot + card;
    }
    expHTML += '</div>';
  });
  expHTML += '</div>';

  // Certifications
  expHTML += `
    <div class="card anim" style="border-radius:14px;border:1px solid rgba(var(--primary-rgb),0.2);background:rgba(var(--primary-rgb),0.04);padding:24px;margin-top:64px;transition-delay:0.2s;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
        <span style="font-size:1.4rem;">🏆</span>
        <div>
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;background:rgba(var(--primary-rgb),0.1);color:var(--primary);padding:3px 10px;border-radius:20px;">Certifications</span>
          <h3 style="font-size:1.05rem;font-weight:600;margin:6px 0 2px;">Professional Certs</h3>
          <p style="font-size:0.75rem;opacity:0.45;margin:0;font-family:'JetBrains Mono',monospace;">Linux Foundation &amp; Amazon Web Services</p>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;">
        ${C.certifications.map(c => `
          <div style="flex:1;min-width:200px;display:flex;align-items:flex-start;gap:10px;font-size:0.85rem;opacity:0.7;">
            <span style="width:6px;height:6px;border-radius:50%;background:var(--primary);flex-shrink:0;margin-top:5px;"></span>
            <span>${c.name} <span style="opacity:0.5;">${c.validity}</span></span>
          </div>
        `).join('')}
      </div>
    </div>`;

  expContent.innerHTML = expHTML;

  // ── SKILLS ──────────────────────────────────────────────
  const skillsContent = document.getElementById('skills-content');
  skillsContent.innerHTML = C.skills.map((cat, ci) => `
    <div class="anim" style="transition-delay:${0.05 + ci * 0.05}s;">
      <h3 style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;opacity:0.45;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 20px;">${cat.category}</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px;">
        ${cat.items.map(s => `
          <div class="skill-item" style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 12px;border-radius:12px;border:1px solid rgba(128,128,128,0.1);background:rgba(128,128,128,0.03);transition:all 0.2s;" onmouseover="this.style.borderColor='rgba(var(--primary-rgb),0.35)';this.style.background='rgba(var(--primary-rgb),0.05)'" onmouseout="this.style.borderColor='rgba(128,128,128,0.1)';this.style.background='rgba(128,128,128,0.03)'">
            <img src="${s.icon}" width="32" height="32" alt="${s.name}" loading="lazy" ${s.invert ? 'class="icon-invert"' : ''}/>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;opacity:0.6;">${s.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // ── CONTACT ─────────────────────────────────────────────
  const contactContent = document.getElementById('contact-content');
  const contactItems = [
    { key: 'github',   icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>', title: 'GitHub', hoverColor: '128,128,128', iconBg: 'rgba(128,128,128,0.06)', iconColor: 'inherit' },
    { key: 'linkedin', icon: '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>', title: 'LinkedIn', hoverColor: '59,130,246', iconBg: 'rgba(59,130,246,0.1)', iconColor: '#3b82f6' },
    { key: 'email',    icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>', title: 'Email', hoverColor: '34,197,94', iconBg: 'rgba(34,197,94,0.1)', iconColor: '#22c55e' },
    { key: 'phone',    icon: '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>', title: 'Phone', hoverColor: '249,115,22', iconBg: 'rgba(249,115,22,0.1)', iconColor: '#f97316' },
  ];

  contactContent.innerHTML = `
    <p class="anim" style="font-size:1rem;opacity:0.65;line-height:1.8;margin:0 0 40px;transition-delay:0.05s;">
      ${C.contactIntro}
    </p>
    <div class="anim" style="display:flex;flex-direction:column;gap:12px;transition-delay:0.1s;">
      ${contactItems.filter(ci => C.socials[ci.key]).map(ci => {
        const s = C.socials[ci.key];
        const target = (ci.key !== 'email' && ci.key !== 'phone') ? 'target="_blank"' : '';
        return `
          <a href="${s.url}" ${target} style="display:flex;align-items:center;gap:16px;padding:16px;border-radius:14px;border:1px solid rgba(128,128,128,0.12);text-decoration:none;color:inherit;transition:all 0.2s;" onmouseover="this.style.borderColor='rgba(${ci.hoverColor},0.4)';this.style.background='rgba(${ci.hoverColor},0.04)'" onmouseout="this.style.borderColor='rgba(128,128,128,0.12)';this.style.background='transparent'">
            <div style="width:40px;height:40px;border-radius:10px;background:${ci.iconBg};color:${ci.iconColor};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              ${ci.icon}
            </div>
            <div style="flex:1;"><p style="font-weight:500;margin:0 0 2px;font-size:0.9rem;">${ci.title}</p><p style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;opacity:0.4;margin:0;">${s.label}</p></div>
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3" viewBox="0 0 24 24"><path stroke-linecap="round" d="M9 5l7 7-7 7"/></svg>
          </a>`;
      }).join('')}
    </div>
    <p class="anim" style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;opacity:0.3;margin-top:32px;text-align:center;transition-delay:0.2s;">
      📍 ${C.location}${C.relocate ? ' · Ready to relocate' : ''}
    </p>
  `;
})();

// ── Theme toggle ──────────────────────────────────────────
const html    = document.documentElement;
const sunIco  = document.getElementById('sun-ico');
const moonIco = document.getElementById('moon-ico');

document.getElementById('theme-btn').addEventListener('click', () => {
  html.classList.toggle('dark');
  const dark = html.classList.contains('dark');
  sunIco.classList.toggle('hidden', !dark);
  moonIco.classList.toggle('hidden', dark);
});

// ── Mobile menu ───────────────────────────────────────────
const mobBtn  = document.getElementById('mob-btn');
const mobMenu = document.getElementById('mob-menu');

function closeMob() { mobMenu.style.display = 'none'; }

mobBtn.addEventListener('click', () => {
  mobMenu.style.display = mobMenu.style.display === 'flex' ? 'none' : 'flex';
});

// ── Responsive nav visibility ─────────────────────────────
function checkWidth() {
  const isSmall = window.innerWidth < 768;
  document.getElementById('desk-nav').style.display = isSmall ? 'none' : 'flex';
  mobBtn.style.display = isSmall ? 'block' : 'none';
  if (!isSmall) mobMenu.style.display = 'none';
}
checkWidth();
window.addEventListener('resize', checkWidth);

// ── Nav logo cycling animation ────────────────────────────
const logoWords = CONFIG.logoWords;
let li = 0, lc = 0, ld = false;
const logoEl = document.getElementById('nav-logo-text');

function logoTick() {
  const cur = logoWords[li];
  if (!ld) {
    logoEl.textContent = cur.slice(0, ++lc);
    if (lc === cur.length) { ld = true; setTimeout(logoTick, 1800); return; }
  } else {
    logoEl.textContent = cur.slice(0, --lc);
    if (lc === 0) { ld = false; li = (li + 1) % logoWords.length; }
  }
  setTimeout(logoTick, ld ? 60 : 110);
}
logoTick();

// ── Hero typing animation ─────────────────────────────────
const roles = CONFIG.typingRoles;
let ri = 0, ci = 0, del = false;
const typEl = document.getElementById('typing-text');

function tick() {
  const cur = roles[ri];
  if (!del) {
    typEl.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) { del = true; setTimeout(tick, 2000); return; }
  } else {
    typEl.textContent = cur.slice(0, --ci);
    if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(tick, del ? 55 : 95);
}
setTimeout(tick, 800);

// ── Scroll-reveal animations ──────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.anim').forEach(el => obs.observe(el));

// ── Active nav highlight on scroll ───────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
  navLinks.forEach(l => {
    const isActive = l.getAttribute('href') === '#' + cur;
    l.classList.toggle('active', isActive);
    l.style.opacity = isActive ? '1' : '0.6';
    l.style.color   = isActive ? 'var(--primary)' : 'inherit';
  });
});

// ── Navbar shadow on scroll ───────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 30 ? '0 4px 30px rgba(0,0,0,0.15)' : '';
});

/* ════════════════════════════════════════════════════════
   TERMINAL  — now reads from CONFIG
   ════════════════════════════════════════════════════════ */
const termModal  = document.getElementById('term-modal');
const termOutput = document.getElementById('term-output');
const termInput  = document.getElementById('term-input');
let cmdHistory = [], histIdx = -1;

function openTerm() {
  termModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  termInput.focus();
  if (termOutput.children.length === 0) runCmd('whoami', false);
}

function closeTerm() {
  termModal.style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('term-btn').addEventListener('click', openTerm);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && termModal.style.display === 'flex') closeTerm();
});

// ── Terminal print helpers ────────────────────────────────
function line(html, color) {
  const p = document.createElement('p');
  p.style.cssText = 'margin:0;padding:0;' + (color ? 'color:' + color + ';' : '');
  p.innerHTML = html;
  termOutput.appendChild(p);
  termOutput.scrollTop = termOutput.scrollHeight;
}

function blank() { line('&nbsp;'); }

function prompt(cmd) {
  line(
    '<span style="color:#22c55e;">abdelaziz@portfolio:~$</span> ' +
    '<span style="color:#f1f1f1;">' + escHtml(cmd) + '</span>'
  );
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Terminal commands (data from CONFIG) ──────────────────
const CMDS = {

  whoami() {
    blank();
    line('Welcome, Guest 👋', '#f1f1f1');
    line('Try typing <span style="color:#22c55e;font-weight:600;">help</span> to get a list of commands...', '#9ca3af');
    blank();
  },

  help() {
    blank();
    line('🟢 <span style="color:#22c55e;">Available commands:</span>', '#f1f1f1');
    const cmds = [
      ['whoami',     'Welcome message'],
      ['about',      'Who is ' + CONFIG.name + '?'],
      ['skills',     'Technical skill set'],
      ['experience', 'Work experience'],
      ['contact',    'Get in touch'],
      ['certs',      'Certifications'],
      ['clear',      'Clear the terminal'],
      ['gui',        'Close terminal → go to site'],
    ];
    cmds.forEach(([c, d]) => {
      line(
        '  • <span style="color:#86efac;min-width:12ch;display:inline-block;">' + c + '</span>' +
        ' <span style="color:#6b7280;">— ' + d + '</span>'
      );
    });
    blank();
  },

  about() {
    const C = CONFIG;
    blank();
    line('<span style="color:#22c55e;font-size:1.4em;font-weight:700;">' + C.initials + '</span>', '#f1f1f1');
    line('<span style="color:#f1f1f1;font-weight:600;">' + C.fullName + '</span>');
    line('<span style="color:#22c55e;">' + C.title + '</span>');
    blank();
    line('<span style="color:#6b7280;">📍</span> ' + C.location + (C.relocate ? '  •  Ready to relocate' : ''));
    if (C.socials.github) line('<span style="color:#6b7280;">🐙</span> <a href="' + C.socials.github.url + '" target="_blank" style="color:#86efac;text-decoration:none;">' + C.socials.github.label + '</a>');
    if (C.socials.linkedin) line('<span style="color:#6b7280;">💼</span> <a href="' + C.socials.linkedin.url + '" target="_blank" style="color:#86efac;text-decoration:none;">' + C.socials.linkedin.label + '</a>');
    if (C.resumeUrl) line('<span style="color:#6b7280;">📄</span> <a href="' + C.resumeUrl + '" target="_blank" style="color:#86efac;text-decoration:none;">View Resume ↗</a>');
    blank();
    line(C.heroDescription, '#d1d5db');
    blank();
  },

  skills() {
    blank();
    line('🚀 <span style="color:#22c55e;font-weight:600;">Skills:</span>');
    blank();
    const termEmojis = CONFIG.terminalSkillEmojis;
    CONFIG.skills.forEach(cat => {
      line('<span style="color:#06b6d4;font-weight:600;">' + cat.category + '</span>');
      const items = termEmojis[cat.category] || cat.items.map(i => i.name);
      const row = items
        .map(i => '<span style="color:#d1d5db;margin-right:20px;">' + i + '</span>')
        .join('');
      line('  ' + row);
      blank();
    });
  },

  experience() {
    blank();
    line('💼 <span style="color:#22c55e;font-weight:600;">Work Experience:</span>');
    blank();
    CONFIG.experience.forEach(j => {
      line(
        '<span style="color:#f59e0b;">▶</span> ' +
        '<span style="color:#f1f1f1;font-weight:600;">' + j.role + '</span>  ' +
        '<span style="color:#6b7280;">@ ' + j.company + ' · ' + j.location + '</span>'
      );
      line('  <span style="color:#4b5563;">' + j.period + '</span>');
      line('  <span style="color:#86efac;">' + j.tags.join(' · ') + '</span>');
      blank();
    });
  },

  contact() {
    const C = CONFIG;
    blank();
    line('📬 <span style="color:#22c55e;font-weight:600;">Contact:</span>');
    blank();
    if (C.socials.email) line('  📧 <a href="' + C.socials.email.url + '" style="color:#86efac;text-decoration:none;">' + C.socials.email.label + '</a>');
    if (C.socials.phone) line('  📞 <span style="color:#d1d5db;">' + C.socials.phone.label + '</span>');
    if (C.socials.github) line('  🐙 <a href="' + C.socials.github.url + '" target="_blank" style="color:#86efac;text-decoration:none;">' + C.socials.github.label + '</a>');
    if (C.socials.linkedin) line('  💼 <a href="' + C.socials.linkedin.url + '" target="_blank" style="color:#86efac;text-decoration:none;">' + C.socials.linkedin.label + '</a>');
    blank();
  },

  certs() {
    blank();
    line('🏆 <span style="color:#22c55e;font-weight:600;">Certifications:</span>');
    blank();
    CONFIG.certifications.forEach(c => {
      line(
        '  <span style="color:#f59e0b;font-weight:700;">[' + c.badge + ']</span>  ' +
        '<span style="color:#f1f1f1;">' + c.name + '</span>'
      );
      line('        <span style="color:#6b7280;">' + c.issuer + '  •  ' + c.validity + '</span>');
      blank();
    });
  },

  clear() { termOutput.innerHTML = ''; },

  gui() {
    line('Switching to GUI mode...', '#22c55e');
    setTimeout(closeTerm, 600);
  },
};

// ── Command runner ────────────────────────────────────────
function runCmd(raw, showPrompt = true) {
  const cmd = raw.trim().toLowerCase();
  if (showPrompt) prompt(raw.trim());
  if (!cmd) return;
  if (CMDS[cmd]) {
    CMDS[cmd]();
  } else {
    blank();
    line(
      'command not found: <span style="color:#f87171;">' + escHtml(cmd) + '</span>' +
      '  — try <span style="color:#22c55e;">help</span>',
      '#9ca3af'
    );
    blank();
  }
}

// ── Input key handling ────────────────────────────────────
termInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = termInput.value;
    if (val.trim()) { cmdHistory.unshift(val); histIdx = -1; }
    runCmd(val);
    termInput.value = '';
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < cmdHistory.length - 1) termInput.value = cmdHistory[++histIdx];
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    histIdx > 0 ? termInput.value = cmdHistory[--histIdx] : (termInput.value = '', histIdx = -1);
  }
});

// Click anywhere in output area → refocus input
termOutput.addEventListener('click', () => termInput.focus());
