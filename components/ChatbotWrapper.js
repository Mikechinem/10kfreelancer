"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatbotUI from "./ChatbotUI";
export default function ChatbotWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chatbot Box */}
      {open && (
        <div className="relative mb-3 w-[90vw] max-w-sm animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full bg-[#805b05] hover:bg-[#b68c14] text-white transition-all duration-300 z-50"
          >
            <X className="w-4 h-4" />
          </button>

          <ChatbotUI />
        </div>
      )}

      {/* Floating Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-[#805b05] shadow-lg hover:bg-yellow-400 transition-colors duration-300 z-50"
        >
          <MessageCircle className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
}
