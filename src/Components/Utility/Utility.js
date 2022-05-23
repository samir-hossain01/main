/** @format */

import React, { useEffect } from "react";
import UtilityImg from "../../images/utilityCartoon.png";
import Wrapper from "./Utility.styled";
import Vector from "../../images/vector2.png";
import Packet from "../../images/packet.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Utility() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <Wrapper>
      <div className='utility' id='utility'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 customCOl'>
              <div className='row'>
                {/* single item */}

                <div className='col-md-6 overflow'>
                  <div className='leftItem'>
                    <div className='leftImg' data-aos='fade-up'>
                      <img src={UtilityImg} className='img-fluid' alt='' />
                    </div>
                    <div className='tooltip'>
                      <h3> What am I ??</h3>
                      <div className='vector'>
                        <img src={Vector} className='img-fluid' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                {/* single item end here */}

                {/* single item start here */}
                <div className='col-md-6'>
                  <div className='rightItem' data-aos='fade-up'>
                    <h2>
                      So Much <br />
                      <span>Utility!</span>
                    </h2>
                  </div>
                </div>
                {/* single item end here */}
              </div>
            </div>
            {/* single item start here */}
            <div className='col-md-6 utility-6'>
              <div className='singleCommonItem' data-aos='fade-left'>
                <div className='packet'>
                  <img src={Packet} className='img-fluid' alt='' />
                </div>
                <div className='content'>
                  <h3>Utility 1</h3>
                  <p>
                    Utility 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam sollicitudin ultricies nisi iaculis ornare. Ut
                    at erat bibendum, faucibus ante et, vulputate massa.
                  </p>
                </div>
              </div>
            </div>
            {/* sinlge item end here */}
            {/* single item start here */}
            <div className='col-md-6 utility-6' data-aos='fade-right'>
              <div className='singleCommonItem'>
                <div className='packet'>
                  <img src={Packet} className='img-fluid' alt='' />
                </div>
                <div className='content'>
                  <h3>Utility 1</h3>
                  <p>
                    Utility 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam sollicitudin ultricies nisi iaculis ornare. Ut
                    at erat bibendum, faucibus ante et, vulputate massa.
                  </p>
                </div>
              </div>
            </div>
            {/* sinlge item end here */}
            {/* single item start here */}
            <div className='col-md-6 utility-6'>
              <div className='singleCommonItem' data-aos='fade-left'>
                <div className='packet'>
                  <img src={Packet} className='img-fluid' alt='' />
                </div>
                <div className='content'>
                  <h3>Utility 1</h3>
                  <p>
                    Utility 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam sollicitudin ultricies nisi iaculis ornare. Ut
                    at erat bibendum, faucibus ante et, vulputate massa.
                  </p>
                </div>
              </div>
            </div>
            {/* sinlge item end here */}
            {/* single item start here */}
            <div className='col-md-6 utility-6'>
              <div className='singleCommonItem' data-aos='fade-right'>
                <div className='packet'>
                  <img src={Packet} className='img-fluid' alt='' />
                </div>
                <div className='content'>
                  <h3>Utility 1</h3>
                  <p>
                    Utility 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam sollicitudin ultricies nisi iaculis ornare. Ut
                    at erat bibendum, faucibus ante et, vulputate massa.
                  </p>
                </div>
              </div>
            </div>
            {/* sinlge item end here */}
            {/* single item start here */}
            <div className='col-md-6 utility-6'>
              <div className='singleCommonItem' data-aos='fade-left'>
                <div className='packet'>
                  <img src={Packet} className='img-fluid' alt='' />
                </div>
                <div className='content'>
                  <h3>Utility 1</h3>
                  <p>
                    Utility 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam sollicitudin ultricies nisi iaculis ornare. Ut
                    at erat bibendum, faucibus ante et, vulputate massa.
                  </p>
                </div>
              </div>
            </div>
            {/* sinlge item end here */}
            {/* single item start here */}
            <div className='col-md-6 utility-6'>
              <div className='singleCommonItem' data-aos='fade-right'>
                <div className='packet'>
                  <img src={Packet} className='img-fluid' alt='' />
                </div>
                <div className='content'>
                  <h3>Utility 1</h3>
                  <p>
                    Utility 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam sollicitudin ultricies nisi iaculis ornare. Ut
                    at erat bibendum, faucibus ante et, vulputate massa.
                  </p>
                </div>
              </div>
            </div>
            {/* sinlge item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Utility;
