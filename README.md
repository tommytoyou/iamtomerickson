# iamtomerickson.com

Personal portfolio website for Tom Erickson, CAPM - Certified Project Manager & International Communications Consultant based in Kampot, Cambodia.

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Scroll Effects:** react-intersection-observer
- **Icons:** Custom SVG components + Lucide React

## Folder Structure

```
src/
├── components/        # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Icons.jsx
│   ├── Navbar.jsx
│   ├── SectionHeader.jsx
│   ├── SocialLinks.jsx
│   └── index.js
├── sections/          # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Publications.jsx
│   ├── Contact.jsx
│   └── index.js
├── data/              # Site content data
│   └── siteData.js
├── hooks/             # Custom React hooks
│   ├── useTheme.jsx
│   ├── useScrollReveal.js
│   └── index.js
├── App.jsx
├── main.jsx
└── index.css          # Tailwind + custom styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tommytoyou/iamtomerickson.git
cd iamtomerickson

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Content

All site content is centralized in `src/data/siteData.js`:

- `personalInfo` - Name, bio, tagline, contact info, stats
- `socialLinks` - Social media profiles
- `experience` - Work history timeline
- `projects` - Portfolio projects
- `skills` - Technical skills, certifications, methodologies
- `education` - Academic background
- `publications` - Newsletter and publication categories
- `navigation` - Nav menu items

### Styling

Theme colors and custom styles are defined in `src/index.css`:

- **Colors:** Navy palette, accent blues in `@theme` block
- **Fonts:** Playfair Display (display), Sora (body)
- **Animations:** Custom keyframes for fade, slide, float effects
- **Components:** `.gradient-text`, `.card-hover`, `.btn-shine`, `.nav-blur`, `.noise-overlay`

### Dark/Light Mode

Theme toggle is built-in. Default is dark mode. Theme preference is saved to localStorage.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and configures build settings
4. Deploy!

**Environment variables:** None required for basic deployment.

**Build settings (auto-detected):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Manual Deployment

Build the project and deploy the `dist/` folder to any static hosting:

```bash
npm run build
```

Compatible with: Netlify, GitHub Pages, Cloudflare Pages, AWS S3, etc.

## License

MIT

---

Built with React + Vite + Tailwind CSS
