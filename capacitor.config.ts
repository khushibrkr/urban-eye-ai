
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2d73fee0bd7a424e8f81179806d5f82c',
  appName: 'SmartPulse',
  webDir: 'dist',
  server: {
    url: 'https://2d73fee0-bd7a-424e-8f81-179806d5f82c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f172a',
      showSpinner: false
    }
  }
};

export default config;
