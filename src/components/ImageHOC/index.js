import React from "react";

const ImageHOC = (WrapComponent) => {
  const bgStyle = {
    backgroundColor: "rgba(237, 231, 225, 1)",
  };
  return (props) => (
    <div style={bgStyle}>
      <WrapComponent {...props} />
    </div>
  );
};

export default ImageHOC;
