# OnlyModels - Premium OnlyFans Creator Management Platform

A cutting-edge Next.js application designed for OnlyFans creator management, featuring stunning animations, responsive design, and a premium user experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
onlymodels/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles & Tailwind
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── page.tsx           # Main landing page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   └── [sections]/       # Page sections
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   └── assets/              # Images and media
└── [config files]           # Next.js, TypeScript, Tailwind configs
```

---

## 🎨 Components Overview

### Core Layout Components

#### **Header** (`header.tsx`)
- **Desktop**: Full navigation with logo, menu items (Home, Blog, About, Contact) pointing to page sections, theme toggle, and CTA buttons
- **Mobile**: Creative hamburger menu with fluid morphing animation and animated overlay
- **Features**:
  - Glassmorphism effect with backdrop blur
  - Smooth animations on scroll
  - Mobile menu with noise texture and gradients
  - Theme toggle (light/dark mode)
  - "Refer" and "Apply Now" CTA buttons
  - **Animation**: Snappy spring physics (stiffness 150) for instant menu opening

#### **Footer** (`footer.tsx`)
- Company information and social links
- Copyright and legal information
- Responsive grid layout
- Restored "Quick Links" section matching header navigation

---

## 📱 Page Sections (In Order)

### 1. **Hero Section** (`hero-section.tsx`)
- **Desktop**: Large animated heading with rotating phrases
- **Mobile**: Centered layout with optimized text size
- **Features**:
  - Interactive particle background (`interactive-hero-background.tsx`)
  - Animated phrase rotation (`hero-phrase-animations.tsx`)
  - Gradient text effects
  - CTA buttons with hover animations
- **Mobile Optimizations**:
  - Reduced font sizes
  - Centered alignment
  - Full-width text display

### 2. **Featured Logos** (`featured-section.tsx`)
- Infinite scrolling logo carousel
- **Mobile**: Faster animation speed (15s vs 30s desktop)
- Glassmorphism cards with hover effects

### 3. **Top Creators Section** (`top-creators-section.tsx`)
- **Desktop**: Two-column layout (text + image)
- **Mobile**: Stacked layout with centered text
- **Features**:
  - Gradient heading: "We create the top 0.1%"
  - Intersection observer animations
  - Image with decorative overlays
- **Mobile Fix**: Added padding-bottom to prevent text cropping

### 4. **Metrics Section** (`metrics-section.tsx`)
- Key performance indicators
- Animated counters on scroll
- Responsive grid layout

### 5. **Why OnlyModels** (`why-onlymodels-section.tsx`)
- Feature highlights with icons
- Animated cards on scroll
- Responsive grid (1-2-3 columns)

### 6. **Workflow Section** (`workflow-section.tsx`)
- 3-step process cards using `CyberCard` component
- **Desktop**: 3-column grid
- **Mobile**: Single column, smaller cards
- **Features**:
  - 3D tilt effects on hover
  - Animated backgrounds
  - Dashboard preview image
- **Mobile Optimizations**:
  - Hidden decorative lines to prevent text overlap

### 7. **Done For You Section** (`done-for-you-section.tsx`)
- Service offerings with animated KPIs
- **Mobile**: Adjusted intersection threshold (0.1) for visibility
- Gradient backgrounds and glow effects

### 8. **Features Section** (`features-section.tsx`)
- Detailed feature breakdown
- Interactive cards with hover states
- **Mobile**: Adjusted intersection threshold (0.1) for visibility

### 9. **Real Struggles Section** (`real-struggles-section.tsx`)
- 6 pain point cards in grid layout
- **Desktop**: 2-column grid
- **Mobile**: Single column
- **Features**:
  - Parallax mouse effects
  - Card tilt animations
  - Hover glow effects
- **Mobile Optimizations**:
  - Hidden decorative lines at bottom of cards

### 10. **Steps to Start** (`steps-to-start-section.tsx`)
- 5-step onboarding process
- Animated timeline with scroll progress
- **Desktop**: 2-column grid with vertical line
- **Mobile**: Single column
- **Features**:
  - "Start your Journey" button
  - "No risk • Transparent rev share" text
- **Mobile Optimizations**:
  - Smaller button size (1em vs 1.5em)
  - Reduced text size (10px vs 14px)

### 11. **Testimonials Section** (`testimonials-section.tsx`)
- 3D rotating carousel with 6 testimonials
- **Desktop**: Full-size cards with names in pagination
- **Mobile**: Compact cards with dot-only pagination
- **Features**:
  - Auto-rotation every 6 seconds
  - Swipe gestures (left/right) on mobile
  - Previous/Next navigation buttons
  - Credibility pills (satisfaction, uplift, retention)
  - **Rendering Fix**: Optimized scroll trigger (threshold 0.1) to ensure visibility on entry
- **Mobile Optimizations**:
  - Card size: 280px (vs 384px desktop)
  - Reduced padding and text sizes
  - 3D depth: 320px (vs 520px desktop)
  - Pagination shows dots only (no names)
  - Touch swipe support with 50px threshold

### 12. **Transparency Section** (`transparency-section.tsx`)
- Trust indicators and guarantees
- Animated reveal on scroll

### 13. **FAQ Section** (`faq-section.tsx`)
- Accordion-style questions
- Stats pills (onboarding time, retention, NPS)
- **Mobile Optimizations**:
  - Full-width pills with inline layout
  - Label left, value right

### 14. **CTA Section** (`cta-section.tsx`)
- Primary call-to-action
- Contact information
- Referral program details
- **Features**:
  - "Apply Now" button with email link
  - Phone number button
  - Referral perks with hologram cards

---

## 🎯 UI Components (`src/components/ui/`)

### **CyberCard** (`cyber-card.tsx`)
- 3D tilt effect card
- Used in Workflow section
- Animated backgrounds and borders
- **Mobile**: Hidden decorative lines

### **Lightning Button** (`lightning-button.tsx`)
- Animated CTA button with glow effects
- Used in CTA section

### **Start Journey Button** (`start-journey-button.tsx`)
- Animated arrow button
- **Mobile**: Reduced size (1em vs 1.5em)

---

## 🌓 Theme System

### **Theme Provider** (`theme-provider.tsx`)
- Next.js theme provider wrapper
- Manages light/dark mode state

### **Theme Toggle** (`theme-toggle.tsx`)
- Animated sun/moon toggle button
- Located in header
- Smooth transitions between modes

### **Color Scheme** (Strict Pink/Dark Theme)
- **Accent Primary**: `#FF1493` (Deep Pink) - Main brand color
- **Accent Secondary**: `#FF69B4` (Hot Pink) - Secondary accents
- **Accent Soft**: `#FFC0CB` (Pink) - Subtle highlights
- **Accent Dark**: `#C71585` (Medium Violet Red) - Dark mode accents
- **Background**: Dark mode optimized with pink-tinted shadows
- **Foreground**: High contrast text with pink highlights
- **Design Philosophy**: All gradients, shadows, and accents use pink/dark shades only - no purple or blue tints

