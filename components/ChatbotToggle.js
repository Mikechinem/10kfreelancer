"use client";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatbotToggle({ onClick }) {
  const [pos, setPos] = useState({ x: 20, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Initialize position at bottom-left
  useEffect(() => {
    const bottomOffset = 80; // distance from bottom
    const leftOffset = 20; // distance from left
    const y = window.innerHeight - bottomOffset;
    setPos({ x: leftOffset, y });
  }, []);

  // --- Mouse events ---
  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => setDragging(false);

  // --- Touch events for mobile ---
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setOffset({
      x: touch.clientX - pos.x,
      y: touch.clientY - pos.y,
    });
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setPos({
      x: touch.clientX - offset.x,
      y: touch.clientY - offset.y,
    });
  };

  const handleTouchEnd = () => setDragging(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 pointer-events-none"
    >
      <button
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={onClick}
        className="pointer-events-auto p-4 rounded-full bg-yellow-500 shadow-lg hover:bg-yellow-400 transition-colors duration-300"
        style={{
          position: "absolute",
          left: pos.x,
          top: pos.y,
          zIndex: 50,
        }}
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
