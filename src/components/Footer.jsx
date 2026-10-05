import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--c-ivory)",
        color: "var(--c-plum)",
        padding: "var(--gutter)",
        paddingBottom: "0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px",
          paddingBottom: "48px",
        }}
      >
        {/* Newsletter */}
        <div style={{ gridColumn: "span 2" }}>
          <h3 className="h3" style={{ marginBottom: "16px" }}>
            join the cheeky club.
          </h3>
          <p className="body" style={{ marginBottom: "24px" }}>
            Drops, recipes and a little sass in your inbox, xoxo Talia.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              style={{
                flex: 1,
                backgroundColor: "transparent",
                border: "1px solid var(--c-plum-12)",
                padding: "12px 24px",
                borderRadius: "var(--radius-pill)",
                color: "var(--c-plum)",
                fontFamily: "var(--f-body)",
                outline: "none",
              }}
              className="body"
            />
            <button
              className="btn btn-primary label"
              style={{ borderRadius: "var(--radius-pill)" }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="label" style={{ marginBottom: "16px" }}>
            SHOP
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>
              <a href="#" className="body-sm">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                Matcha
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                Merch
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label" style={{ marginBottom: "16px" }}>
            ABOUT
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>
              <a href="#" className="body-sm">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                Ingredients
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label" style={{ marginBottom: "16px" }}>
            HELP
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>
              <a href="#" className="body-sm">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                Returns
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label" style={{ marginBottom: "16px" }}>
            SOCIAL
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>
              <a href="#" className="body-sm">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="body-sm">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid var(--c-plum-12)",
          paddingTop: "24px",
          paddingBottom: "24px",
          color: "var(--c-plum-70)",
        }}
      >
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#" className="body-sm">
            Privacy
          </a>
          <a href="#" className="body-sm">
            Terms
          </a>
          <a href="#" className="body-sm">
            Accessibility
          </a>
        </div>
        <div className="body-sm">© Cheeky Cup Of 2026</div>
      </div>

      {/* Giant Wordmark */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: "24px",
        }}
      >
        <img
          src="/images/cheeky-cup-logo.svg"
          alt="Cheeky Cup Logo"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            marginBottom: "-2%",
          }}
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
