import React from "react";
import "./Title.css";
import logo  from"../../images/logo.svg"
import laptop from "../../images/Laptop.png"
import topFlower from "../../images/top-right.svg"
import bottomFlower from "../../images/bottom-left.svg"
function Title() {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-block">
          <img
            loading="lazy"
            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/062ec9cbc14cb6035d4177b7b66dd8a35e255a30d6c18ee86ad602a63f3b9bae?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936"
            src={logo}
            className="hero-image"
            alt="Wedding Planning Hub"
          />
          <div className="hero-title">The Wedding Planning Hub</div>
          <div className="hero-subtitle">
            From budget planning to finding the right vendors, we’ve got you covered
          </div>
        </div>
        <img
          loading="lazy"
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e5db7eb0167c3cde1559fa5e6ed019245549bcd427b914781b4b5939d20d601?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936"
          src={topFlower}
          // className="secondary-image"
          className="top-right-flower"
          alt="Secondary"
        />
      </div>
      <div className="secondary-section">
        <div className="secondary-container">
          <div className="column">
            <div className="call-to-action">
              <div className="cta-button">Become a vendor</div>
              <img
                loading="lazy"
                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1f98238931434b4c6d4fda8cbfa80a9178d29b9db40ed973367ea97e399464?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936"
                src={bottomFlower}
                // className="third-image"
                className="bottom-left-flower"
                alt="Become a vendor"
              />
            </div>
          </div>
          <div className="column-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/229c11fa09e7c2e431d4b054e4b9d25fe4416fe2eb1f31550b2564b996ed9439?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=2000 2000w"
              className="full-width-image"
              alt="Full Width"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
