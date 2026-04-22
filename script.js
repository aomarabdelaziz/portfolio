/* ════════════════════════════════════════════════════════
   script.js  —  Portfolio interactive logic
   ════════════════════════════════════════════════════════ */

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
const logoWords = ['DevOps', 'Abdelaziz'];
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
const roles = ['DevOps Engineer', 'Cloud Architect', 'Linux Enthusiast'];
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
   TERMINAL
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

// ── Terminal commands ─────────────────────────────────────
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
      ['about',      'Who is Abdelaziz?'],
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
    blank();
    line('<span style="color:#22c55e;font-size:1.4em;font-weight:700;">AO</span>', '#f1f1f1');
    line('<span style="color:#f1f1f1;font-weight:600;">Abdelaziz Omar</span>');
    line('<span style="color:#22c55e;">DevOps Engineer</span>');
    blank();
    line('<span style="color:#6b7280;">📍</span> Alexandria, Egypt  •  Ready to relocate');
    line('<span style="color:#6b7280;">🐙</span> <a href="https://github.com/aomarabdelaziz" target="_blank" style="color:#86efac;text-decoration:none;">github.com/aomarabdelaziz</a>');
    line('<span style="color:#6b7280;">💼</span> <a href="https://www.linkedin.com/in/aomarabdelaziz/" target="_blank" style="color:#86efac;text-decoration:none;">linkedin.com/in/aomarabdelaziz</a>');
    line('<span style="color:#6b7280;">📄</span> <a href="https://aomarabdelaziz.github.io/CV/Abdelaziz%20Omar%20Abdelaziz%20Omar%20CV.pdf" target="_blank" style="color:#86efac;text-decoration:none;">View Resume ↗</a>');
    blank();
    line('Motivated DevOps Engineer with a strong focus on infrastructure reliability,', '#d1d5db');
    line('scalability, and security. Experienced in CI/CD pipeline design and cloud', '#d1d5db');
    line('environment management on AWS. Proficient in Python and Bash scripting.', '#d1d5db');
    blank();
  },

  skills() {
    blank();
    line('🚀 <span style="color:#22c55e;font-weight:600;">Skills:</span>');
    blank();
    const cats = [
      { name: 'Cloud & Infrastructure', items: ['☁  AWS', '⚙  Kubernetes', '🏗  Terraform', '📋 Ansible', '⚓ Helm', '🔴 OpenShift'] },
      { name: 'Containers & CI/CD',     items: ['🐋 Docker', '🔧 Jenkins', '🚢 ArgoCD', '⚡ GitHub Actions', '📦 Nexus', '🌐 Nginx'] },
      { name: 'Observability',          items: ['📊 Prometheus', '📈 Grafana', '📝 Loki', '🔭 OpenTelemetry'] },
      { name: 'Programming',            items: ['🐍 Python', '💻 Bash', '⚡ JavaScript', '🐘 PHP', '# C#'] },
      { name: 'Tools & OS',             items: ['🐧 Linux', '📂 Git', '🐱 GitHub', '🗄  MySQL', '🪟 Windows'] },
    ];
    cats.forEach(cat => {
      line('<span style="color:#06b6d4;font-weight:600;">' + cat.name + '</span>');
      const row = cat.items
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
    const jobs = [
      { period: 'Apr 2024 – Present',  role: 'DevOps Engineer',       company: 'B.TECH (b_labs & mylo)', loc: 'Cairo',      tech: 'EKS · Helm · ArgoCD · GitHub Actions · Terraform · AWS Outposts' },
      { period: 'Apr 2023 – Mar 2024', role: 'DevOps Engineer',       company: 'ISFP',                   loc: 'Alexandria', tech: 'Ansible · Jenkins · Docker · Linux · Prometheus · Grafana' },
      { period: 'Aug 2021 – Oct 2022', role: 'Backend Engineer (PHP)', company: 'Freelance',              loc: 'Remote',     tech: 'PHP · Laravel · MySQL · Nginx' },
    ];
    jobs.forEach(j => {
      line(
        '<span style="color:#f59e0b;">▶</span> ' +
        '<span style="color:#f1f1f1;font-weight:600;">' + j.role + '</span>  ' +
        '<span style="color:#6b7280;">@ ' + j.company + ' · ' + j.loc + '</span>'
      );
      line('  <span style="color:#4b5563;">' + j.period + '</span>');
      line('  <span style="color:#86efac;">' + j.tech + '</span>');
      blank();
    });
  },

  contact() {
    blank();
    line('📬 <span style="color:#22c55e;font-weight:600;">Contact:</span>');
    blank();
    line('  📧 <a href="mailto:abdelazizomardev@gmail.com" style="color:#86efac;text-decoration:none;">abdelazizomardev@gmail.com</a>');
    line('  📞 <span style="color:#d1d5db;">(+20) 01027588498</span>');
    line('  🐙 <a href="https://github.com/aomarabdelaziz" target="_blank" style="color:#86efac;text-decoration:none;">github.com/aomarabdelaziz</a>');
    line('  💼 <a href="https://www.linkedin.com/in/aomarabdelaziz/" target="_blank" style="color:#86efac;text-decoration:none;">linkedin.com/in/aomarabdelaziz</a>');
    blank();
  },

  certs() {
    blank();
    line('🏆 <span style="color:#22c55e;font-weight:600;">Certifications:</span>');
    blank();
    const list = [
      ['CKA', 'Certified Kubernetes Administrator',  'Linux Foundation',   '2023 – 2026'],
      ['CLF', 'AWS Certified Cloud Practitioner',    'Amazon Web Services', '2023 – 2026'],
      ['SAA', 'AWS Solutions Architect – Associate', 'Amazon Web Services', '2026 – 2029'],
    ];
    list.forEach(([badge, name, issuer, validity]) => {
      line(
        '  <span style="color:#f59e0b;font-weight:700;">[' + badge + ']</span>  ' +
        '<span style="color:#f1f1f1;">' + name + '</span>'
      );
      line('        <span style="color:#6b7280;">' + issuer + '  •  ' + validity + '</span>');
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
