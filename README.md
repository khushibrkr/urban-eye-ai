
# SmartPulse - Smart City Dashboard (College Project)

A comprehensive real-time smart city monitoring system built as a **college project prototype**. SmartPulse provides citizens and city administrators with live insights into various urban metrics including health scores, air quality, traffic conditions, and utility status.

> **Note**: This is a prototype application created for educational purposes. All data shown is simulated/dummy data for demonstration purposes only.

## 🎯 Project Overview

SmartPulse is a modern web application designed to simulate a smart city dashboard that displays real-time data about urban infrastructure and services. This project demonstrates the integration of modern web technologies to create an intuitive interface for monitoring city-wide metrics.

**Important**: This application uses **simulated real-time data** for demonstration purposes. In a real-world implementation, it would connect to actual city infrastructure and IoT sensors.

## 🏛️ College Project Information

- **Project Type**: Smart City Management System (Prototype)
- **Academic Focus**: Full-Stack Web Development, Real-time Data Visualization, Progressive Web Applications
- **Technologies Demonstrated**: React, TypeScript, Supabase Backend, Real-time Data Simulation, PWA Implementation
- **Project Scope**: Complete full-stack development with simulated backend data
- **Data Source**: Simulated/Dummy data for prototype demonstration

## ✨ Features

### 🏠 Dashboard (Home)
- **City Health Score**: Real-time overall city health monitoring (simulated)
- **Live Data Indicators**: Air quality, water supply, energy usage, traffic levels, and crowd density (all simulated)
- **Today's Alerts**: Critical notifications and updates (dummy alerts)
- **Live/Pause Toggle**: Control real-time data updates simulation
- **Area Details Navigation**: Quick access to detailed area information

### 🗺️ Interactive Map
- **Real-time Traffic Overlay**: Live traffic condition visualization (simulated)
- **Service Markers**: Location-based city services (dummy locations)
- **Crowd Density Heatmap**: Population density visualization (simulated)
- **Utility Status**: Infrastructure monitoring points (dummy data)

### 🤖 AI Assistant
- **OpenAI Integration**: Chat with AI for city-related queries
- **Smart Suggestions**: Intelligent recommendations for city improvements
- **Real-time Communication**: Instant responses to user questions

### 📊 Reporting System
- **Issue Reporting**: Citizens can report city problems (stored in database)
- **Photo Upload**: Visual documentation of issues
- **Category-based Reports**: Organized reporting system
- **Status Tracking**: Monitor report progress

### 📈 Tracking & Analytics
- **Data Trends**: Historical data visualization (simulated trends)
- **Performance Metrics**: City service performance tracking (dummy metrics)
- **Comparative Analysis**: Period-over-period comparisons (simulated data)

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icon set
- **Routing**: React Router DOM for navigation
- **Data Visualization**: Recharts for charts and graphs
- **State Management**: React Hooks and TanStack Query
- **Build Tool**: Vite for fast development and building
- **PWA**: Service Worker for offline capability and app installation

### Backend & Database
- **Backend-as-a-Service**: Supabase
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime subscriptions
- **File Storage**: Supabase Storage
- **API**: Supabase Edge Functions

### Data Simulation
- **Real-time Updates**: Simulated data updates every 3 seconds
- **Realistic Variations**: Data fluctuations within acceptable ranges
- **Multiple Metrics**: Health, air quality, traffic, utilities (all simulated)

## 📱 Progressive Web App (PWA) Features

- **Installable**: Can be installed on mobile devices and desktops
- **Offline Support**: Basic functionality available without internet
- **Responsive Design**: Optimized for all screen sizes
- **App-like Experience**: Native app feel with web technologies

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd smartpulse-smart-city
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase (Backend)**
   - Create a new Supabase project
   - Copy your project URL and anon key
   - Update `src/integrations/supabase/client.ts` with your credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Configuration

### Backend Setup (Supabase)
The application uses Supabase for backend services:
- **Database**: PostgreSQL for storing user data and reports
- **Authentication**: Email/password authentication
- **Real-time**: Live updates for dashboard metrics
- **Storage**: File uploads for report attachments

