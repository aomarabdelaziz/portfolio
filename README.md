# Abdelaziz Omar — DevOps Engineer Portfolio

A modern, terminal-themed personal portfolio built with vanilla HTML, CSS, and JavaScript. All content is driven by a single configuration file for easy customization.

## Features

- **Config-driven content** — Edit `config.js` to update all sections (personal info, experience, skills, certifications, contact, etc.)
- **Dark/Light theme toggle**
- **Terminal emulator** — Interactive terminal with commands: `whoami`, `about`, `skills`, `experience`, `contact`, `certs`, `help`, `clear`, `gui`
- **Terminal autocomplete** — Type partially and get live command suggestions with arrow key / tab navigation
- **Mini games** — `xo` (Tic-Tac-Toe vs AI with minimax) and `rps` (Rock Paper Scissors)
- **macOS-style hero window** with traffic light dots
- **Linux command-styled section headers** (`$ cat ~/about/me.md`, `$ ls -la ~/experience/`, etc.)
- **Configurable section backgrounds** per section via config
- **Scroll-reveal animations**
- **Responsive design** with mobile hamburger menu
- **Typing animation** for roles in the hero section

## Project Structure

```
├── index.html    # Page structure and layout
├── config.js     # All portfolio data (edit this to customize)
├── script.js     # Dynamic rendering, terminal, games, interactions
├── styles.css    # Styling and animations
└── images/
    └── me.jpeg   # Profile photo
```

## Quick Start

1. Clone the repository
2. Open `config.js` and update with your own data
3. Replace `images/me.jpeg` with your photo
4. Open `index.html` in a browser

No build tools or dependencies required — pure HTML/CSS/JS with Tailwind CDN.

## Configuration

All content lives in `config.js`. Key sections:

| Section | What it controls |
|---|---|
| `name`, `fullName`, `title` | Personal info, page title, footer |
| `avatar` | Profile image path |
| `socials` | GitHub, LinkedIn, email, phone links |
| `calUrl` | Cal.com booking link (hero + contact) |
| `resumeUrl` | Resume PDF link |
| `heroGreeting`, `heroDescription` | Hero section text |
| `typingRoles` | Animated typing roles |
| `aboutBio`, `aboutBadges` | About section content |
| `timeline` | Journey timeline entries |
| `experience` | Work experience cards |
| `certifications` | Professional certifications |
| `skills` | Tech skills by category with icons |
| `sectionBackgrounds` | Per-section background colors |
| `contactIntro` | Contact section intro text |

## Terminal Commands

| Command | Description |
|---|---|
| `whoami` | Welcome message |
| `about` | Who is Abdelaziz? |
| `skills` | Technical skill set |
| `experience` | Work experience |
| `contact` | Get in touch |
| `certs` | Certifications |
| `xo` | Play Tic-Tac-Toe vs AI |
| `rps` | Play Rock Paper Scissors |
| `clear` | Clear the terminal |
| `gui` | Close terminal, go to site |

## License

MIT
