"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    const styles = {
      banner: [
        "color: #fff",
        "background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "font-size: 14px",
        "font-weight: bold",
        "padding: 12px 20px",
        "border-radius: 8px",
        "text-shadow: 1px 1px 2px rgba(0,0,0,0.3)",
      ].join(";"),
      name: [
        "color: #667eea",
        "font-size: 28px",
        "font-weight: 900",
        "font-family: 'Outfit', sans-serif",
        "padding: 8px 0",
      ].join(";"),
      subtitle: [
        "color: #a78bfa",
        "font-size: 13px",
        "font-weight: 500",
        "padding: 2px 0",
      ].join(";"),
      message: [
        "color: #94a3b8",
        "font-size: 12px",
        "line-height: 1.6",
        "padding: 4px 0",
      ].join(";"),
      highlight: [
        "color: #22c55e",
        "font-size: 12px",
        "font-weight: bold",
        "padding: 4px 0",
      ].join(";"),
      link: [
        "color: #60a5fa",
        "font-size: 12px",
        "text-decoration: underline",
        "padding: 4px 0",
      ].join(";"),
      coffee: [
        "font-size: 11px",
        "color: #f59e0b",
        "padding: 6px 0",
      ].join(";"),
    };

    console.log(
      `%c 🚀 Hey, you found the secret! `,
      styles.banner
    );

    console.log(
      `%cAkshay Kumar`,
      styles.name
    );

    console.log(
      `%c✦ Full-Stack Developer  ·  Node.js  ·  React  ·  Next.js`,
      styles.subtitle
    );

    console.log(
      `%c─────────────────────────────────────────────────`,
      "color: #334155; font-size: 10px;"
    );

    console.log(
      `%cCurious enough to open DevTools? I like you already. 👀\n` +
      `%cThis portfolio is crafted with Next.js 15, Framer Motion,\n` +
      `Tailwind CSS v4, and a sprinkle of love. \n\n` +
      `%c💡 Fun fact: %cEven this console message was carefully styled.`,
      styles.message,
      styles.message,
      styles.message,
      styles.highlight
    );

    console.log(
      `%c─────────────────────────────────────────────────`,
      "color: #334155; font-size: 10px;"
    );

    console.log(
      `%c📬 Want to work together? Let's connect!\n` +
      `%c   GitHub: %chttps://github.com/therealakshaykumar\n` +
      `%c   LinkedIn: %chttps://linkedin.com/in/akshay-kumar`,
      styles.message,
      styles.message,
      styles.link,
      styles.message,
      styles.link
    );

    console.log(
      `%c\n☕ Built with passion & powered by curiosity.\n` +
      `   "Any fool can write code that a computer can understand.\n` +
      `    Good programmers write code that humans can understand."\n` +
      `   — Martin Fowler\n`,
      styles.coffee
    );
  }, []);

  return null;
}