### OpenAI Integration (Assistant Page)
To use the AI Assistant feature:
1. Get an OpenAI API key from [OpenAI Platform](https://platform.openai.com/)
2. Add the API key to your Supabase secrets
3. Deploy the edge function for AI chat functionality

## 📊 Data Architecture

### Simulated Data Sources
- **City Metrics**: Health score, air quality, water supply, energy usage
- **Traffic Data**: Real-time traffic levels and congestion simulation
- **Crowd Density**: Population distribution simulation
- **Utility Status**: Infrastructure monitoring simulation
- **Alert System**: Automated alert generation for demonstration

### Database Schema
```sql
-- User profiles
- profiles (id, user_id, name, email, created_at)

-- Issue reports
- reports (id, user_id, title, description, category, status, location, created_at)

-- City metrics (simulated data storage)
- city_metrics (id, metric_type, value, timestamp)

-- Notifications
- notifications (id, user_id, title, message, read, created_at)
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── LiveIndicator.tsx
│   ├── CityHealthMeter.tsx
│   ├── QuickIndicators.tsx
│   └── BottomNavigation.tsx
├── pages/              # Main application pages
│   ├── Index.tsx       # Dashboard/Home
│   ├── Map.tsx         # Interactive map
│   ├── Assistant.tsx   # AI chat
│   ├── Report.tsx      # Issue reporting
│   └── Track.tsx       # Analytics
├── hooks/              # Custom React hooks
│   └── useRealTimeData.ts
├── integrations/       # Backend integrations
│   └── supabase/       # Supabase configuration
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🎨 Design Features

- **Dark Theme**: Modern dark UI with gradient backgrounds
- **Responsive Layout**: Mobile-first design approach
- **Glassmorphism**: Modern glass-like UI elements
- **Smooth Animations**: Micro-interactions and transitions
- **Accessibility**: WCAG compliant design patterns

## 📚 Key Learning Outcomes

This college project demonstrates:

### Technical Skills
1. **Full-Stack Development**: Complete frontend and backend integration
2. **Modern React Development**: Hooks, TypeScript, component architecture
3. **Database Design**: PostgreSQL schema design and relationships
4. **Real-time Applications**: WebSocket connections and live updates
5. **Authentication Systems**: User management and security
6. **API Development**: RESTful APIs and serverless functions
7. **Progressive Web Apps**: PWA implementation and offline functionality

### Conceptual Understanding
1. **Smart City Architecture**: Understanding IoT and urban technology systems
2. **Data Visualization**: Presenting complex data in user-friendly formats
3. **User Experience Design**: Creating intuitive interfaces for civic applications
4. **Real-time Systems**: Handling live data streams and updates
5. **Scalable Architecture**: Building systems that can grow with requirements

## 🔮 Future Enhancements (Beyond Prototype)

For a production-ready system, the following enhancements would be implemented:

### Real Data Integration
- Integration with actual IoT sensors and city infrastructure
- Connection to traffic management systems
- Real air quality monitoring stations
- Actual utility company APIs

### Advanced Features
- Machine learning for predictive analytics
- Multi-language support
- Advanced data visualization with 3D maps
- Integration with government databases
- Real-time emergency alert systems

### Scale and Performance
- Load balancing for high traffic
- Data caching strategies
- Advanced security measures
- Multi-tenant architecture for different cities

## 🚨 Prototype Limitations

As this is a college project prototype, please note:

1. **Simulated Data**: All real-time data is generated algorithmically
2. **Limited Scale**: Designed for demonstration, not production loads
3. **Basic Security**: Educational-level security implementation
4. **Mock Integrations**: Third-party integrations use dummy data where possible
5. **Simplified Workflows**: Complex civic processes are simplified for demonstration

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Services (Supabase)

The project uses Supabase for backend services:
- Database hosting and management
- User authentication
- Real-time subscriptions
- File storage
- Edge functions for serverless computing

## 📝 Project Documentation

### Architecture Decisions
- **Why React**: Component-based architecture suitable for dashboard interfaces
- **Why Supabase**: Rapid backend development perfect for prototypes
- **Why PWA**: Demonstrates modern web capabilities and mobile-first approach
- **Why Simulated Data**: Allows demonstration without complex infrastructure setup

### Development Process
1. **Planning**: Requirement analysis and system design
2. **Frontend**: UI/UX implementation with responsive design
3. **Backend**: Database design and API development
4. **Integration**: Connecting frontend with backend services
5. **Testing**: Functionality testing and user experience validation
6. **Documentation**: Comprehensive project documentation

## 🙏 Acknowledgments

- **Supabase** for providing excellent backend-as-a-service platform
- **Shadcn/ui** for the beautiful component library
- **Lucide** for the comprehensive icon set
- **OpenAI** for AI integration capabilities
- **College Faculty** for project guidance and support
- **Open Source Community** for the tools and libraries used

## 📄 License

This project is created for educational purposes as part of a college curriculum. All code is available for academic reference and learning.

## 🔗 Links

- **Live Demo**: [Deployed Application URL]
- **Project Repository**: [GitHub Repository URL]
- **Documentation**: [Additional Documentation if available]
- **Presentation**: [Project Presentation Materials]

---

**Project Status**: ✅ Complete - College Project Submission Ready

**Important Disclaimer**: This application is a prototype created for educational purposes. All data displayed is simulated and does not represent real city infrastructure or services. In a production environment, this system would require integration with actual IoT devices, government databases, and city infrastructure systems.

**Technical Note**: The real-time features demonstrate the capability of modern web technologies to handle live data streams, even though the data itself is simulated for this prototype.
