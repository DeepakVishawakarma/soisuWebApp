import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ item }) {
  const { image } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/productDetails", { state: { image: image } });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 280,
        minWidth: 280,
      }}
      onClick={handleClick}
    >
      <h1>{item.name}</h1>
    </div>
  );
}

export default ProductItem;
