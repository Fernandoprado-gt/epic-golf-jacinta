
/// <reference types="vite/client" />

interface Window {
  gtag_report_conversion_whatsapp?: (url: string) => boolean;
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
}
