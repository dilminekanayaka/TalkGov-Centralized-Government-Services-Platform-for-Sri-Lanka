# TalkGov - Centralized Government Services Platform for Sri Lanka

TalkGov is a multilingual web platform built with React (frontend) and Python (backend) to help Sri Lankans easily access government services. The platform provides step-by-step service guides, document checklists, office locator, and user support through a chatbot and admin assistance.

## Features

- **Multilingual Support**: Available in Sinhala, Tamil, and English
- **Service Search**: Easy search functionality for government services
- **Popular Services**: Quick access to commonly used services like Passport, National ID, and Land Registration
- **Office Locator**: Find nearby government offices based on location
- **Document Checklist**: Get comprehensive lists of required documents for applications
- **Request Tracking**: Monitor the status of applications and requests
- **User Support**: Chatbot and admin assistance for guidance

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dilminekanayaka/TalkGov-Centralized-Government-Services-Platform-for-Sri-Lanka.git
cd TalkGov-Centralized-Government-Services-Platform-for-Sri-Lanka
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with search
│   ├── PopularServices.tsx  # Popular services section
│   ├── HowTalkGovHelps.tsx  # Features section
│   └── Footer.tsx      # Footer component
├── assets/             # Static assets
├── App.tsx             # Main App component
├── main.tsx            # React entry point
└── index.css           # Global styles with Tailwind
```

## Design System

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary Blue**: `#1e40af` (talkgov-blue)
- **Primary Green**: `#10b981` (talkgov-green)
- **Primary Yellow**: `#fbbf24` (talkgov-yellow)
- **Light variants**: Light blue, green, and yellow backgrounds

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the development team.

---

**Note**: This is the frontend implementation. The backend Python API will be developed separately to provide the necessary data and functionality for the platform.
