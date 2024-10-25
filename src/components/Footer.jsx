import React from 'react';
import imgLogo from '../assets/koinLogo.png';
import iasLogo from '../assets/iasLogo.png'
import { BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiLogoPinterestAlt, } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div>
                    <img src={imgLogo} alt="" />
                </div>
                <div>
                    <a href="#p" >
                        <BiLogoLinkedin size={20} />
                    </a>
                    <a href="#p">
                        <BiLogoFacebook size={20} />
                    </a>
                    <a href="#p">
                        <BiLogoInstagram size={20} />
                    </a>
                    <a href="#p" >
                        <BiLogoTwitter size={20} />
                    </a>
                    <a href="#p">
                        <BiLogoYoutube size={20} />
                    </a>
                    <a href="#p" >
                        {<BiLogoPinterestAlt size={20} />}
                    </a>
                </div>
            </div>
            <hr />
            <div className='footer-middle'>
                <div className='footer-names'>
                    <h3>Crypto Taxes for</h3>
                    <a href="#p">Individual and Investor</a>
                    <a href="#p">Tax Professional and <br/>Accountants</a>
                    <a href="#p">Exchanges and Web3<br/> projects</a>
                    <img src={iasLogo} alt="iaslogo" />
                </div>
                <div className='footer-names'>
                    <h3>Free Tools</h3>
                    <a href="#p">Crypto Price Live</a>
                    <a href="#p">Crypto Tax Calculator</a>
                    <a href="#p">Crypto Tax Saving Speculator</a>
                    <a href="#p">Crypto Profit Calculator</a>
                    <a href="#p">Crypto Converter</a>
                    <a href="#p">Crypto Staking ROI Calculator</a>
                </div>
                <div className='footer-names'>
                    <h3>Resource Centre</h3>
                    <a href="#p">Crypto Tax Guides</a>
                    <a href="#p">Dumb Ways To Lose Money</a>
                    <a href="#p">Crypto Tax Saving Guide</a>
                    <a href="#p">Blogs</a>
                    <a href="#p">Crypto Buying Guides</a>
                    <a href="#p">Crypto Staking Guides</a>
                    <a href="#p">Crypto Mining Guides</a>
                    <a href="#p">Crypto Price Predictions</a>
                </div>
                <div className='footer-names'>
                    <h3>Help And Support</h3>
                    <a href="#p">Product Guides</a>
                    <a href="#p">How to Guides</a>
                    <a href="#p">Templates</a>
                    <a href="#p">Contact us</a>
                </div>
                <div className='footer-names'>
                    <h3>Company</h3>
                    <a href="#p">About Us</a>
                    <a href="#p">Backend by</a>
                    <a href="#p">Media and Press</a>
                    <a href="#p">Careers <span>We're Hiring</span></a>
                    <a href="#p">Refund Policy</a>
                    <a href="#p">Brand Assets</a>
                    <a href="#p">Terms of Use</a>
                    <a href="#p">Privacy Policy</a>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p>© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
            </div>
        </div>
    )
}

export default Footer