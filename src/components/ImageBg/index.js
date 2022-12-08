import React from "react";
import { useHover } from "../../customHook/useHover";

const ImageBG = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div className="bgImage">
      <h1 ref={hoverRef} style={{ color: isHovered ? "green" : "#000" }}>
        Welcome to 2MPetShop
      </h1>
    </div>
  );
};

export default ImageBG;
