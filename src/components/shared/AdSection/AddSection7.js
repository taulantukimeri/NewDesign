import React from "react";
import fotoadv from '../../../assets/icons/fotoadv.png'
import '../../../styles/AdSection/AddSection7.scss'

function AddSection7() {
  return (
    <div className="ad-main7">
      <div className="left-side-ad7">
        <div class="image-container">
          <img src={fotoadv} alt="Your Image" class="shadow-box" />
          <div class="text-overlay">
            <h2>Advertisers</h2>
            <h3>Launch a campaign with us</h3>
            <p>Whether you have branding or performance objectives, TeamAds can help you deliver on your goals. Let’s talk about what we can do together.</p>
            <div className="btn4">
                <div className="btn-sec4">
                    <button>See All Ad Formats <span>&#8594;</span></button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side-ad7">
        <div className="ad7-header">
            <h1>Publishers</h1>
        </div>
        <div className="ad7-banner">
            <h2> Join The Global Media Platform</h2>
            <p>Unlock incremental revenue from
premium advertisers through ad experiences
that respect your users</p>
        </div>
        <div className="btn4-6">
                <div className="btn-sec4">
                    <button>See All Ad Formats <span>&#8594;</span></button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default AddSection7;
