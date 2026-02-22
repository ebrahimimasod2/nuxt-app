# Shanbe Global Intelligence Portal - Design Guide

## 🎨 Visual Identity

### Brand Positioning
**"The AI Agent Marketplace for the Iranian Startup Ecosystem"**

### Design Philosophy
- **High-tech**: Modern, cutting-edge AI-powered platform
- **Trustworthy**: Professional, clean, and transparent
- **Modern**: Contemporary design with smooth interactions

### Color Palette

#### Primary Colors
- **Navy/Midnight Blue**: `#0B1120` - Main brand color for text and accents
- **Gold/Amber**: `#D97706` - Highlight color for CTAs and active states
- **White**: `#FFFFFF` - Primary background color

#### Secondary Colors
- **Light Gray**: `#F8FAFC` - Page background
- **Medium Gray**: `#E2E8F0` - Borders and dividers
- **Dark Gray**: `#64748B` - Secondary text

#### Gradient Combinations
- Gold Gradient: `from-amber-500 to-amber-600`
- Navy Gradient: `from-navy-900 to-navy-800`
- Agent Colors: Various gradients (blue, green, purple, cyan, pink, amber)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)

#### Text Hierarchy
- **H1**: `text-5xl font-bold text-navy-900` (48px)
- **H2**: `text-3xl font-bold text-navy-900` (30px)
- **H3**: `text-2xl font-bold text-navy-900` (24px)
- **Body**: `text-base text-gray-600` (16px)
- **Small**: `text-sm text-gray-500` (14px)

## 🏗️ Layout Structure

### Sidebar Navigation (`layouts/default.vue`)
- **Width**: 288px (w-72)
- **Background**: White with shadow
- **Border**: Right border in light gray
- **Logo**: 128px width (w-32) at top
- **Menu Items**:
  - 📊 Market Pulse (/)
  - 🤖 Agent Store (/agents)
  - 🏢 About Shanbe (/about)
  - 📞 Contact Bridge (/contact)

### Active State
- **Background**: Gold gradient (`from-amber-500 to-amber-600`)
- **Text**: White
- **Shadow**: Medium shadow

### Hover State
- **Background**: Light gray (`bg-gray-100`)
- **Text**: Navy (`text-navy-900`)

## 📄 Page Designs

### 1. Market Pulse (Home Page)
**Purpose**: Real-time news feed from Iranian startup ecosystem

**Components**:
- Header with title and description
- 3 stat cards (Total Articles, Last Updated, Active Sources)
- News grid (3 columns on desktop)
- Each news card includes:
  - Colored tags
  - Title (hover effect to gold)
  - Excerpt (3 lines max)
  - Date and view count
  - Read more footer

**Card Style**:
- White background
- Shadow: `shadow-lg`
- Border: `border-gray-100`
- Hover: `hover:shadow-xl hover:-translate-y-1`

### 2. Agent Store
**Purpose**: AI agent marketplace with search functionality

**Components**:
- Search bar ("Find an expert...")
- Featured banner (gold gradient background)
- Agent grid (3 columns on desktop)

**Agent Card Structure**:
- Icon with gradient background
- Badge (Finance, Legal, Research, etc.)
- Agent name (hover to gold)
- Description
- Stats (users, rating, online status)
- Specializations (skill tags)
- "Try Agent" button (gold gradient)

**Card Hover Effect**:
- Lift: `hover:-translate-y-1`
- Shadow: `hover:shadow-2xl`
- Name color: `hover:text-amber-600`

### 3. About Shanbe
**Purpose**: Mission, values, and impact showcase

**Sections**:
- Hero with mission statement
- Core values grid (3 cards)
- Impact stats (dark navy background)
- Why choose Shanbe (feature list)
- CTA section

### 4. Contact Bridge
**Purpose**: Professional contact form for investors

**Layout**: 2-column grid
- Left: Contact form with validation
- Right: Contact info and quick facts

**Form Fields**:
- Full Name
- Email Address
- Organization
- Role (dropdown)
- Area of Interest (checkboxes)
- Message (textarea)

## 🎯 UI Components

### Buttons

#### Primary Button (Gold)
```html
<button class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl">
  Button Text
</button>
```

#### Secondary Button (White)
```html
<button class="bg-white hover:bg-gray-50 text-navy-900 font-bold py-3 px-6 rounded-xl shadow-lg border border-gray-200">
  Button Text
</button>
```

### Cards

#### Standard Card
```html
<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
  <!-- Content -->
</div>
```

#### Product Card (Agent)
```html
<div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1">
  <!-- Content -->
</div>
```

### Icons
- Library: Lucide Icons via `@iconify-json/lucide`
- Size: `w-5 h-5` (standard), `w-6 h-6` (medium), `w-8 h-8` (large)
- Usage: `<Icon name="i-lucide-icon-name" />`

### Badges
```html
<span class="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
  Badge Text
</span>
```

### Input Fields
```html
<input class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
```

## 🎭 Animations & Transitions

### Hover Effects
- **Cards**: Lift up (`hover:-translate-y-1`) + shadow increase
- **Buttons**: Gradient shift + shadow increase
- **Links**: Color change to gold
- **Icons**: Slight movement (e.g., arrow right)

### Transition Duration
- Standard: `duration-200`
- Smooth: `duration-300`

### Transform Examples
```css
hover:-translate-y-1  /* Lift up */
hover:translate-x-1   /* Move right */
hover:scale-105       /* Scale up */
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

### Mobile Sidebar
- Hidden by default
- Hamburger menu button (top-left)
- Slides in from left
- Dark overlay when open

## ✨ Best Practices

### Spacing
- Section padding: `p-6 lg:p-10`
- Card padding: `p-6` or `p-8`
- Element spacing: `space-y-4`, `space-x-3`

### Shadows
- Small: `shadow-lg`
- Medium: `shadow-xl`
- Large: `shadow-2xl`

### Rounded Corners
- Small: `rounded-lg` (8px)
- Medium: `rounded-xl` (12px)
- Large: `rounded-2xl` (16px)

### Text Colors
- Primary: `text-navy-900`
- Secondary: `text-gray-600`
- Muted: `text-gray-500`
- Accent: `text-amber-600`

## 🔧 Implementation Notes

### Logo
- Place `logo.png` in `/public` directory
- Recommended size: 512x512px
- Format: PNG with transparent background
- Fallback: Automatic "S" badge if logo not found

### Search Functionality
- Real-time filtering on Agent Store
- Searches: name, description, badge, skills
- Case-insensitive matching

### Form Validation
- Required fields marked with *
- HTML5 validation
- Success message after submission
- Auto-reset after 3 seconds

## 🎨 Color Reference

### Navy Shades
```
navy-50:  #F8FAFC (lightest)
navy-100: #F1F5F9
navy-200: #E2E8F0
navy-300: #CBD5E1
navy-900: #0B1120 (darkest - brand color)
```

### Amber/Gold Shades
```
amber-50:  #FFFBEB (lightest)
amber-100: #FEF3C7
amber-500: #F59E0B
amber-600: #D97706 (brand gold)
amber-700: #B45309
```

## 📊 Component Inventory

### Pages
- ✅ Market Pulse (index.vue)
- ✅ Agent Store (agents.vue)
- ✅ About Shanbe (about.vue)
- ✅ Contact Bridge (contact.vue)

### Layouts
- ✅ Default Layout (default.vue)

### Components
- ✅ ShanbeAgent.vue (Chat interface)

### Assets
- ✅ main.css (Global styles)
- ⏳ logo.png (To be added)

This design system ensures consistency, professionalism, and a modern user experience across the entire Shanbe Global Intelligence Portal.
