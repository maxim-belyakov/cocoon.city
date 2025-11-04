# Cocoon Coliving Website

A modern React/TypeScript/Redux website for Cocoon Coliving - "Where Remote Professionals Belong"

## 🚀 Features

### Core Functionality
- **Multi-page Navigation**: Home, Cocoons, About Us, Invest with Us
- **Interactive Booking System**: Property selection, room types, date picker with 30-day minimum booking
- **Contact System**: Modal contact form with WhatsApp integration
- **Responsive Design**: Mobile-first design with Avenir font styling

### Technical Implementation
- **React 18** with TypeScript for type safety
- **Redux Toolkit** for state management
- **React Router** for client-side routing
- **Vite** for fast development and building
- **Jest & React Testing Library** for comprehensive testing

### Pages & Components

#### 🏠 Home Page
- Hero banner with "Cocoon – Your Everyday Escape"
- Booking form with property/room selection
- Room showcase with pricing and features
- Service highlights (Essentials, Comfort, Pamper Me)

#### 🏢 Cocoons Page
- Property listings across multiple cities
- Cocoon Place (Pruszkow, Poland) 
- Cocoon City (Warsaw, Porto, Edinburgh, Dubai)

#### 👤 About Us Page
- Company story and mission
- Founder profile (Paulina Shaw)
- Company values (3 I's: Inspire, Inclusive, Innovation)

#### 💼 Invest With Us Page
- Investment opportunities
- Market insights and returns
- Contact integration

### Smart Booking System
- **Single Property**: Cocoon Place Coliving Warsaw, Poland
- **Room Types** (with real images):
  - Deluxe singles hideout (1,800 PLN/month, 9sqm, max 1 adult)
  - Premier Solo Escape (1,900 PLN/month, 10-11sqm, max 1 adult)
  - Junior Duo Den (2,100 PLN/month, 12sqm, max 2 adults)
  - Executive Duo Retreat (2,250 PLN/month, 15sqm, max 2 adults)
- **Date Picker**: Custom calendar with 30-day minimum booking
- **Booking Periods**: 1, 6, or 12 months
- **Application Form**: Comprehensive form with conditional fields
- **Google Maps**: Integrated property location

## 🛠️ Getting Started

### Prerequisites
- Node.js (16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd cocoon.city

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or next available port)

### ⚠️ Permission Issues Fix

If you encounter "EACCES: permission denied" errors:

```bash
# Option 1: Fix permissions
chmod -R 755 node_modules/.vite dist

# Option 2: Clean and reinstall (recommended)
rm -rf node_modules/.vite dist
npm install
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run test     # Run unit tests
npm run lint     # Run ESLint
```

## 🧪 Testing

The application includes comprehensive unit tests:
- **Redux State Management**: Tests for booking and contact slices
- **Component Testing**: BookingForm, Header, and App components
- **User Interactions**: Form submissions, modal interactions, date picking

Run tests with:
```bash
npm test
```

All tests are passing with 27 test cases covering:
- ✅ Redux state management
- ✅ Component rendering
- ✅ User interactions
- ✅ Form validations

## 🎨 Design Features

### Brand Identity
- **Color Scheme**:
  - Flamingo Pink (#FC8EAC) - Primary buttons, icons, highlights
  - Sage Green (#A3B18A) - Secondary elements, form focus states
  - Linen (#F4F1EE) - Backgrounds
  - Deep Taupe (#5E5343) - Text, borders, footer
  - Soft Coral (#F7B7A3) - Accent details
- **Typography**:
  - Headings: Poppins font family
  - Body: Inter font family
- **Logo**: Custom COCOON logo from assets
- **Favicon**: cocoon.ico

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🏗️ Architecture

### State Management (Redux)
```
store/
├── bookingSlice.ts    # Booking form and date selection
├── contactSlice.ts    # Contact modal and form
└── index.ts          # Store configuration
```

### Component Structure
```
components/
├── Header.tsx         # Navigation and branding
├── BookingForm.tsx    # Main booking interface
├── DatePicker.tsx     # Custom calendar component
├── ContactModal.tsx   # Contact form modal
└── RoomShowcase.tsx   # Room display grid
```

### Pages
```
pages/
├── Home.tsx          # Landing page
├── About.tsx         # Company information
├── Cocoons.tsx       # Property listings
└── Invest.tsx        # Investment opportunities
```

## 🌍 Property & Location

### Cocoon Place Coliving
- **Location**: Warsaw, Poland
- **Google Maps**: [View Location](https://maps.app.goo.gl/LxkcUmA5CAoznVEP8?g_st=aw)
- **Focus**: Harmony-driven community living for remote professionals
- **Features**:
  - Fully furnished rooms
  - High-speed Wi-Fi
  - Shared spaces
  - Flexible lease terms
  - All utilities included

## 📱 Contact Information
- **Email**: @cocoon.city
- **WhatsApp**: +48 734 663 453
- **Languages**: Polish (PL) | English (EN)
- **Social**: Facebook, Instagram, LinkedIn

## 🏢 About Cocoon
Since 2003, Cocoon has been transforming spaces into shared homes for remote workers, creatives, and young professionals. We focus on creating exceptional living experiences through hospitality, architecture, and community-driven design.

**Mission**: Redefining urban living with curated spaces that balance privacy, connection, and transformation.

---

Built with ❤️ for the remote professional community