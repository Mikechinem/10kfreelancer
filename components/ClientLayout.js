// ./components/ClientLayout.js
"use client";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";

// load chatbot only on client
const ChatbotWrapper = dynamic(
  () => import("./ChatbotWrapper"),
  { ssr: false }
);

export default function ClientLayout({ children }) {

  const speedData = SpeedInsights(); // Initialize SpeedInsights

  return (
    <>
      {children}
      
      {/* Chatbot visible on every page */}
      <div className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-sm">
        <ChatbotWrapper />
      </div>
    </>
  );
}
