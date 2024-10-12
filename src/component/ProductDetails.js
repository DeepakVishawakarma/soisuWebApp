import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const item = location.state;
  // const modelRef = React.useRef();
  return (
    <div>
      <model-viewer
        style={{ height: "90vh", width: "100vw" }}
        src={item.image}
        allow="*"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        // poster={loading3d}
        shadow-intensity="1"
        // ref={(ref) => {
        //   modelRef.current = ref;
        // }}
      ></model-viewer>
    </div>
  );
}

export default ProductDetails;
