declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetIdOrEventName: string | Date,
      params?: Record<string, string | number | boolean | undefined>,
    ) => void;
  }
}

export {};
