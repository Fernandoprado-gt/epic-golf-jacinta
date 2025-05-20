
/// <reference types="vite/client" />

// Updated interface to match our Google Ads tracking implementation
interface Window {
  gtag_report_conversion: (url?: string) => boolean;
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
}
