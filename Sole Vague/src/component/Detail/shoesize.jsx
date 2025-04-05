import React, { useState } from "react";
import "./Shoesize.css";

function Shoesize() {
  // State to track the currently selected size
  const [activeSize, setActiveSize] = useState(null);

  // Generate sizes from 5 to 12 (inclusive) with 0.5 increments
  const sizes = [];
  for (let i = 5; i <= 12; i += 0.5) {
    sizes.push(i);
  }

  // Create rows with 4 sizes per row
  const rows = [];
  for (let i = 0; i < sizes.length; i += 4) {
    rows.push(sizes.slice(i, i + 4));
  }

  return (
    <div className="button-container">
      <h1>Select Size</h1>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((size) => (
            <button
              key={size}
              className={`btn ${activeSize === size ? "active" : ""}`}
              onClick={() => setActiveSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Shoesize;
