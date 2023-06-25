import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import {BsCameraVideoFill} from 'react-icons/bs'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className='paddings innerWidth flexCenter c-container'>
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">We are always ready to help by providing the best services to our esteem customers, <br />
          And also believe a good place to live can make your life better.</span>


          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="div flexcenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">080 6766 8288</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second row */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="div flexcenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">080 6766 8288</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
              </div>
              {/* third mode */}
              <div className="flexCenter row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="div flexcenter icon">
                    <BsCameraVideoFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">080 6766 8288</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="div flexcenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">080 6766 8288</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
              </div>
          
          </div>



        </div>
        {/* right */}
        <div className="c-right">
          <div className="image-container">
            <img src="./abuja nija.jpg" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
