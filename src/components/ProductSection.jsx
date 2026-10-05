import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { initCursorBubble } from "../utils/cursor-bubble";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const ProductCard = ({
  name,
  title,
  price,
  description,
  mainImg,
  hoverImg,
  isStar,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="radius custom-cursor-target"
      style={{
        position: "relative",
        backgroundColor: "var(--c-ivory)",
        aspectRatio: "4/5",
        overflow: "hidden",
        cursor: "none",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State Background Image */}
      <img
        src={mainImg}
        alt={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.6s ease",
          opacity: isHovered ? 0 : 1,
        }}
        loading="lazy"
      />

      {/* Hover State Background Image (Human Image) */}
      <img
        src={hoverImg}
        alt={`${name} lifestyle`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.6s ease",
          opacity: isHovered ? 1 : 0,
        }}
        loading="lazy"
      />

      {/* Top Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 2,
          pointerEvents: "none", // let hover trigger on the whole card
        }}
      >
        <h3
          className="h3"
          style={{
            color: "var(--c-plum)",
            transition: "opacity 0.5s ease",
            opacity: isHovered ? 0 : 1, // hide on hover for cleaner human image
          }}
        >
          {title}
        </h3>
        {isStar && (
          <span
            className="label-sm"
            style={{
              backgroundColor: "var(--c-plum)",
              color: "var(--c-ivory)",
              padding: "6px 12px",
              borderRadius: "999px",
              transition: "opacity 0.5s ease",
              opacity: isHovered ? 0 : 1,
            }}
          >
            only at cheeky
          </span>
        )}
      </div>

      {/* Bottom Elements */}
      <div
        className="cursor-exclude"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
          cursor: "auto",
        }}
      >
        {/* Default Text (fades out on hover) */}
        <div
          style={{
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "translateY(10px)" : "translateY(0)",
            pointerEvents: isHovered ? "none" : "auto",
            color: "var(--c-plum)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2px",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
            <span style={{ marginLeft: "4px", color: "var(--c-plum-70)" }}>(189)</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <h4 className="label" style={{ margin: 0 }}>{name}</h4>
            <span className="label-sm">${price}.00</span>
          </div>
          <p
            className="body-sm"
            style={{ color: "var(--c-plum-70)", marginTop: "4px", margin: 0 }}
          >
            {description}
          </p>
        </div>

        {/* Hover Button (fades in on hover) */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            right: "24px",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
            pointerEvents: isHovered ? "auto" : "none",
          }}
        >
          <button
            className="btn btn-on-photo label"
            style={{ width: "100%" }}
          >
            SHOP {title.toUpperCase()} - ${price}.00
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  useEffect(() => {
    const cleanup = initCursorBubble();
    return () => cleanup();
  }, []);
  return (
    <section className="gutter section-gap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--gutter)",
        }}
      >
        {/* Column 1: Text & Heading */}
        <motion.div
          variants={fadeUpVariant}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "24px 0",
          }}
        >
          <h2 className="h2" style={{ marginBottom: "24px", maxWidth: "250px" }}>
            meet the cheeky two
          </h2>
          <p className="body" style={{ marginBottom: "32px", color: "var(--c-plum-70)" }}>
            Your daily dose of cheeky goodness. One sip, one smile, endless flavor.
          </p>
          <a
            href="#"
            className="label"
            style={{
              borderBottom: "1px solid var(--c-plum)",
              alignSelf: "flex-start",
              color: "var(--c-plum)",
            }}
          >
            SHOP ALL →
          </a>
        </motion.div>

        {/* Column 2: Product 1 */}
        <motion.div variants={fadeUpVariant}>
          <ProductCard
            name="CEREMONIAL MATCHA"
            title="matcha"
            price="32"
            description="barista-level matcha, zero cut corners."
            mainImg="/images/pouch.png"
            hoverImg="/images/cc-11-sip-beanie.webp"
            isStar={false}
          />
        </motion.div>

        {/* Column 3: Product 2 */}
        <motion.div variants={fadeUpVariant}>
          <ProductCard
            name="THE CHEEKY STAR"
            title="star"
            price="18"
            description="the talia-approved seal of good taste."
            mainImg="/images/star.png"
            hoverImg="/images/cc-14-star-hold.webp"
            isStar={true}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductSection;
