/** @format */

import React, { useEffect } from "react";

import Wrapper from "./Roadmap.styled";
import Cartoon from "../../images/cartoon.png";
import Line from "../../images/line.png";
import Tooltip from "../../images/RoadTooltip.png";
import Cowbody from "../../images/cowboy.png";
import Duck from "../../images/duck.png";
import Dunch from "../../images/dunce.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Roadmap() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <Wrapper>
      <div className='roadmap' id='roadmap'>
        <div className='roadImg'>
          <img src={Line} className='img-fluid' alt='' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 roadCOl12'>
              <div className='row customROw'>
                {/* single item start here */}
                <div className='col-md-7'>
                  <div className='leftItem'>
                    <h2>
                      Chyptos
                      <br />
                      <span> = Roadmap</span>
                    </h2>
                  </div>
                </div>
                {/* single item end here */}

                {/* single item start here */}
                <div className='col-md-5 offset-right'>
                  <div className='cartoonItem'>
                    <div className='cartoonImg'>
                      <img src={Cartoon} className='img-fluid' alt='cartoon' />
                    </div>
                  </div>
                  <div className='tooltip'>
                    <h3> What am I ??</h3>
                    <div className='vector'>
                      <img src={Tooltip} className='img-fluid' alt='' />
                    </div>
                  </div>
                  {/* <div className='tooltip'>
                <h3> What am I ??</h3>
              </div> */}
                </div>
                {/* single item end here */}
              </div>
            </div>

            {/* single item start here */}

            <div className='col-md-6 roadCol  offset-6'>
              <div className='phaseSingleItem' data-aos='fade-right'>
                <div className='phaseTitle'>
                  <h3>
                    {" "}
                    Phase <span>1</span>
                  </h3>
                </div>
                <div className='phasePara'>
                  <p>
                    Many moons ago, in a secret laboratory hidden far beneath
                    the New York City subway system, our founder (MadScyentyst)
                    was doing some top{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* single item end here */}
            {/* single item start here */}

          <div className="col-md-12 roadcol2">
            <div className="row">
            <div className='col-md-6 roadCol offset-right '>
              <div className='phaseSingleItem' data-aos='fade-left'>
                <div className='phaseTitle'>
                  <h3>
                 
                    Phase <span>2</span>
                  </h3>
                </div>
                <div className='phasePara'>
                  <p>
                    Many moons ago, in a secret laboratory hidden far beneath
                    the New York City subway system, our founder (MadScyentyst)
                    was doing some top{" "}
                  </p>
                </div>
               
              </div>
           
            </div>
            </div>
            <div className="cowboy">
                <img src={Cowbody} className="img-fluid" alt="" />
                </div>
          </div>

            {/* single item end here */}
            {/* single item start here */}

            <div className='col-md-6 roadCol  offset-6'>
              <div className='phaseSingleItem' data-aos='fade-right'>
                <div className='phaseTitle'>
                  <h3>
                    {" "}
                    Phase <span>3</span>
                  </h3>
                </div>
                <div className='phasePara'>
                  <p>
                    Many moons ago, in a secret laboratory hidden far beneath
                    the New York City subway system, our founder (MadScyentyst)
                    was doing some top{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* single item end here */}
            {/* single item start here */}

         <div className="col-md-12 roadcol2 ">
         <div className='col-md-6 roadCol  offset-right'>
              <div className='phaseSingleItem' data-aos='fade-left'>
                <div className='phaseTitle'>
                  <h3>
                    {" "}
                    Phase <span>4</span>
                  </h3>
                </div>
                <div className='phasePara'>
                  <p>
                    Many moons ago, in a secret laboratory hidden far beneath
                    the New York City subway system, our founder (MadScyentyst)
                    was doing some top{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="cowboy">
                <img src={Duck} className="img-fluid" alt="" />
                </div>
         </div>

            {/* single item end here */}
            {/* single item start here */}

            <div className='col-md-6 roadCol  offset-6'>
              <div className='phaseSingleItem' data-aos='fade-right'>
                <div className='phaseTitle'>
                  <h3>
                    {" "}
                    Phase <span>5</span>
                  </h3>
                </div>
                <div className='phasePara'>
                  <p>
                    Many moons ago, in a secret laboratory hidden far beneath
                    the New York City subway system, our founder (MadScyentyst)
                    was doing some top{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* single item end here */}
            {/* single item start here */}

          <div className="col-md-12 roadcol2">
          <div className='col-md-6  roadCol offset-right'>
              <div className='phaseSingleItem' data-aos='fade-left'>
                <div className='phaseTitle'>
                  <h3>
                    {" "}
                    Phase <span>6</span>
                  </h3>
                </div>
                <div className='phasePara'>
                  <p>
                    Many moons ago, in a secret laboratory hidden far beneath
                    the New York City subway system, our founder (MadScyentyst)
                    was doing some top{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="cowboy cowboy2">
                <img src={Dunch} className="img-fluid" alt="" />
                </div>
          </div>

            {/* single item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
