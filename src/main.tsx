
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// We don't need to redeclare these here as they're already in vite-env.d.ts
// Just ensure dataLayer is initialized
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Render the app
createRoot(document.getElementById("root")!).render(<App />);
