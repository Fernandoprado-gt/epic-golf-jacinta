
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Garantir que o dataLayer está definido globalmente
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
    scrollTracked25?: boolean;
    scrollTracked50?: boolean;
    scrollTracked75?: boolean;
    scrollTracked100?: boolean;
  }
}

// Render the app
createRoot(document.getElementById("root")!).render(<App />);
