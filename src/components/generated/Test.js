import * as React from "react";

function Test() {
  return (
    <>
      <div className="timeline-container">
        <div className="timeline-header">
          <div className="timeline-line" />
          <h2 className="timeline-title">Our Roadmap</h2>
          <div className="timeline-line" />
        </div>

        <div className="timeline-content">
          <div className="timeline-segment">
            <div className="timeline-numbers">
              <div className="number no-circle purple">1</div>
              <div className="dashed-line purple-line" />
              <div className="number no-circle purple">2</div>
              <div className="dashed-line" />
              <div className="number no-circle">3</div>
            </div>

            <div className="timeline-details">
              <div className="milestone">
                <h3 className="milestone-title">Market Research</h3>
                <p className="milestone-description">
                  We’ve identified the problem and thought of a solution that
                  will revolutionize the gap in the market.
                </p>
              </div>

              <div className="milestone">
                <h3 className="milestone-title">Design</h3>
                <p className="milestone-description">
                  With the customer experience and simplicity of use at heart,
                  the marketplace has been designed by leading business
                  accelerator.
                </p>
              </div>

              <img
                loading="lazy"
                src="your-image-url"
                alt="Roadmap Illustration"
                className="timeline-image"
              />

              <div className="highlight-box">
                <div className="milestone">
                  <h3 className="milestone-title">Development</h3>
                  <p className="milestone-description">
                    We are ready to go into the building phase!
                  </p>
                </div>
                <div className="highlight-box-line" />
                <div className="call-to-action">
                  <p>Want to learn more or become an investor?</p>
                  <button className="cta-button">Get in Touch</button>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-segment">
            <div className="timeline-numbers">
              <div className="number no-circle">4</div>
              <div className="dashed-line" />
              <div className="number no-circle">5</div>
            </div>

            <div className="timeline-details">
              <div className="milestone">
                <h3 className="milestone-title">Soft Launch</h3>
                <p className="milestone-description">
                  We can only do this with your help - the vendors - so sign up
                  now to be a part of something special!
                </p>
              </div>

              <div className="milestone">
                <h3 className="milestone-title">Go Live!</h3>
                <p className="milestone-description">
                  We aim to go live to customers by November this year and we
                  will go big with a large-scale & effective go-to-market plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          background-color: #fcf9ff;
          padding: 0 80px 190px;
          font-family: Lora, sans-serif;
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 35px;
          font-size: 48px;
          font-weight: 500;
          color: #000;
        }

        .timeline-line {
          flex-grow: 1;
          height: 4px;
          background-color: #ae3a8e;
        }

        .timeline-title {
          flex-shrink: 0;
          text-align: center;
        }

        .timeline-content {
          margin-top: 60px;
        }

        .timeline-segment {
          display: flex;
          align-items: flex-start;
          margin-top: 50px;
          gap: 40px;
        }

        .timeline-numbers {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 64px;
          color: #ae3a8e;
          font-weight: 600;
        }

        .number {
          font-size: 48px; /* Adjust font size to match Figma */
          color: #ae3a8e; /* Default color for the numbers */
        }

        .no-circle {
          background: none; /* Remove background to eliminate circle */
        }

        .purple {
          color: #ae3a8e;
        }

        .purple-line {
          border-color: #ae3a8e;
        }

        .dashed-line {
          width: 4px;
          height: 160px;
          border: 4px dashed #333; /* Default color for the line */
          margin-top: 10px;
        }

        .timeline-details {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .milestone {
          width: 100%;
        }

        .milestone-title {
          font-size: 30px;
          font-weight: 600;
          color: #ae3a8e;
        }

        .milestone-description {
          font-size: 22px;
          font-weight: 400;
          margin-top: 8px;
          color: #000;
        }

        .timeline-image {
          align-self: flex-end;
          width: 120px;
          margin-top: 0;
        }

        .highlight-box {
          background-color: #f9d733;
          padding: 22px 56px;
          border-radius: 12px;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.18);
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-box-line {
          width: 100%;
          height: 4px;
          background-color: #ae3a8e;
          margin: 20px 0;
        }

        .call-to-action {
          font-size: 28px;
          font-weight: 600;
          text-align: center;
        }

        .cta-button {
          margin-top: 10px;
          padding: 15px 30px;
          background-color: #fff;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid #ae3a8e;
          color: #ae3a8e;
        }

        @media (max-width: 991px) {
          .timeline-container {
            padding: 0 20px 100px;
          }

          .timeline-header {
            font-size: 40px;
          }

          .timeline-numbers {
            display: none;
          }

          .milestone-title {
            font-size: 28px;
          }

          .milestone-description {
            font-size: 20px;
          }

          .highlight-box {
            margin-top: 40px;
            padding: 20px;
          }

          .cta-button {
            padding: 10px 20px;
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default Test;
