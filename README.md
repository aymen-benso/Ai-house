# AI House

A modern, responsive web application for AI House - a community platform dedicated to artificial intelligence innovation, education, and collaboration.

## 🚀 Features

- **Modern UI/UX** built with React 19, TypeScript, and Tailwind CSS
- **Component Library** powered by shadcn/ui with 40+ reusable components
- **Responsive Design** that works seamlessly on all devices
- **Dark/Light Theme** support with smooth transitions
- **Interactive Navigation** with scroll-based styling
- **Contact Forms** and dialog-based user interactions
- **Performance Optimized** with Vite for fast development and builds

## Team Collaboration Guide

This section is for **Frontend Development Team** members working on this project.

### Team Members

- **Abderaouf Ghezal** - Frontend Developer
- **Abderaouf Elorabi** - Frontend Developer
- **Mohamed** - Frontend Developer

### Git Workflow

We use **Git Flow** branching strategy:

```
main        → Production-ready code
  ↑
develop     → Integration branch for features
  ↑
feature/*   → Individual feature branches
hotfix/*    → Emergency production fixes
```

### Branch Naming Convention

| Branch Type | Pattern | Example |
|-------------|---------|---------|
| Feature | `feature/description` | `feature/hero-section` |
| Bugfix | `fix/bug-description` | `fix/navbar-responsive` |
| Hotfix | `hotfix/critical-fix` | `hotfix/api-connection` |

### Commit Message Convention