---

## 📱 Mobile Responsiveness

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile-Specific Features**

#### **Header**
- Hamburger menu with full-screen overlay
- Animated menu items with stagger effect
- Noise texture background
- Gradient accents

#### **Hero Section**
- **Text Cropping Fix**: Hero phrase font size reduced from `2.25rem` to `1.35rem` minimum using `clamp(1.35rem, 5vw, 3.25rem)` to prevent text from being cut off on smaller screens
- **Visuals Scaling**: Hero visuals scaled to `65%` on mobile, `75%` on tablets, and `100%` on desktop to ensure all elements fit properly within the viewport
- Centered text alignment
- Full-width layout
- Faster logo carousel

#### **Sections with Visibility Fixes**
- "We Do For You": Threshold 0.1 (was 0.2)
- "Features": Threshold 0.1 (was 0.2)
- Ensures sections appear on mobile viewports

#### **Decorative Lines Hidden**
- Workflow section cards
- Real Struggles section cards
- Prevents text overlap on mobile

#### **Testimonials Carousel**
- Swipe gestures enabled
- Smaller card size (280px)
- Reduced padding (p-4)
- Dot-only pagination
- Auto-rotation maintained

#### **Pills (FAQ & Testimonials)**
- Full-width on mobile
- Inline layout (label left, value right)
- Compact on desktop

