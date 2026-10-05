import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const ImageContentCards = () => {
  return (
    <section className="gutter section-gap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--gutter)",
        }}
      >
        {/* Left Card */}
        <motion.div
          variants={fadeUpVariant}
          className="radius"
          style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}
        >
          <img
            src="/images/cc-07-phone-matcha.webp"
            alt="Phone and Matcha"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background:
                "linear-gradient(to top, rgba(88,3,42,.45), transparent 100%)",
              pointerEvents: "none",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "8%",
              right: "8%",
              color: "var(--c-on-photo)",
            }}
          >
            <h3 className="h3" style={{ marginBottom: "12px" }}>
              what's in your emotional support cup?
            </h3>
            <p className="body" style={{ marginBottom: "24px" }}>
              Iced, oat, extra cheeky. Your daily cup should be something you
              actually look forward to.
            </p>
            <button className="btn btn-on-photo label">SHOP MATCHA</button>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          variants={fadeUpVariant}
          className="radius"
          style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}
        >
          <img
            src="/images/cc-06-star-night.webp"
            alt="Star at Night"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background:
                "linear-gradient(to top, rgba(88,3,42,.45), transparent 100%)",
              pointerEvents: "none",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "8%",
              right: "8%",
              color: "var(--c-on-photo)",
            }}
          >
            <h3 className="h3" style={{ marginBottom: "12px" }}>
              caught the cheek
            </h3>
            <p className="body" style={{ marginBottom: "24px" }}>
              That first sip face? We want it. Share yours with #CaughtTheCheek.
            </p>
            <button className="btn btn-on-photo label">JOIN IN</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImageContentCards;
