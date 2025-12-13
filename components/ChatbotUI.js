"use client";

import { useState, useRef, useEffect } from "react";
export default function ChatbotUI({onClose}) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi there! I'm Michael's AI assistant. How can I help you today?"},
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false); // track if user started chat

  // Keep scroll pinned to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // Suggested starter questions
  const suggestedQuestions = [
    "What services do you offer?",
    "Can you show me your past projects?",
    "Do you run Facebook or Google ads?",
    "How much do your services cost?",
    "Do you build responsive websites?",
    "How long does it take to complete a project?",
    "Can I contact you on WhatsApp?",
  ];

  // Hypothetical bot response function
  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    // WhatsApp link special case
    if (msg.includes("contact") || msg.includes("whatsapp")) {
      return (
        <>
          You can reach me directly on WhatsApp:{" "}
          <a
            href="https://wa.me/7064969603"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-gold)] underline"
          >
            Chat on WhatsApp
          </a>
        </>
      );
    }

    // Expanded Predefined Responses (30+ topics)
    const responses = [
      { keywords: ["services", "offer"], text: "I run meta and google ads that drive clicks and bring the sales to your doorstep. Plus, I build responsive websites, dashboards, AI chatbots, and landing pages tailored to your needs." },
      { keywords: ["upwork"], text: "I am active on Upwork with successfully completed projects and excellent client reviews." },
      { keywords: ["technologies", "tech", "stack"], text: "I mainly use Next.js, React, TailwindCSS, Node.js, and other modern web technologies." },
      { keywords: ["portfolio", "projects"], text: "You can view my portfolio to see detailed examples of my projects." },
      { keywords: ["about experience", "more", "about"], text: "I have extensive experience in digital advertising and building modern web apps and completing freelance projects successfully." },
      { keywords: ["pricing", "cost", "budget"], text: "Pricing depends on the project scope; I provide clear estimates after understanding your needs." },
      { keywords: ["support", "maintenance"], text: "I provide ongoing support and maintenance for websites and apps after delivery." },
      { keywords: ["mobile", "responsive"], text: "All my projects are fully responsive and optimized for mobile devices." },
      { keywords: ["chatbot", "chat bot", "chat-bot"], text: "I develop AI chatbots that can automate conversations and improve user engagement like this one." },
      { keywords: ["seo", "optimization"], text: "I implement SEO best practices to help your site rank higher in search results." },
      { keywords: ["work", "available"], text: "You can message me on WhatsApp to get a more reliable response on this. Type whatsapp in the chat box and I’ll send you the link." },
      { keywords: ["facebook ads", "instagram ads", "ads", "google ads"], text: "Yes, I do. Best you contact me via WhatsApp so we talk about it. Type whatsapp in the chat box and I’ll send you the link." },
      { keywords: ["hi", "hey", "hello", "what's up", "whats up"], text: "Hi, I'm Gold — Michael's little AI assistant. What can I do for you today?" },
      { keywords: ["guarantee", "good experience"], text: "I clearly understand your concern. I go all in to deliver quality. Plus you can ask for a refund if you're not happy in the end." },
      { keywords: ["design", "ui", "ux"], text: "I pay close attention to UI/UX — every project I deliver looks clean, modern, and user-friendly." },
      { keywords: ["timeline", "how long"], text: "The timeline depends on the project size, but most small projects are completed within 3–10 days." },
      { keywords: ["payment", "pay", "deposit"], text: "Payment is usually milestone-based — you can start with an initial deposit and pay the rest after delivery." },
      { keywords: ["domain", "hosting"], text: "Yes, I can help you set up a domain and hosting for your website as part of the project." },
      { keywords: ["content", "copywriting"], text: "I can assist with structuring and organizing your content, or connect you with a copywriter." },
      { keywords: ["logo", "branding"], text: "I also design logos and brand visuals to match your website or business identity." },
      { keywords: ["social media"], text: "I help set up and optimize social media pages and ads for your business." },
      { keywords: ["team", "work alone"], text: "I mostly work independently but collaborate with designers and marketers when necessary." },
      { keywords: ["training", "learn"], text: "I can train your staff or team on how to manage your website or ads after launch." },
      { keywords: ["ai", "artificial intelligence"], text: "I use AI tools to automate processes and make digital marketing more effective." },
      { keywords: ["maintenance plan", "ongoing"], text: "Yes, I offer monthly maintenance plans for websites and campaigns." },
      { keywords: ["client", "testimonials"], text: "My past clients speak highly of my work quality and communication — you can see some reviews on Upwork." },
      { keywords: ["result", "conversion"], text: "My focus is always on results — better engagement, leads, and conversions." },
      { keywords: ["availability", "book", "schedule"], text: "I'm currently accepting new clients. You can book a chat via WhatsApp to get started." },
      { keywords: ["language", "framework"], text: "I primarily use JavaScript, React, Next.js, Node, and TailwindCSS — reliable and modern technologies." },
      { keywords: ["custom", "unique", "personalized"], text: "Every project is customized to your brand, goals, and user expectations — no templates." },
      { keywords: ["refund", "money back"], text: "Yes, if I can’t meet the agreed expectations, you’ll get a refund. Your satisfaction is priority." },
      { keywords: ["communication", "update"], text: "I keep you updated throughout the process with progress reports and live previews." },
    ];

    // Find matching response
    const match = responses.find((r) =>
      r.keywords.some((k) => msg.includes(k))
    );

    return match
      ? match.text
      : "🤖 Sorry, this bot doesn't have enough data to give a reasonable answer to this. You can message me on WhatsApp to get an accurate response. Just type whatsapp in the box and I'll send you the chat link.";
  };

  const sendMessage = (text) => {
    if (!text?.trim()) return;

    setHasInteracted(true); // hide suggested questions after first interaction
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");

    setTyping(true);

    setTimeout(() => {
      const botReply = getBotReply(text);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setTyping(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          {/* Close button */}
        
        {/* header */}
        <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-[var(--color-brand-gold)]">
              Chatbot
            </div>
            <div className="text-xs text-zinc-400">
              Interactive AI
            </div>
          </div>
        </div>

        {/* messages area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-3 p-4 bg-zinc-800 rounded-lg mb-4 max-h-[60vh]"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl shadow-[0_0_15px_rgba(235,182,8,0.6)] max-w-[75%] transition-all duration-300 ${
                msg.sender === "user"
                  ? "bg-[var(--color-brand-gold)] text-white self-end ml-auto"
                  : "bg-zinc-800 text-gray-200 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {/* Suggested questions */}
          {!hasInteracted && (
            <div className="flex flex-wrap gap-2 mt-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-2 text-sm rounded-lg bg-[#805b05] text-white hover:bg-[#f1ca2f] transition-colors duration-300 shadow-md"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Typing indicator */}
          {typing && (
            <div className="p-4 rounded-2xl shadow-[0_0_15px_rgba(235,182,8,0.6)] max-w-[50%] bg-zinc-800 text-gray-400 self-start animate-pulse">
              🤖 Bot is typing...
            </div>
          )}
        </div>

        {/* input */}
        <form
          onSubmit={handleSubmit}
          className="px-4 py-3 bg-zinc-900 border-t border-zinc-800"
        >
          <div className="flex gap-2 flex-wrap">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]"
            />
            <button
              type="submit"
              className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#805b05] text-white font-semibold shadow-md hover:bg-[#f1ca2f] transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
