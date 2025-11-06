"use client";

import React, { useEffect, useState } from "react";

export default function MobileFallback() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024); // or tablet
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="/icons/device-warning.png"
          alt="Device Warning"
          style={styles.icon}
        />
        <h1 style={styles.heading}>Mobile And Tablet Views Are Not Supported Yet</h1>
        <p style={styles.text}>
          This portfolio is best experienced on a desktop screen.
          <br />
          Please switch to a larger device for the full interactive experience.
        </p>
        <div style={styles.glow}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #051725 0%, #113555 40%, #255075 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    zIndex: 9999,
    overflow: "hidden",
    textAlign: "center",
  },
  card: {
    position: "relative",
    background: "rgba(5, 23, 37, 0.8)",
    padding: "50px 35px",
    borderRadius: "20px",
    boxShadow: "0 0 25px #113555",
    maxWidth: "90%",
    width: "400px",
    animation: "floatCard 4s ease-in-out infinite",
  },
  icon: {
    width: "90px",
    height: "90px",
    marginBottom: "25px",
    filter: "drop-shadow(0 0 12px #113555)",
    animation: "pulse 2.5s infinite ease-in-out",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "12px",
    color: "#ffffff",
    textShadow: "0 0 8px #113555, 0 0 20px #255075",
    letterSpacing: "0.5px",
  },
  text: {
    fontSize: "1rem",
    opacity: 0.9,
    lineHeight: 1.5,
    color: "#dce8f2",
  },
  glow: {
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "12px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #113555, transparent)",
    opacity: 0.7,
    animation: "glow 2s ease-in-out infinite alternate",
  },
};
