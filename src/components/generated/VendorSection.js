import React from "react";
import "./VendorSection.css";

function VendorSection() {
  return (
    <div className="vendor-section">
      <div className="vendor-content">
        <div className="column">
          <div className="vendor-info">
            <div className="vendor-title">Become a vendor</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1f98238931434b4c6d4fda8cbfa80a9178d29b9db40ed973367ea97e399464?"
              className="vendor-image"
            />
          </div>
        </div>
        <div className="column column-2">
          <img
            loading="lazy"
            srcSet="..."
            className="vendor-image-2"
          />
        </div>
      </div>
    </div>
  );
}

export default VendorSection;
