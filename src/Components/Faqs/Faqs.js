/** @format */

import React from "react";
import Wrapper from "./Faqs.styled";

import UtilityImg from "../../images/utilityCartoon.png";
import Vector from "../../images/vector2.png";

function Faqs() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <Wrapper>
      <div className='container' id='faq'>
        <div className='row'>
          <div className='col-md-12 itemCenter '>
            <div className='row'>
              {/* single item */}

              <div className='col-md-6 imgCol'>
                <div className='cartoonItem'>
                  <div className='cartoonImg'>
                    <img src={UtilityImg} className='img-fluid' alt='cartoon' />
                  </div>
                </div>
                <div className='tooltip'>
                  <h3> What am I ??</h3>
                  <div className='vector'>
                    <img src={Vector} className='img-fluid' alt='' />
                  </div>
                </div>
              </div>
              {/* single item end here */}

              {/* single item start here */}
              <div className='col-md-6'>
                <div className='rightItem'>
                  <h2>
                    Frequently <br />
                    Asked
                    <br />
                    <span>Questions</span>
                  </h2>
                </div>
              </div>
              {/* single item end here */}
            </div>
          </div>
          <div className='col-md-12'>
            <div className='faqs-container' id='faq'>
              <div className='container-row'>
                <div className='row-col'>
                  <div className='accordion-container'>
                    <button
                      className='accordion-item'
                      onClick={handleAccordion}>
                      Where Can I Purchase An Adolescent Ape Club NFt?
                    </button>
                    <div className='panel'>
                      <p>TBC (check socials for updates)</p>
                    </div>
                  </div>
                  <div className='accordion-container'>
                    <button
                      className='accordion-item'
                      onClick={handleAccordion}>
                      How many Adolescent Ape Club NFt’s will be available?
                    </button>
                    <div className='panel'>
                      <p>TBC (check socials for updates)</p>
                    </div>
                  </div>
                  <div
                    className='accordion-container'
                    onClick={handleAccordion}>
                    <button className='accordion-item'>
                      What is the floor cost for minting an Adolescent Ape Club
                      NFt?
                    </button>
                    <div className='panel'>
                      <p>
                        The floor mint rate for the Adolescent Ape NFt is .10
                        Ethereum.
                      </p>
                    </div>
                  </div>
                  <div
                    className='accordion-container'
                    onClick={handleAccordion}>
                    <button className='accordion-item'>
                      How can I get access to the WHITELIST?
                    </button>
                    <div className='panel'>
                      <p>TBC (check socials for updates)</p>
                    </div>
                  </div>
                  <div
                    className='accordion-container'
                    onClick={handleAccordion}>
                    <button className='accordion-item'>
                      Which wallets will I be able to use to mint and hold my
                      Adolescent Ape Club NFt(s)?
                    </button>
                    <div className='panel'>
                      <p>TBC (check socials for updates)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faqs;
