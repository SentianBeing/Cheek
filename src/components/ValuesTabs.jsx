import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const ValuesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "QUALITY FIRST",
      content:
        "We take our ingredients seriously. Every blend is crafted with care so the taste lives up to the vibe.",
    },
    {
      title: "PLAY WITH PURPOSE",
      content:
        "Cheek, charm and creativity in everything — because fun and function can coexist.",
    },
    {
      title: "REALNESS OVER HYPE",
      content:
        "Honest, approachable, never too serious. No gatekeeping, just genuinely good stuff.",
    },
  ];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--c-blush)", padding: "64px var(--gutter)" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--gutter)",
          alignItems: "center",
        }}
      >
        <motion.div
          variants={fadeUpVariant}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            paddingRight: "40px",
          }}
        >
          <p className="statement">
            To make every cup a little moment of personality — cheeky,
            thoughtful and genuinely delicious.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div
              style={{
                display: "flex",
                gap: "24px",
                borderBottom: "1px solid var(--c-plum-12)",
                paddingBottom: "8px",
              }}
            >
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  className="label"
                  onClick={() => setActiveTab(idx)}
                  style={{
                    color:
                      activeTab === idx ? "var(--c-plum)" : "var(--c-plum-70)",
                    position: "relative",
                    paddingBottom: "8px",
                    marginBottom: "-9px", // Overlap the border
                  }}
                >
                  {tab.title}
                  {activeTab === idx && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--c-plum)",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div style={{ minHeight: "60px", position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="body"
                  style={{ position: "absolute", width: "100%" }}
                >
                  {tabs[activeTab].content}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="radius"
          style={{ aspectRatio: "16/10", overflow: "hidden" }}
        >
          <img
            src="/images/cc-01-trio-matcha.webp"
            alt="Values Trio"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ValuesTabs;
