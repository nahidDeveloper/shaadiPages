// Roadmap.js
import * as React from "react";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="roadmap-timeline">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <div className="roadmap-header-line" />
          <div className="roadmap-title">Our Roadmap</div>
          <div className="roadmap-header-line" />
        </div>
        <div className="roadmap-content">
          <div className="roadmap-left-section">
            <div className="roadmap-steps">
              <div className="roadmap-step">1</div>
              <div className="roadmap-dashed-line" />
              <div className="roadmap-step">2</div>
              <div className="roadmap-dashed-line" />
              <div className="roadmap-step">3</div>
              <div className="roadmap-dashed-line roadmap-long" />
            </div>
            <div className="roadmap-descriptions">
              <div className="roadmap-description">
                <div className="roadmap-description-title">Market Research</div>
                <div className="roadmap-description-text">
                  We’ve identified the problem and thought of a solution that
                  will revolutionise the gap in the market
                </div>
              </div>
              <div className="roadmap-description">
                <div className="roadmap-description-title">Design</div>
                <div className="roadmap-description-text">
                  With the customer experience and simplicity of use at heart,
                  the marketplace has been designed by leading business
                  accelerator{" "}
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/043cb60bcc143ed405878ee919cf96e9fcd27d4ea47d7e7832a274e6644bea03?placeholderIfAbsent=true&apiKey=1d7f906e705c4bceba52c6a62a5b5936"
                className="roadmap-image"
              />
              <div className="roadmap-highlight">
                <div className="roadmap-highlight-title">Development </div>
                <div className="roadmap-highlight-text">
                  We are ready to go into building phase!{" "}
                </div>
              </div>
              <div className="roadmap-highlight-line" />
              <div className="roadmap-highlight-action">
                Want to learn more or become an investor?
              </div>
              <div className="roadmap-button-medium">Get in Touch</div>
            </div>
          </div>
          <div className="roadmap-right-section">
            <div className="roadmap-steps-right">
              <div className="roadmap-step">4</div>
              <div className="roadmap-dashed-line" />
              <div className="roadmap-step">5</div>
            </div>
            <div className="roadmap-descriptions-right">
              <div className="roadmap-description">
                <div className="roadmap-description-title">Soft launch </div>
                <div className="roadmap-description-text">
                  We can only do this with your help - the vendors - so sign up
                  now to be a part of something special!
                </div>
              </div>
              <div className="roadmap-description">
                <div className="roadmap-description-title">Go Live!</div>
                <div className="roadmap-description-text">
                  We aim to go live to customers by November this year and we
                  will go big with a largescale & effective go-to market plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
