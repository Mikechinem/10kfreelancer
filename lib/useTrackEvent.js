// lib/useTrackEvent.js
"use client";

export default function useTrackEvent() {
  const trackEvent = async ({ eventName, eventSourceUrl, utmData }) => {
    // Generate unique event_id for deduplication
    const eventId =
      typeof crypto?.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

    // 1️⃣ Browser Pixel event
    if (typeof fbq === "function") {
      fbq("track", eventName, {}, { eventID: eventId });
    }

    // 2️⃣ Server-side CAPI event
    try {
      await fetch("/api/fb-capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_name: eventName,
          event_source_url: eventSourceUrl || window.location.href,
          event_id: eventId,
          utm_data: utmData || null,
        }),
      });
    } catch (err) {
      console.error("CAPI send error:", err);
    }
  };

  return trackEvent;
}
