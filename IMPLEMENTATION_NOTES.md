# Cocoon Coliving Website - Implementation Notes

## ✅ Latest Updates (November 4, 2025)

### 1. Single Property Configuration
- **Changed to single property**: Only "Cocoon Place Coliving Warsaw" is now available
- Removed property selection dropdown from booking form
- Updated all references to work with single property

### 2. Website Branding
- **Favicon**: Updated to use `/cocoon.ico`
- **Logo**: Implemented COCOON logo from `/src/assets/COCOON Logo.png`
- **Colors**: Applied brand colors throughout:
  - Flamingo Pink (#FC8EAC) - Primary
  - Sage Green (#A3B18A) - Secondary
  - Linen (#F4F1EE) - Background
  - Deep Taupe (#5E5343) - Text/Contrast
  - Soft Coral (#F7B7A3) - Accent

### 3. Social Icons Styling
- **Fixed color scheme**: Changed from blue to Deep Taupe (#5E5343)
- **Hover effect**: Icons turn Flamingo Pink on hover
- **Consistent styling**: All icons (Mail, Facebook, Instagram, LinkedIn) now match brand

### 4. Room Images
Added actual room images to all 4 room types:
- **Deluxe singles hideout**: `/src/assets/room1.jpg`
- **Premier Solo Escape**: `/src/assets/room2.jpg`
- **Junior Duo Den**: `/src/assets/room3.jpg`
- **Executive Duo Retreat**: `/src/assets/room4.jpg`

## 🏠 Property Information

**Cocoon Place Coliving Warsaw**
- Location: Warsaw, Poland
- Google Maps: https://maps.app.goo.gl/LxkcUmA5CAoznVEP8?g_st=aw

## 🛏️ Room Types

1. **Deluxe singles hideout** - 1,800 PLN/month (9sqm, max 1 adult)
2. **Premier Solo Escape** - 1,900 PLN/month (10-11sqm, max 1 adult)
3. **Junior Duo Den** - 2,100 PLN/month (12sqm, max 2 adults)
4. **Executive Duo Retreat** - 2,250 PLN/month (15sqm, max 2 adults)

## 📋 Booking Flow

1. User selects room type
2. User selects number of cocooners (max based on room capacity)
3. User selects booking start date (30-day minimum)
4. User selects booking period (1, 6, or 12 months)
5. User clicks "Book Now"
6. Application form appears automatically with smooth scroll

## 🎨 Design Elements

### Typography
- **Headings**: Poppins
- **Body**: Inter

### Color Usage
- **Buttons**: Flamingo Pink
- **Form Focus**: Sage Green
- **Backgrounds**: Linen
- **Text**: Deep Taupe
- **Accents**: Soft Coral

## 🔧 Technical Notes

### File Locations
- Logo: `/src/assets/COCOON Logo.png`
- Favicon: `/cocoon.ico`
- Room Images: `/src/assets/room1.jpg` - `/src/assets/room4.jpg`

### Key Components
- `Header.tsx` - Navigation with logo and social icons
- `BookingForm.tsx` - Simplified for single property
- `RoomShowcase.tsx` - Displays all 4 rooms with images
- `ApplicationForm.tsx` - Comprehensive booking application
- `DatePicker.tsx` - 30-day minimum booking calendar
- `PropertyMap.tsx` - Google Maps integration

### Data Structure
- Properties: `/src/data/properties.ts`
- Types: `/src/types/index.ts`
- Redux Store: `/src/store/bookingSlice.ts`

## 🚀 Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Permission Issues Fix
If you encounter permission errors with `dist` or `node_modules/.vite`:

```bash
chmod -R 755 dist node_modules/.vite
```

Or simply delete and reinstall:

```bash
rm -rf dist node_modules/.vite
npm install
npm run dev
```

## 📱 Features

- ✅ Responsive design
- ✅ Brand color scheme
- ✅ Custom fonts (Poppins + Inter)
- ✅ Interactive date picker with 30-day minimum
- ✅ Dynamic form validation
- ✅ Conditional fields (student residency info)
- ✅ File upload support
- ✅ Google Maps integration
- ✅ Smooth scroll to application form
- ✅ Social media links

## 📝 Future Enhancements

- Add actual property images (not just room images)
- Implement backend API integration
- Add payment gateway
- Implement language switching (PL/EN)
- Add admin dashboard for managing bookings
- Implement email notifications