Use format: `<type>: <description>`

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: add events page` |
| `fix` | Bug fix | `fix: correct mobile navigation` |
| `docs` | Documentation | `docs: update component usage` |
| `refactor` | Code refactoring | `refactor: simplify button component` |
| `style` | UI/styling changes | `style: update color palette` |
| `chore` | Maintenance | `chore: update dependencies` |

### Development Workflow

1. **Before starting work:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **During development:**
   - Write clean, typed code with TypeScript
   - Follow existing component patterns
   - Use shadcn/ui components when possible
   - Test your changes locally (responsive, dark/light mode)
   - Commit frequently with clear messages

3. **Before pushing:**
   ```bash
   npm run lint          # Check code style
   npm run build         # Verify build succeeds
   ```

4. **Create Pull Request:**
   - Push branch: `git push origin feature/your-feature-name`
   - Open PR to `develop` branch
   - Add meaningful title and description
   - Link related issues
   - Request review from 1-2 team members

### Code Review Checklist

**For Authors:**
- [ ] Self-review completed
- [ ] No console.logs left
- [ ] Responsive design tested
- [ ] Dark/light mode tested
- [ ] Component properly typed

**For Reviewers:**
- [ ] Code logic is correct
- [ ] UI/UX consistency checked
- [ ] Performance impact assessed
- [ ] Variable names are clear
- [ ] No duplicate code

### Project Tasks Assignment

**Frontend Completion Deadline: March 25, 2026**

| Task | Assigned To | Description | Deadline | Status |
|------|-------------|-------------|----------|--------|
| **Landing Page & Hero Section** | Abderaouf Ghezal | Hero section, navbar, footer, main landing layout | March 22 | Not Started |
| **Events & Team Pages** | Abderaouf Elorabi | Events listing, event details, team members display | March 22 | Not Started |
| **Contact, Testimonials & UI Polish** | Mohamed | Contact forms, testimonials section, animations, responsive fixes | March 22 | Not Started |
| **API Integration** | All | Connect frontend to backend APIs, error handling | March 25 | Not Started |
| **Final Testing & Optimization** | All | Cross-browser testing, performance optimization, bug fixes | March 25 | Not Started |

---

#### Abderaouf Ghezal - Landing Page & Hero Section
- [ ] Create Hero section with call-to-action
- [ ] Build responsive Navigation component
- [ ] Create Footer with links and social icons
- [ ] Implement scroll-based navbar styling
- [ ] Add smooth scroll animations
- [ ] Ensure mobile responsiveness
- [ ] **Deadline: March 22, 2026**

#### Abderaouf Elorabi - Events & Team Pages
- [ ] Create Events listing page
- [ ] Build Event detail/card component
- [ ] Implement Event registration modal/form
- [ ] Create Team members display section
- [ ] Add filtering for events (upcoming/past)
- [ ] Test responsive layout on all devices
- [ ] **Deadline: March 22, 2026**

#### Mohamed - Contact, Testimonials & UI Polish
- [ ] Create Contact form with validation
- [ ] Build Testimonials section/carousel
- [ ] Implement form submission handling
- [ ] Add page transition animations
- [ ] Polish responsive design (mobile, tablet, desktop)
- [ ] Fix any UI inconsistencies
- [ ] **Deadline: March 22, 2026**

---

### Daily Check-ins

**Standup Time:** 9:00 PM daily

**Format:**
1. What did you complete today?
2. What are you working on tomorrow?
3. Any blockers?

### Work Distribution Rules

- Each member works on their assigned module in a separate branch
- Branch naming: `feature/abderaouf-ghezal-hero`, `feature/abderaouf-elorabi-events`, `feature/mohamed-contact`
- Create PR to `develop` branch when module is complete
- All PRs must be reviewed by at least 1 other member
- Merge only after approval and build passes

### Communication

- **Daily standups:** Check progress and blockers
- **Discord/Slack:** Quick questions and updates
- **GitHub Issues:** Track bugs and feature requests
- **PR Comments:** Code-specific discussions

### Environment Setup (Team)

Each team member should:

1. Clone the repo
2. Copy `.env.example` to `.env` (if exists)
3. Use **different ports** if working on same machine:
   ```bash
   npm run dev -- --port 5173  # Member 1
   npm run dev -- --port 5174  # Member 2
   ```
4. Never commit `.env` or `node_modules`
5. Always pull `develop` before creating new branches

### Component Guidelines

When creating new components:
- Place in `src/components/` or `src/sections/`
- Use TypeScript for type safety
- Follow shadcn/ui patterns when possible
- Export from index files for clean imports
- Document props with JSDoc comments

---

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite 7.2.4** - Fast build tool and dev server
- **Tailwind CSS 3.4.19** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Consistent icon system
- **class-variance-authority** - Utility for component variants
- **tailwind-merge** - Utility for merging Tailwind classes

### Form Handling & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation integration

### Additional Features
- **next-themes** - Theme management
- **Sonner** - Toast notifications
- **Recharts** - Data visualization
- **date-fns** - Date manipulation utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aymen-benso/Ai-house.git
   cd Ai-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/ui/          # shadcn/ui components (40+)
├── sections/               # Page sections
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── lib/                    # Utility functions
├── App.tsx                 # Main application component
├── App.css                 # App-specific styles
├── index.css               # Global styles
└── main.tsx                # Application entry point
```

### Available Components

The project includes 40+ pre-built components:
`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`, `button`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `dropdown-menu`, `form`, `input`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `sheet`, `skeleton`, `slider`, `sonner`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `tooltip`

## 🎨 Usage Examples

### Using Components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI House Features</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

### Theme Support

The application supports both light and dark themes with automatic system preference detection:

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </Button>
  )
}
```

## 🔧 Configuration

### Tailwind CSS
- **Theme**: shadcn theme with custom color palette
- **Plugins**: Tailwind CSS Animates for smooth transitions
- **Config**: Located in `tailwind.config.js`

### TypeScript
- **Strict mode** enabled for better type safety
- **Path aliases** configured (`@/` for `src/`)
- **React types** included for component props

### ESLint
- **React recommended rules** enabled
- **TypeScript integration** for type-aware linting
- **Config file**: `eslint.config.js`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Vite** for the blazing fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for the accessible primitive components

## 📞 Contact

For more information about AI House:
- Visit our website at [AI House](https://ai-house.example.com)
- Follow us on social media
- Join our community Discord server

---

Built with ❤️ by the AI House team
