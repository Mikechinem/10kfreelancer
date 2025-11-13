"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react"; // or your icon

export default function ChatbotToggle({ onClick }) {
  const [pos, setPos] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="absolute w-full h-full top-0 left-0 pointer-events-none">
      <button
        onMouseDown={handleMouseDown}
        onClick={onClick}
        className="pointer-events-auto p-4 rounded-full bg-yellow-500 shadow-lg hover:bg-yellow-400 transition-colors duration-300"
        style={{ position: "absolute", left: pos.x, top: pos.y, zIndex: 50 }}
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
