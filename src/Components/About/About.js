/** @format */

import React, { useEffect } from "react";
import Wrapper from "./About.styled";

import Cartoon from "../../images/cartoon.png";
import Toltip from "../../images/tooltip.png";

// import images and icons

function About() {
  return (
    <Wrapper>
      <div className='about' id='about'>
        <div className='container'>
          <div className='row'>
            {/* single item start here */}
            <div className='col-md-7'>
              <div className='leftItem'>
                <h2>
                  Snack Chips + <br /> Cryptocurrency <br />
                  <span> = Chyptos!</span>
                </h2>
              </div>
            </div>
            {/* single item end here */}

            {/* single item start here */}
            <div className='col-md-5'>
              <div className='cartoonItem'>
                <div className='cartoonImg'>
                  <img src={Cartoon} className='img-fluid' alt='cartoon' />
                </div>
              </div>
              <div className='tooltip'>
                <h3> What am I ??</h3>
                <div className='vector'>
                  <img src={Toltip} className='img-fluid' alt='' />
                </div>
              </div>
            </div>
            {/* single item end here */}

            <div className='aboutPara'>
              <p>
                Many moons ago, in a secret laboratory hidden far beneath the
                New York City subway system, our founder (MadScyentyst) was
                doing some top secret experimentation while high on bath salts
                and he accidentally spilled some of his favourite snack chips
                into his potion which caused a mutant hybrid between the world's
                most popular snack food (Chips) and Cryptocurrency - and thus
                CHYPTOS were born!
              </p>
              <p>
                The newly born Chyptos mated rapidly creating 9,999 total unique
                NFT tokens on the Ethereum blockchain - with over 160 unique
                traits. They want you to take them home!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
