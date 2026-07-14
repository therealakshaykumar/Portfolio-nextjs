"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadSuccessProps {
  show: boolean;
  onComplete: () => void;
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => {
  const angle = (i / 20) * 360;
  const distance = 80 + Math.random() * 60;
  const size = 4 + Math.random() * 6;
  const colors = [
    "#4ade80",
    "#22d3ee",
    "#a78bfa",
    "#f472b6",
    "#facc15",
    "#fb923c",
    "#34d399",
    "#60a5fa",
  ];
  return {
    angle,
    distance,
    size,
    color: colors[i % colors.length],
    delay: Math.random() * 0.15,
  };
});

export default function DownloadSuccess({
  show,
  onComplete,
}: DownloadSuccessProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onComplete}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Ripple rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`ripple-${i}`}
                className="absolute rounded-full border-2 border-green-400/30"
                style={{ width: 120, height: 120 }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.5 + i * 0.5, opacity: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.4 + i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Green circle */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
              }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120">
                {/* Circle background with draw animation */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "center",
                  }}
                />
                {/* Filled circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="#22c55e"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  style={{ transformOrigin: "center" }}
                />
                {/* Checkmark */}
                <motion.path
                  d="M38 62 L52 76 L82 46"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7,
                    ease: "easeOut",
                  }}
                />
              </svg>
            </motion.div>

            {/* Particles burst */}
            {PARTICLES.map((p, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                  y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                  scale: [0, 1.5, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + p.delay,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Text */}
            <motion.p
              className="text-white text-xl font-semibold tracking-wide mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              Message Sent!
            </motion.p>
            <motion.p
              className="text-white/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              Tap anywhere to dismiss
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
