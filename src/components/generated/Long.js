import React from 'react';
import './Long.css';

const Long = () => {
  return (
    <div className="roadmap-container">
      <div className="section" style={{ left: 189, top: 1664 }}>
        <div className="section-content">
          <div className="section-title">Go Live!</div>
          <div className="section-description">
            We aim to go live to customers by November this year and we will go big with a largescale & effective go-to market plan
          </div>
        </div>
        <div className="section-number" style={{ left: 10, top: 31 }}>5</div>
      </div>

      <div className="section" style={{ left: 192, top: 1386 }}>
        <div className="section-content">
          <div className="section-title">Soft launch</div>
          <div className="section-description">
            We can only do this with your help - the vendors - so sign up now to be a part of something special!
          </div>
        </div>
        <div className="section-number" style={{ left: 6, top: 21 }}>4</div>
      </div>

      <div className="yellow-box" style={{ left: 339, top: 777 }} />

      <div className="dotted-line" style={{ left: 395, top: 960 }} />

      <div className="button" style={{ left: 395, top: 1112 }}>
        <div className="button-text">Get in Touch</div>
      </div>

      <div className="info-text" style={{ left: 395, top: 1000 }}>
        Want to learn more or become an investor?
      </div>

      <div className="section" style={{ left: 190, top: 799 }}>
        <div className="section-content">
          <div className="section-title">Development</div>
          <div className="section-description">We are ready to go into building phase!</div>
        </div>
        <div className="section-number" style={{ left: 10, top: 39 }}>3</div>
      </div>

      <div className="section" style={{ left: 192, top: 512 }}>
        <div className="section-content">
          <div className="section-title" style={{ color: '#AE3A8E' }}>Design</div>
          <div className="section-description">
            With the customer experience and simplicity of use at heart, the marketplace has been designed by leading business accelerator
          </div>
        </div>
        <div className="section-number" style={{ left: 10, top: 38, color: '#AE3A8E' }}>2</div>
        <img className="image" style={{ left: 510, top: 114 }} src="https://via.placeholder.com/92x28" alt="placeholder" />
      </div>

      <div className="section" style={{ left: 190, top: 220 }}>
        <div className="section-content">
          <div className="section-title" style={{ color: '#AE3A8E' }}>Market Research</div>
          <div className="section-description">
            We’ve identified the problem and thought of a solution that will revolutionize the gap in the market
          </div>
        </div>
        <div className="section-number" style={{ left: 16, top: 38, color: '#AE3A8E' }}>1</div>
        <div className="dotted-line rotated" style={{ left: 35, top: 125 }} />
        <div className="dotted-line rotated" style={{ left: 35, top: 412 }} />
        <div className="dotted-line" style={{ left: 35, top: 714 }} />
        <div className="dotted-line" style={{ left: 35, top: 1294 }} />
      </div>

      <div className="roadmap-title" style={{ left: 157, top: 0 }}>
        <div className="roadmap-title-line" style={{ left: 0 }} />
        <div className="roadmap-title-line" style={{ left: 778 }} />
        <div className="roadmap-title-text" style={{ left: 383 }}>Our Roadmap</div>
      </div>
    </div>
  );
};

export default Long;
