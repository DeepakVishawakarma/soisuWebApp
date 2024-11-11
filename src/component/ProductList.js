import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [url, setUrl] = useState(
    "https://mimnsi.github.io/interactive_scenes_3d_6/demo/assets/data/SOISU/JFS25B.html"
  );
  const productList = [
    { id: 1, name: "Plain Sofa", image: require("../assets/AW2310-D.glb") },
    { id: 2, name: "Round Sofa", image: require("../assets/JFS25B.glb") },
    { id: 3, name: "Joint Sofa", image: require("../assets/JFS61.glb") },
    { id: 4, name: "Bed", image: require("../assets/JK0004A.glb") },
  ];

  return (
    <section>
      <h2
        style={{
          marginTop: 20,
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        Product List
      </h2>

      <div
        style={{
          backgroundColor: "lightgreen",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          width="600"
          height="400"
          src={url}
          title="Dynamic Iframe"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {productList.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: "powderblue",
                borderRadius: 20,
                margin: 10,
                padding: 20,
              }}
            >
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductList;
