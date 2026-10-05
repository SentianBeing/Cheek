import React, { useRef } from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const SocialCarousel = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const mediaItems = [
    { type: "image", src: "/images/cc-03-trio-street.webp" },
    { type: "video", src: "/images/Video-2667.mp4", link: "https://www.instagram.com/reel/DVt0g9-CBZ9/?stkn=a292c3I5ZW5nZGtw" },
    { type: "image", src: "/images/cc-08-trio-night.webp" },
    { type: "video", src: "/images/Video-72514.mp4", link: "https://www.instagram.com/reel/DK1x_rtJ5wn/" },
    { type: "image", src: "/images/cc-15-duo-star.webp" },
    { type: "image", src: "/images/cc-13-duo-train.webp" },
  ];

  return (
    <section className="gutter section-gap">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUpVariant}
        className="radius"
        style={{ 
          backgroundColor: "var(--c-ivory)", 
          padding: "24px var(--gutter)",
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="statement" style={{ fontWeight: 600 }}>cheeky-cam</h2>
          <a
            href="#"
            className="btn btn-outline label-sm"
          >
            CATCH US ONLINE
          </a>
        </div>

        <div
          ref={scrollContainerRef}
          className="hide-scroll"
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
          }}
        >
          <style>{`
            .hide-scroll::-webkit-scrollbar {
              display: none;
            }
            .social-hover-group:hover .social-hover-overlay {
              opacity: 1 !important;
            }
          `}</style>
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              className="radius"
              style={{
                width: "260px",
                height: "260px",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden"
              }}
            >
              {item.type === "video" ? (
                item.link ? (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-hover-group"
                    style={{ display: "block", width: "100%", height: "100%", position: "relative" }}
                  >
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div 
                      className="social-hover-overlay" 
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        color: "white",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span className="label-sm" style={{ fontWeight: 500, letterSpacing: "0.05em", color: "white" }}>@taliaafawaz</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div style={{ display: "block", width: "100%", height: "100%", position: "relative" }}>
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                )
              ) : (
                <img
                  src={item.src}
                  alt="User Generated Content"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        <div style={{ 
          borderTop: "1px solid var(--c-plum-12)", 
          paddingTop: "16px",
          display: "flex", 
          justifyContent: "flex-end",
          gap: "8px" 
        }}>
          <button
            onClick={scrollLeft}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid var(--c-plum-12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--c-plum)",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--c-blush)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid var(--c-plum-12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--c-plum)",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--c-blush)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            →
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialCarousel;
