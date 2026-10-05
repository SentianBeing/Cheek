import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      className="gutter" 
      style={{ 
        position: "relative", 
        backgroundColor: "var(--c-white)",
        paddingBottom: "var(--section-gap)"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--gutter)",
          height: "90vh",
          minHeight: "600px",
        }}
      >
        <div
          className="radius"
          style={{ position: "relative", height: "100%" }}
        >
          <img
            src="/images/cc-10-sip-sun.webp"
            alt="Sipping Matcha in Sun"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "45%",
              background: "linear-gradient(to top, rgba(120, 0, 41, 0.4), transparent 100%)",
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div
          className="radius"
          style={{ position: "relative", height: "100%" }}
        >
          <img
            src="/images/cc-04-star-cheek.webp"
            alt="Star Cheek"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "45%",
              background: "linear-gradient(to top, rgba(120, 0, 41, 0.4), transparent 100%)",
              pointerEvents: "none",
            }}
          ></div>
        </div>
      </div>

      {/* Overlay Text */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "100%",
          maxWidth: "1000px",
          zIndex: 10,
          pointerEvents: "none",
          padding: "80px 20px",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 65%)",
        }}
      >
        <motion.h1
          className="display"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: "32px",
            color: "var(--c-hero-text)",
            fontSize: "var(--hero-text-size, 92px)",
            textShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          a little loud.<br />a lot of flavor.
        </motion.h1>
        <motion.button 
          className="btn btn-hero label" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ 
            pointerEvents: "auto",
            padding: "12px 36px",
          }}
        >
          SHOP MATCHA
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
