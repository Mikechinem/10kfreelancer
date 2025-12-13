"use client";

import useTrackEvent from "../lib/useTrackEvent";

export default function WhatsAppButton({ className }) {
  const trackEvent = useTrackEvent();

  const handleClick = (e) => {
    e.preventDefault();

    trackEvent({ eventName: "WhatsAppLead" });

    setTimeout(() => {
      window.open("https://wa.me/7064969603", "_blank");
    }, 150);
  };

  return (
    <a href="https://wa.me/7064969603" onClick={handleClick} className={className}>
      Get your Free Funnel Audit
    </a>
  );
}
