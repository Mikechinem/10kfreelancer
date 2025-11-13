"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react"; // icon library
import ChatbotUI from "./ChatbotUI";

export default function ChatbotWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chatbot box */}
      {open && (
        <div className="mb-3 w-[90vw] max-w-sm animate-fadeIn">
          <ChatbotUI />
        </div>
      )}

{/* Toggle Button */}
<button
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 p-3 rounded-full bg-[#805b05] shadow-lg hover:bg-yellow-400 transition-colors duration-300 z-50"
>
  <MessageCircle className="text-white w-6 h-6" />
</button>
    </div>
  );
}
