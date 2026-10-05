import React from "react";

const AnnouncementBar = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--c-announcement-bg)",
        textAlign: "center",
        padding: "12px 16px",
        color: "var(--c-announcement-text)",
      }}
    >
      <span className="label-sm">FREE SHIPPING ON ORDERS OVER $50</span>
    </div>
  );
};

export default AnnouncementBar;
