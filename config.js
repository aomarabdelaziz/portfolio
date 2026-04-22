/* ════════════════════════════════════════════════════════
   config.js  —  All CV data in one place
   Edit this file to update your portfolio content.
   ════════════════════════════════════════════════════════ */

const CONFIG = {

  // ── Personal Info ──────────────────────────────────────
  name: 'Abdelaziz',
  fullName: 'Abdelaziz Omar',
  initials: 'AO',
  avatar: 'images/me.jpeg',
  title: 'DevOps Engineer',
  location: 'Alexandria, Egypt',
  relocate: true,
  resumeUrl: 'https://aomarabdelaziz.github.io/CV/Abdelaziz%20Omar%20Abdelaziz%20Omar%20CV.pdf',

  // ── Hero Section ───────────────────────────────────────
  heroGreeting: 'Hello World 👋',
  heroDescription: 'Motivated DevOps Engineer with a strong focus on infrastructure reliability, scalability, and security. Experienced in CI/CD pipeline design and cloud environment management on AWS.',
  typingRoles: ['DevOps Engineer', 'Cloud Architect', 'Linux Enthusiast'],
  logoWords: ['DevOps Engineer', 'Abdelaziz'],

  // ── Social Links ───────────────────────────────────────
  socials: {
    github:   { url: 'https://github.com/aomarabdelaziz',              label: 'github.com/aomarabdelaziz' },
    linkedin: { url: 'https://www.linkedin.com/in/aomarabdelaziz/',    label: 'linkedin.com/in/aomarabdelaziz' },
    email:    { url: 'mailto:abdelazizomardev@gmail.com',              label: 'abdelazizomardev@gmail.com' },
    phone:    { url: 'tel:+201027588498',                              label: '(+20) 01027588498' },
  },

  // ── About Section ──────────────────────────────────────
  aboutBio: [
    'I\'m <strong style="color:var(--foreground);opacity:1;">Abdelaziz Omar</strong>, based in <strong style="color:var(--foreground);opacity:1;">Alexandria, Egypt</strong>, and ready to relocate. I hold a B.Sc. from <strong style="color:var(--foreground);opacity:1;">Alexandria University</strong> and completed an Information Technology Diploma at ITI.',
    'I design and automate cloud infrastructure, CI/CD pipelines, and containerized systems with a focus on reliability, scalability, and security. My work spans AWS cloud deployments, Kubernetes orchestration, and GitOps practices to deliver production-grade platforms.',
    'Certified as a <span style="color:var(--primary);font-weight:600;">Certified Kubernetes Administrator (CKA)</span>, <span style="color:var(--primary);font-weight:600;">AWS Cloud Practitioner</span>, and <span style="color:var(--primary);font-weight:600;">AWS Solutions Architect – Associate</span>. Proficient in Python and Bash scripting with solid AWS and infrastructure automation knowledge.',
  ],
  aboutBadges: [
    { label: 'CKA',           primary: true },
    { label: 'AWS CLF',       primary: true },
    { label: 'AWS SAA',       primary: true },
    { label: 'Arabic Native', primary: false },
    { label: 'English B1',    primary: false },
  ],

  // ── Timeline (About section) ───────────────────────────
  timeline: [
    { year: '2017',            text: 'Started B.Sc. in Agricultural Economy at Alexandria University.', current: false },
    { year: '2020',            text: 'Joined Full-Stack Web Development bootcamp — first steps into software engineering.', current: false },
    { year: '2021',            text: 'Started as Backend Developer with PHP/Laravel, building and optimizing web applications.', current: false },
    { year: '2022',            text: 'Enrolled in ITI IT Diploma. Completed NTI (Kubernetes/GitHub Actions) and Route Academy courses.', current: false },
    { year: '2023',            text: 'Joined ISFP as DevOps Engineer. Earned CKA and AWS Cloud Practitioner certifications.', current: false },
    { year: '2024 – Present',  text: 'Joined B.TECH as DevOps Engineer. Building EKS GitOps platforms and hybrid cloud solutions with AWS Outposts.', current: true },
  ],

  // ── Work Experience ────────────────────────────────────
  experience: [
    {
      company: 'B.TECH',
      subtitle: '(b_labs & mylo)',
      role: 'DevOps Engineer',
      location: 'Cairo',
      period: 'Apr 2024 – Present',
      description: 'Automated software delivery with EKS, Helm, ArgoCD, and Terraform. Implemented AWS Outposts for hybrid cloud with Kubernetes. Designed GitOps pipelines and maintained infrastructure as code at scale.',
      tags: ['EKS', 'Helm', 'ArgoCD', 'Terraform', 'GitHub Actions'],
    },
    {
      company: 'ISFP',
      subtitle: '',
      role: 'DevOps Engineer',
      location: 'Alexandria',
      period: 'Apr 2023 – Mar 2024',
      description: 'Built CI/CD pipelines with Jenkins and Ansible, cutting deployment time and operational errors. Containerized services with Docker and set up Prometheus + Grafana monitoring for Linux production environments.',
      tags: ['Ansible', 'Jenkins', 'Docker', 'Prometheus', 'Grafana'],
    },
    {
      company: 'Freelance',
      subtitle: '',
      role: 'Backend Engineer',
      location: 'Remote',
      period: 'Aug 2021 – Oct 2022',
      description: 'Maintained and extended PHP/Laravel web applications, optimized MySQL query performance, and configured Nginx. Contributed to Arabic localization and UI improvements for client projects.',
      tags: ['PHP', 'Laravel', 'MySQL', 'Nginx'],
    },
  ],

  // ── Certifications ─────────────────────────────────────
  certifications: [
    { badge: 'SAA', name: 'AWS Solutions Architect – Associate', issuer: 'Amazon Web Services',  validity: '2026 – 2029' },
    { badge: 'CKA', name: 'Certified Kubernetes Administrator',  issuer: 'Linux Foundation',     validity: '2023 – 2026' },
    { badge: 'CLF', name: 'AWS Certified Cloud Practitioner',    issuer: 'Amazon Web Services',  validity: '2023 – 2026' },
  ],

  // ── Skills ─────────────────────────────────────────────
  skills: [
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes' },
        { name: 'Terraform',  icon: 'https://cdn.simpleicons.org/terraform' },
        { name: 'Ansible',    icon: 'https://cdn.simpleicons.org/ansible' },
        { name: 'Helm',       icon: 'https://cdn.simpleicons.org/helm' },
        { name: 'OpenShift',  icon: 'https://cdn.simpleicons.org/redhatopenshift' },
      ],
    },
    {
      category: 'Containers & CI/CD',
      items: [
        { name: 'Docker',     icon: 'https://cdn.simpleicons.org/docker' },
        { name: 'Jenkins',    icon: 'https://cdn.simpleicons.org/jenkins' },
        { name: 'ArgoCD',     icon: 'https://cdn.simpleicons.org/argo' },
        { name: 'GH Actions', icon: 'https://cdn.simpleicons.org/githubactions' },
        { name: 'Nginx',      icon: 'https://cdn.simpleicons.org/nginx' },
        { name: 'Nexus',      icon: 'https://cdn.simpleicons.org/sonatype' },
      ],
    },
    {
      category: 'Observability',
      items: [
        { name: 'Prometheus',    icon: 'https://cdn.simpleicons.org/prometheus' },
        { name: 'Grafana',       icon: 'https://cdn.simpleicons.org/grafana' },
        { name: 'Loki',          icon: 'https://cdn.simpleicons.org/grafana' },
        { name: 'OpenTelemetry', icon: 'https://cdn.simpleicons.org/opentelemetry' },
      ],
    },
    {
      category: 'Programming & Scripting',
      items: [
        { name: 'Python',     icon: 'https://cdn.simpleicons.org/python' },
        { name: 'Bash',       icon: 'https://cdn.simpleicons.org/gnubash' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
        { name: 'PHP',        icon: 'https://cdn.simpleicons.org/php' },
        { name: 'C#',         icon: 'https://cdn.simpleicons.org/dotnet' },
      ],
    },
    {
      category: 'Tools & OS',
      items: [
        { name: 'Linux',   icon: 'https://cdn.simpleicons.org/linux' },
        { name: 'Git',     icon: 'https://cdn.simpleicons.org/git' },
        { name: 'GitHub',  icon: 'https://cdn.simpleicons.org/github', invert: true },
        { name: 'MySQL',   icon: 'https://cdn.simpleicons.org/mysql' },
        { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg' },
      ],
    },
  ],

  // ── Contact Section ────────────────────────────────────
  contactIntro: "I'm always open to discussing new opportunities, interesting projects, or just having a conversation about DevOps and cloud infrastructure. Feel free to reach out!",

  // ── Terminal command emoji mappings for skills ──────────
  terminalSkillEmojis: {
    'Cloud & Infrastructure': ['☁  AWS', '⚙  Kubernetes', '🏗  Terraform', '📋 Ansible', '⚓ Helm', '🔴 OpenShift'],
    'Containers & CI/CD':     ['🐋 Docker', '🔧 Jenkins', '🚢 ArgoCD', '⚡ GitHub Actions', '📦 Nexus', '🌐 Nginx'],
    'Observability':          ['📊 Prometheus', '📈 Grafana', '📝 Loki', '🔭 OpenTelemetry'],
    'Programming & Scripting': ['🐍 Python', '💻 Bash', '⚡ JavaScript', '🐘 PHP', '# C#'],
    'Tools & OS':             ['🐧 Linux', '📂 Git', '🐱 GitHub', '🗄  MySQL', '🪟 Windows'],
  },

  // ── Section Background Colors ──────────────────────────
  // Set per-section backgrounds. Use any CSS value (color, gradient, etc.)
  // Leave empty string '' or remove a key to use the default.
  sectionBackgrounds: {
    home:       '',
    about:      '',
    experience: 'rgba(128,128,128,0.02)',
    skills:     '',
    contact:    'rgba(128,128,128,0.02)',
  },
};
