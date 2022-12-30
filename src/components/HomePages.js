import React from "react";
import { useHover } from "../customHook/useHover";
import About from "./About";

const HomePages = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <div className="bgImage">
        <span
          ref={hoverRef}
          style={{
            color: isHovered ? "green" : "#000",
            cursor: "pointer",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Welcome to 2MPetShop
        </span>
      </div>
      <About />
    </div>
  );
};

export default HomePages;