#### **Text Sizing**
- Headings: Reduced on mobile
- "Start Journey" button: 1em (vs 1.5em)
- "No risk" text: 10px (vs 14px)

---

## 🎭 Animations & Effects

### **Extraordinary Scroll Entry Animations**
Each section features unique, high-impact animations powered by Framer Motion:

- **Real Struggles**: "Domino Effect" - Cards tilt up in 3D with staggered timing
- **Steps To Start**: "Cascading Slide-In" - Steps alternate sliding in from left/right
- **FAQ**: "Rolodex Flip" - Questions flip down in 3D rotation
- **Testimonials**: "Orbit Expansion" - Carousel scales up with rotation
- **CTA**: "Explosive Reveal" - Main card bounces in with dramatic scale

### **Scroll Animations**
- Intersection Observer for section reveals
- Stagger animations for lists
- Parallax effects on mouse move
- Spring physics (damping: 25, stiffness: 150) for natural motion

### **Hover Effects**
- Card tilt (3D transform)
- Glow effects
- Scale transitions
- Border color changes

### **Background Effects**
- Interactive particle system (hero)
- Gradient animations
- Noise textures
- Glassmorphism

### **Carousel Animations**
- 3D rotation (testimonials)
- Auto-rotation with pause on hover
- Swipe gestures on mobile
- Spring physics transitions

---

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Google Fonts (Inter, Outfit)

---

## ⚡ Performance Optimizations

### **Smooth Scrolling**
- **Lenis Integration**: Premium smooth scrolling library for buttery-smooth performance
- Configuration in `src/components/smooth-scroll.tsx`
- CSS optimizations in `globals.css` for `html.lenis`

### **Animation Performance**
- **`will-change-transform`**: Applied to heavy animated elements (Hero, Workflow, Testimonials, CTA)
- Prevents layout thrashing and reduces lag
- Optimized for 60fps animations

### **Build Optimizations**
- Next.js 15 with Turbopack for faster builds
- Image optimization with Next.js Image component
- Code splitting for faster initial load

---

## 📝 Development Notes

### **Key Files to Edit**

#### **Adding New Sections**
1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to page in desired order
4. Follow strict pink/dark color scheme
5. Add unique scroll entry animation

#### **Styling**
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific: Inline with Tailwind classes
- **Color Palette**: Use `text-accent`, `bg-accent`, etc. for pink theme

#### **Animation Guidelines**
- Use Framer Motion for all animations
- Spring physics: `{ damping: 25, stiffness: 150 }`
- Add `will-change-transform` for heavy animations
- Each section should have a unique animation style

#### **Mobile Optimization Checklist**
- [ ] Test on mobile viewport (< 768px)
- [ ] Adjust font sizes with responsive classes
- [ ] Hide decorative elements if they cause overlap
- [ ] Test intersection observer thresholds
- [ ] Verify touch interactions work
- [ ] Check text doesn't crop (use clamp for font sizes)
- [ ] Test hero visuals scaling on mobile

### **Common Issues & Fixes**

**Text Cropping on Mobile**
- Use `clamp()` for responsive font sizes
- Add `pb-2` (padding-bottom) to headings
- Add `leading-tight` for better line-height

**Sections Not Appearing on Mobile**
- Reduce intersection threshold to 0.1
- Check for overflow: hidden on parents

**Decorative Lines Overlapping Text**
- Add `hidden md:block` to hide on mobile

**Carousel Too Large**
- Reduce max-width, padding, and translateZ
- Use responsive classes (e.g., `max-w-[280px] md:max-w-sm`)

**Animation Lag**
- Add `will-change-transform` to animated elements
- Reduce number of simultaneous animations
- Use Lenis for smooth scrolling

---

## 🚢 Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

Deploy to Vercel, Netlify, or any Next.js-compatible platform.

---

## 📄 License

Proprietary - OnlyModels Platform

---

## 👥 Support

For questions or issues, contact the development team.
