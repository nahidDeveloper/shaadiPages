import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="images">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/062ec9cbc14cb6035d4177b7b66dd8a35e255a30d6c18ee86ad602a63f3b9bae?"
            className="image image-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e5db7eb0167c3cde1559fa5e6ed019245549bcd427b914781b4b5939d20d601?"
            className="image image-2"
          />
        </div>
        <div className="title">The Wedding Planning Hub</div>
        <div className="subtitle">
          From budget planning to finding the right vendors, we’ve got you
          covered
        </div>
      </div>
    </div>
  );
}

export default Header;
