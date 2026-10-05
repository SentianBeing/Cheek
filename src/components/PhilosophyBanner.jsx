import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const PhilosophyBanner = () => {
  return (
    <section className="gutter section-gap">
      <div
        className="radius"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          minHeight: "400px",
          overflow: "hidden",
        }}
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/cc-15-duo-star.webp"
          />
          <img
            src="/images/cc-02-duo-star.webp"
            alt="Duo Star Philosophy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </picture>

        {/* Gradient for text legibility */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(to top, rgba(88,3,42,.6), transparent 100%)",
            pointerEvents: "none",
          }}
        ></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariant}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            right: "5%",
            color: "var(--c-on-photo)",
            maxWidth: "800px",
          }}
        >
          <h3 className="h3" style={{ marginBottom: "16px" }}>
            fun to sip, serious about taste.
          </h3>
          <p className="body" style={{ marginBottom: "24px", maxWidth: "600px" }}>
            We believe great matcha should do more than wake you up — it should
            match your mood, your energy and your standards. Playful in spirit,
            rooted in quality.
          </p>
          <button className="btn btn-on-photo label">OUR STORY</button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyBanner;
