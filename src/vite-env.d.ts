
/// <reference types="vite/client" />

// Extend the Window interface to include gtag_report_conversion
interface Window {
  gtag_report_conversion?: (url: string) => boolean;
}
