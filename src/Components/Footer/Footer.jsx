import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className=" flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className='secondaryText'>
                    Our vision is to find a suitable enviroment <br />
                    for all our clinets to live in.

                </span>

            </div>
            {/* right side */}
            <div className=" flexColStart f-right">
                <span className='primaryText'>
                    Information
                </span>
                <span className='secondaryText'>
                    Block 3, road 3, Peace avenue, <br />
                    Tombia imiring road, Yenegoa, Bayelsa state , Nigeria
                </span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>

            </div>
        </div>
    </section>
  
  )
}

export default Footer;