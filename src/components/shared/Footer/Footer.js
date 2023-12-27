import React from "react";
import footerlogo from "../../../assets/icons/footerlogo.svg";
import "../../../styles/Footer/Footer.scss";
import playstore from "../../../assets/icons/playstore.svg";
import appstore from "../../../assets/icons/appstore.svg";
import messageinputicon from '../../../assets/icons/Icon material-email.svg'
import ficon from '../../../assets/icons/flogo.svg'
import igicon from '../../../assets/icons/iglogo.svg'
import tweeticon from '../../../assets/icons/tweetlogo.svg'
import yticon from '../../../assets/icons/ytlogo.svg'
import englang from '../../../assets/icons/engflag.svg'
import arrowlang from '../../../assets/icons/Icon ionic-ios-arrow-forward.svg'

const footerContent = [
    {
        title: 'TameAds',
        links: ['Advertisers', 'Publishers', 'Ad formats', 'Agencies', 'Download', 'Affiliate'],
    },
    {
        title: 'Advertisers',
        links: ['Advertisers With Us', 'How to Buy TameAds', 'Smartads Galler', 'Advertiser Guidelines', 'Advertising FAQ', 'OnBoarding Kit'],
    },
    {
        title: 'Publishers',
        links: ['Publisher Overview', 'Discover Smarlogic', 'New Media', 'Publishers Guidelines', 'Publishers FAQ', 'Request a Demo'],
    },
    {
        title: 'Company',
        links: ['About Us', 'Jobs', 'Offices', 'Blog', 'News', 'Team'],
    },
    {
        title: 'Resources',
        links: ['Help Center', 'Education Center', 'Case Studies', 'FAQs', 'Investors', 'Contact'],
    },
    {
        title: 'Legal',
        links: ['Trust & Transparency', 'Developers', 'Fraud Protection', 'Imprint', 'Report Abuse', 'GDPR'],
    }
];

function Footer() {
    return (
        <div className="main-footer">
            <div className="top-footer">
                <div className="top-left-footer">
                    <div className="footer-header-left">
                        <img src={footerlogo} />
                        <h3>TameAds</h3>
                    </div>
                    <p>Join the largest ad network in the world.</p>
                </div>

                <div className="top-right-footer">
                    <h4>Download our app</h4>
                    <div className="footer-header-right">
                        <div className="playstore">
                            <img src={playstore} />
                            <p>Get it on PlayStore</p>
                        </div>
                        <div className="applestore">
                            <img src={appstore} />
                            <p>Avaible on AppStore</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="footer-wrapper">
                {footerContent.map((section, index) => (
                    <div key={index} className="footer-links">
                        <div className="title">
                            <h4>{section.title}</h4>
                        </div>
                        <div className="links">
                            {section.links.map((link, i) => (
                                <p key={i}>{link}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <hr />

            <div className="footer-subscribe">
                <div className="subscribe"><h2>Subscribe newsletter</h2></div>
                <div className="input-newsletter">
                    <img src={messageinputicon} />
                    <input type="text" placeholder="Enter your email" className="inputt" />
                    <button className="subscrie-btn">Subscribe</button>
                </div>

            </div>

            <hr/>

            <div className="footer-bottom">
                <div className="left-footer-bottom">
                    <p>© 2023 - TameAds - All Rights Reserved.</p>
                </div>
                <div className="right-footer-bottom">
                    <div className="social-links">
                        <div className="social-link"><img src={ficon} /></div>
                        <div className="social-link"><img src={igicon} /></div>
                        <div className="social-link"><img src={yticon} /></div>
                        <div className="social-link"><img src={tweeticon} /></div>
                    </div>
                    <hr className="bottom-hr" />
                    <div className="footer-language">
                        <img src={englang}/>
                        <p>ENG</p>
                        <img src={arrowlang}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;



