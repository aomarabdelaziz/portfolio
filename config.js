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
  title: 'Senior DevOps Engineer',
  location: 'Alexandria, Egypt',
  relocate: true,
  resumeUrl: 'https://aomarabdelaziz.github.io/CV/Abdelaziz%20Omar%20Abdelaziz%20Omar%20CV.pdf',
  calUrl: 'https://cal.com/abdelaziz-omar/15min',

  // ── Hero Section ───────────────────────────────────────
  heroGreeting: '',
  heroDescription: 'Senior DevOps Engineer specializing in infrastructure design, continuous delivery, observability, and cloud-native architectures. Committed to operational excellence and system resilience.',
  typingRoles: ['Senior DevOps Engineer', 'Certified Kubernetes & AWS Solution Architect', 'Scalable Cloud Systems Builder'],
  logoWords:   ['Abdelaziz'],

  // ── Social Links ───────────────────────────────────────
  socials: {
    github:   { url: 'https://github.com/aomarabdelaziz',              label: 'github.com/aomarabdelaziz' },
    linkedin: { url: 'https://www.linkedin.com/in/aomarabdelaziz/',    label: 'linkedin.com/in/aomarabdelaziz' },
    email:    { url: 'mailto:abdelazizomardev@gmail.com',              label: 'abdelazizomardev@gmail.com' },
    phone:    { url: 'tel:+201027588498',                              label: '(+20) 01027588498' },
  },

  // ── About Section ──────────────────────────────────────
  aboutBio: [
    'I\'m <strong style="color:var(--foreground);opacity:1;">Abdelaziz Omar</strong>, based in <strong style="color:var(--foreground);opacity:1;">Alexandria, Egypt</strong>, and ready to relocate. I hold a B.Sc. from <strong style="color:var(--foreground);opacity:1;">Alexandria University</strong> and completed a <strong style="color:var(--foreground);opacity:1;">DevOps</strong> Track at <strong style="color:var(--foreground);opacity:1;">ITI</strong>.',
    
    'I design and automate cloud infrastructure, CI/CD pipelines, and containerized systems with a focus on reliability, scalability, and security. My work spans cloud deployments, Kubernetes orchestration, and GitOps practices to deliver production-grade platforms.',
    
    'Certified as a <a href="https://www.credly.com/badges/973927cf-5673-427b-b231-82632320005d/public_url" target="_blank" rel="noopener noreferrer" style="color:var(--primary);font-weight:600;text-decoration:none;transition:color 0.3s ease;" onmouseover="this.style.color=\'var(--foreground)\'" onmouseout="this.style.color=\'var(--primary)\'">Certified Kubernetes Administrator (CKA)</a> and <a href="https://www.credly.com/badges/02b6da1a-9a2d-4368-a797-f272d10eb4a0/public_url" target="_blank" rel="noopener noreferrer" style="color:var(--primary);font-weight:600;text-decoration:none;transition:color 0.3s ease;" onmouseover="this.style.color=\'var(--foreground)\'" onmouseout="this.style.color=\'var(--primary)\'">AWS Solutions Architect – Associate</a>.'
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
    { year: '2022',            text: 'Enrolled in DevOps ITI Diploma. Completed NTI and Route Academy courses.', current: false },
    { year: '2023',            text: 'Joined ISFP as DevOps Engineer. Earned CKA and AWS Cloud Practitioner certifications.', current: false },
    { year: '2024 – Present',  text: 'Joined B.TECH as DevOps Engineer. Building EKS GitOps platforms and hybrid cloud solutions with AWS Outposts.', current: true },
  ],

  // ── Work Experience ────────────────────────────────────
  experience: [
    {
      company: 'B.TECH',
      subtitle: '(b_labs & mylo)',
      role: 'Senior DevOps Engineer',
      location: 'Cairo',
      period: 'Apr 2024 – Present',
      description: 'Automated software delivery with EKS, Helm, ArgoCD, and Terraform. Implemented AWS Outposts for hybrid cloud with Kubernetes. Designed GitOps pipelines and maintained infrastructure as code at scale.',
      tags: [ 'AWS', 'S3' , 'Lambda' , 'Api Gateway','EKS', 'AWS Outposts' , 'Helm', 'ArgoCD', 'Terraform', 'GitHub Actions', 'GitOps' , 'Prometheus', 'Grafana' , 'Jenkins', 'git' , 'Github'],
    },
    {
      company: 'ISFP',
      subtitle: '',
      role: 'DevOps Engineer',
      location: 'Alexandria',
      period: 'Apr 2023 – Mar 2024',
      description: 'Built CI/CD pipelines with Jenkins and Ansible, cutting deployment time and operational errors. Containerized services with Docker and set up Prometheus + Grafana monitoring for Linux production environments.',
      tags: ['Ansible', 'Jenkins', 'Docker', 'Linux', 'git' , 'svn'],
    },
    {
      company: 'Arabic Localizer',
      subtitle: '(aiobo ERP)',
      role: 'Backend Engineer',
      location: 'Alexandria',
      period: 'Aug 2021 – Oct 2022',
      description: 'Maintained and extended PHP/Laravel web applications, optimized MySQL query performance, and configured Nginx. Contributed to Arabic localization and UI improvements for client projects.',
      tags: ['Linux', 'PHP', 'Laravel', 'MySQL', 'Nginx', 'Docker', 'git', 'Github'],
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
        { name: 'Nexus',      icon: 'https://cdn.simpleicons.org/sonatype', invert: true },
      ],
    },
    {
      category: 'Observability',
      items: [
        { name: 'Prometheus',    icon: 'https://cdn.simpleicons.org/prometheus' },
        { name: 'Grafana',       icon: 'https://cdn.simpleicons.org/grafana' },
        { name: 'Loki',          icon: 'https://cdn.simpleicons.org/grafana' },
        { name: 'OpenTelemetry', icon: 'https://cdn.simpleicons.org/opentelemetry' , invert: true },
      ],
    },
    {
      category: 'Programming & Scripting',
      items: [
        { name: 'Python',     icon: 'https://cdn.simpleicons.org/python' },
        { name: 'Bash',       icon: 'https://cdn.simpleicons.org/gnubash' },
      ],
    },
    {
      category: 'Tools & OS',
      items: [
        { name: 'Linux',   icon: 'https://cdn.simpleicons.org/linux' },
        { name: 'Git',     icon: 'https://cdn.simpleicons.org/git' },
        { name: 'GitHub',  icon: 'https://cdn.simpleicons.org/github', invert: true },
      ],
    },
  ],

  // ── Contact Section ────────────────────────────────────
  contactIntro: "I'm always open to discussing new opportunities, interesting projects, or just having a conversation about DevOps and cloud infrastructure. Feel free to reach out!",

  // ── Terminal command emoji mappings for skills ──────────
  terminalSkillEmojis: {
    'Cloud & Infrastructure': ['☁  AWS', '⚙  Kubernetes', '🏗  Terraform', '📋 Ansible', '⚓ Helm'],
    'Containers & CI/CD':     ['🐋 Docker', '🔧 Jenkins', '🚢 ArgoCD', '⚡ GitHub Actions', '📦 Nexus', '🌐 Nginx'],
    'Observability':          ['📊 Prometheus', '📈 Grafana', '📝 Loki', '🔭 OpenTelemetry'],
    'Programming & Scripting':['🐍 Python', '💻 Bash'],
    'Tools & OS':             ['🐧 Linux', '📂 Git', '🐱 GitHub', '🪟 Windows'],
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
