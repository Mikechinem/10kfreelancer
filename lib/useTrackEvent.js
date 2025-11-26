// lib/useTrackEvent.js
"use client";

export default function useTrackEvent(user = {}) {
  // user = { email: "test@example.com", phone: "+1234567890" }

  const trackEvent = async ({ eventName, eventSourceUrl, utmData }) => {
    const eventId =
      typeof crypto?.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

    // 1️⃣ Browser Pixel
    if (typeof fbq === "function") {
      fbq("trackCustom", eventName, {}, { eventID: eventId });
    }

    // 2️⃣ Server-side CAPI
    fetch("/api/fb-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: eventSourceUrl || window.location.href,
        event_id: eventId,
        utm_data: utmData || null,
        user_email: user.email || null,   // optional
        user_phone: user.phone || null,   // optional
        client_ip: window?.ipAddress || null,
        client_user_agent: navigator.userAgent,
      }),
    }).catch((err) => console.error("CAPI send error:", err));
  };

  return trackEvent;
}
