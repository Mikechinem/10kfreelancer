"use client";

export default function useTrackEvent() {
  const trackEvent = async ({ eventName, eventSourceUrl, utmData }) => {
    const eventId =
      typeof crypto?.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

    // Browser Pixel
    if (typeof fbq === "function") {
      fbq("track", eventName, {}, { eventID: eventId });
    }

    // Server-side CAPI
    fetch("/api/fb-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: eventSourceUrl || window.location.href,
        event_id: eventId,
        utm_data: utmData || null,
      }),
    }).catch((err) => console.error("CAPI send error:", err));
  };

  return trackEvent;
}
