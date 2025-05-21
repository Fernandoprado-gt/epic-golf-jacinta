
/// <reference types="vite/client" />

// Updated interface to include all Google tracking globals
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  gtag_report_conversion: (url?: string) => boolean;
  scrollTracked25?: boolean;
  scrollTracked50?: boolean;
  scrollTracked75?: boolean;
  scrollTracked100?: boolean;
}
