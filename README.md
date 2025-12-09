# Dr. Kalkidan Ephrem - Digital Portfolio & Smile Studio

A premium, high-performance web application designed for Dr. Kalkidan Ephrem, a General Dentist and Smile Makeover Specialist. This project serves as a digital portfolio, appointment booking system, and patient engagement platform, featuring a modern aesthetic and AI-powered assistance.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)
![Gemini API](https://img.shields.io/badge/AI-Gemini-8e75b2)

## 🎨 Design Philosophy

The application embodies a **"Modern Clinical Luxury"** aesthetic:
- **Typography**: Uses *Plus Jakarta Sans* for clean, professional readability and *Playfair Display* for elegant, editorial headlines.
- **Palette**: A sophisticated blend of Clinical Mint (`#14B8A6`), Premium Gold (`#EAB308`), and Soft Beige (`#FDFBF7`) to convey cleanliness, luxury, and warmth.
- **UX**: Emphasizes smooth transitions, micro-interactions, glassmorphism effects, and plenty of negative space.

## ✨ Key Features

### 1. Modern Hero Section
- **Editorial Layout**: Non-traditional, full-width design with organic shapes and floating glassmorphism cards.
- **Dynamic Stats**: Animated "CountUp" statistics for Posts, Followers, and Smile Makeovers.
- **Single-line Branding**: Responsive typography ensures the doctor's name remains impactful and legible.

### 2. Interactive Booking System
- **Custom Calendar**: A bespoke calendar component built from scratch (no external heavy libraries) allowing users to visually select dates.
- **Smart Form**: Collects patient details, preferred time slots, and reasons for visits.
- **Feedback Loop**: Animated success states upon submission.

### 3. AI-Powered Assistant (Gemini)
- **Virtual Concierge**: Integrated with Google's Gemini API (`gemini-2.5-flash`) to answer patient queries in real-time.
- **Context-Aware**: The AI is prompted with specific clinic details (Affiliations, Education, Services) to provide accurate, empathetic responses.
- **Floating Interface**: Accessible via a non-intrusive floating button.

### 4. Advanced Gallery
- **Lightbox Viewer**: immersive full-screen image viewing.
- **Social Sharing**: Native Web Share API integration allowing users to share transformation results directly to social media.
- **Categorization**: Images tagged by procedure type (Veneers, Whitening, etc.).

### 5. Content Sections
- **Services**: Grid layout highlighting clinical expertise.
- **Affiliations**: Premium cards showcasing partnerships with `@dentmex_materials_` and `@dalian_dental_clinic`.
- **Testimonials**: Glowing review cards with star ratings.
- **FAQ**: Interactive accordion with smooth expansion logic.

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom configuration for colors and animations)
- **Icons**: Lucide React
- **AI Integration**: @google/genai SDK
- **Build Tool**: Vite (implied)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dr-kalkidan-portfolio.git
   cd dr-kalkidan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
/
├── components/
│   ├── Features.tsx       # Services, Gallery, Affiliations
│   ├── HeroAndAbout.tsx   # Hero section, Stats, About
│   ├── Interactive.tsx    # Testimonials, FAQ, Booking, AI Chat
│   └── Navigation.tsx     # Navbar, Floating Contact
├── services/
│   └── geminiService.ts   # Google GenAI integration logic
├── types.ts               # TypeScript interfaces
├── App.tsx                # Main layout and Footer
├── index.html             # HTML entry, Font & Tailwind config
└── index.tsx              # React DOM entry
```

## 📱 Responsiveness

The application is fully responsive:
- **Mobile**: Collapsible hamburger menu, stacked grids, touch-friendly touch targets.
- **Tablet**: Adaptive grids (2 columns), adjusted typography.
- **Desktop**: Full navigation, 3-4 column grids, hover effects enabled.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Built with ❤️ for Dr. Kalkidan Ephrem.*
