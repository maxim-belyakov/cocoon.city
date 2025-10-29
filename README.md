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
- **Property Selection**: 5 locations across Europe and UAE
- **Room Types**: 
  - Deluxe singles hideout (1,800 PLN/month)
  - Premier Solo Escape (1,900 PLN/month) 
  - Junior Duo Den (2,100 PLN/month)
  - Executive Duo Retreat (2,250 PLN/month)
- **Date Picker**: Custom calendar with availability checking
- **Booking Periods**: 1, 6, or 12 months

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

The application will be available at `http://localhost:3000` (or next available port)

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
- **Color Scheme**: Cocoon orange (#FF6B47) with clean whites and grays
- **Typography**: Avenir font family for modern, readable text
- **Logo**: Custom Cocoon branding with house icon

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

## 🌍 Properties & Locations

### Cocoon Place (Coliving)
- **Location**: Pruszkow, Poland
- **Focus**: Harmony-driven community living

### Cocoon City (Urban Living)
- **Warsaw, Poland**: Heart of Eastern Europe
- **Porto, Portugal**: Vibrant coastal city
- **Edinburgh, Scotland**: Historic and modern
- **Dubai, UAE**: International business hub

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