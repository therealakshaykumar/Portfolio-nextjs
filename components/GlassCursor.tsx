"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useThemeStore } from "@/store/theme-store";

export default function GlassCursor() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Raw mouse position (updated via rAF for performance)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring-animated position for the outer glass ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Tighter spring for the inner dot
  const dotConfig = { damping: 35, stiffness: 400, mass: 0.2 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
      if (!isVisible) setIsVisible(true);
    },
    [mouseX, mouseY, isVisible]
  );

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    // Detect touch devices
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    // Track interactive elements for hover state
    const handleElementHover = () => {
      const allInteractive = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );

      allInteractive.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          const label = el.getAttribute("data-cursor-text") || "";
          setHoverText(label);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setHoverText("");
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Set up hover listeners with a small delay to catch dynamically rendered elements
    handleElementHover();
    const observer = new MutationObserver(() => handleElementHover());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  const outerSize = isHovering ? 44 : 36;
  const innerSize = isHovering ? 6 : 8;

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer glass ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: outerSize,
          height: outerSize,
        }}
        animate={{
          width: outerSize,
          height: outerSize,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 20 },
          height: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 400, damping: 15 },
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isDark
              ? (isHovering ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)")
              : (isHovering ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.04)"),
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: isDark
              ? (isHovering ? "1.5px solid rgba(255, 255, 255, 0.35)" : "1px solid rgba(255, 255, 255, 0.18)")
              : (isHovering ? "1.5px solid rgba(0, 0, 0, 0.2)" : "1px solid rgba(0, 0, 0, 0.1)"),
            boxShadow: isDark
              ? (isHovering ? "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)" : "0 0 10px rgba(255, 255, 255, 0.05)")
              : (isHovering ? "0 0 20px rgba(0, 0, 0, 0.06), inset 0 0 20px rgba(0, 0, 0, 0.03)" : "0 0 10px rgba(0, 0, 0, 0.03)"),
            transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
          }}
        />

        {/* Hover text label */}
        {hoverText && (
          <motion.span
            className="absolute top-full left-1/2 mt-2 text-[10px] font-medium text-white/70 whitespace-nowrap"
            style={{ translateX: "-50%" }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: innerSize,
          height: innerSize,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 1.8 : 1,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 20 },
          height: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 400, damping: 15 },
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isDark
              ? (isHovering ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.7)")
              : (isHovering ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.7)"),
            boxShadow: isDark
              ? "0 0 6px rgba(255, 255, 255, 0.4)"
              : "0 0 6px rgba(0, 0, 0, 0.2)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        />
      </motion.div>
    </>
  );
}
