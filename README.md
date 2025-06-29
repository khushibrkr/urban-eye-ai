
# SmartPulse - Smart City Dashboard

A comprehensive real-time smart city monitoring system built as a college project. SmartPulse provides citizens and city administrators with live insights into various urban metrics including health scores, air quality, traffic conditions, and utility status.

## 🎯 Project Overview

SmartPulse is a modern web application designed to simulate a smart city dashboard that displays real-time data about urban infrastructure and services. This project demonstrates the integration of modern web technologies to create an intuitive interface for monitoring city-wide metrics.

## 🏛️ College Project Information

- **Project Type**: Smart City Management System
- **Academic Focus**: Web Development, Real-time Data Visualization, Progressive Web Applications
- **Technologies Demonstrated**: React, TypeScript, Real-time Data Simulation, PWA Implementation
- **Project Scope**: Frontend development with simulated backend data

## ✨ Features

### 🏠 Dashboard (Home)
- **City Health Score**: Real-time overall city health monitoring
- **Live Data Indicators**: Air quality, water supply, energy usage, traffic levels, and crowd density
- **Today's Alerts**: Critical notifications and updates
- **Live/Pause Toggle**: Control real-time data updates
- **Area Details Navigation**: Quick access to detailed area information

### 🗺️ Interactive Map
- **Real-time Traffic Overlay**: Live traffic condition visualization
- **Service Markers**: Location-based city services
- **Crowd Density Heatmap**: Population density visualization
- **Utility Status**: Infrastructure monitoring points

### 🤖 AI Assistant
- **OpenAI Integration**: Chat with AI for city-related queries
- **Smart Suggestions**: Intelligent recommendations for city improvements
- **Real-time Communication**: Instant responses to user questions

### 📊 Reporting System
- **Issue Reporting**: Citizens can report city problems
- **Photo Upload**: Visual documentation of issues
- **Category-based Reports**: Organized reporting system
- **Status Tracking**: Monitor report progress

### 📈 Tracking & Analytics
- **Data Trends**: Historical data visualization
- **Performance Metrics**: City service performance tracking
- **Comparative Analysis**: Period-over-period comparisons

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icon set
- **Routing**: React Router DOM for navigation
- **Data Visualization**: Recharts for charts and graphs
- **State Management**: React Hooks and TanStack Query
- **Build Tool**: Vite for fast development and building
- **PWA**: Service Worker for offline capability and app installation

## 📱 Progressive Web App (PWA) Features

- **Installable**: Can be installed on mobile devices and desktops
- **Offline Support**: Basic functionality available without internet
- **Responsive Design**: Optimized for all screen sizes
- **App-like Experience**: Native app feel with web technologies

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd urban-eye-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Configuration

### OpenAI Integration (Assistant Page)
To use the AI Assistant feature:
1. Get an OpenAI API key from [OpenAI Platform](https://platform.openai.com/)
2. Enter your API key in the Assistant page when prompted
3. Start chatting with the AI about city-related topics

## 📊 Data Simulation

The application uses simulated real-time data for demonstration purposes:
- **Update Frequency**: Every 3 seconds when live mode is enabled
- **Metrics Simulated**: Health scores, air quality, traffic, utilities
- **Data Variation**: Realistic fluctuations within acceptable ranges

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── LiveIndicator.tsx
│   ├── BottomNavigation.tsx
│   └── ...
├── pages/              # Main application pages
│   ├── Index.tsx       # Dashboard/Home
│   ├── Map.tsx         # Interactive map
│   ├── Assistant.tsx   # AI chat
│   ├── Report.tsx      # Issue reporting
│   └── Track.tsx       # Analytics
├── hooks/              # Custom React hooks
│   └── useRealTimeData.ts
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🎨 Design Features

- **Dark Theme**: Modern dark UI with gradient backgrounds
- **Responsive Layout**: Mobile-first design approach
- **Glassmorphism**: Modern glass-like UI elements
- **Smooth Animations**: Micro-interactions and transitions
- **Accessibility**: WCAG compliant design patterns

## 📚 Learning Outcomes

This project demonstrates:
1. **Modern React Development**: Hooks, TypeScript, component architecture
2. **Real-time Data Handling**: Simulated live data updates
3. **Responsive Web Design**: Mobile-first approach
4. **Progressive Web Apps**: PWA implementation
5. **API Integration**: OpenAI API integration
6. **State Management**: Complex application state handling
7. **UI/UX Design**: Modern interface design principles

## 🔮 Future Enhancements

- Integration with real IoT sensors
- Machine learning for predictive analytics
- Multi-language support
- Advanced data visualization
- Real-time notifications
- User authentication system
- Admin dashboard for city officials

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Contributing

This is a college project, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is created for educational purposes as part of a college curriculum.

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Lucide** for the comprehensive icon set
- **OpenAI** for AI integration capabilities
- **College Faculty** for project guidance and support

---

**Note**: This application uses simulated data for demonstration purposes. In a real-world implementation, it would connect to actual city infrastructure and IoT sensors.

**Project Status**: ✅ Complete - College Project Submission Ready
