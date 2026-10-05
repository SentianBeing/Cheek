import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 40px",
    backgroundColor: "var(--c-white)",
    color: "#000000",
  };

  const navItemStyle = {
    cursor: "pointer",
    opacity: 0.9,
    transition: "opacity 0.2s",
  };

  return (
    <header style={headerStyle}>
      <nav style={{ display: "flex", gap: "32px", flex: 1 }}>
        <a
          href="#"
          className="label"
          style={navItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          SHOP
        </a>
        <a
          href="#"
          className="label"
          style={navItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          ABOUT
        </a>
        <a
          href="#"
          className="label"
          style={navItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          CHEEKY CLUB
        </a>
      </nav>

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Logo isSolid={true} />
      </div>

      <nav
        style={{
          display: "flex",
          gap: "32px",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <a
          href="#"
          className="label"
          style={navItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          SEARCH
        </a>
        <a
          href="#"
          className="label"
          style={navItemStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          ACCOUNT
        </a>
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-red)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
        >
          <span className="label">CART (0)</span>
          {/* Example of dot when > 0 */}
          {/* <div style={{ position: 'absolute', top: '-4px', right: '-8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--c-red)' }}></div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
