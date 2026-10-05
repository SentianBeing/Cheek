import React from "react";

const Logo = ({ isSolid }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img 
        src="/images/Secondary Logo vector CCO - Black 2 [Vectorized].png" 
        alt="Cheeky Cup Logo" 
        style={{ 
          height: "32px", 
          width: "auto",
          transform: "scale(2.2)",
          transformOrigin: "center center"
        }} 
      />
    </div>
  );
};

export default Logo;
