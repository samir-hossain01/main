/** @format */

import React from "react";
import Wrapper from "./Community.styled";
import Cartoon from "../../images/discord.png";

import Toltip from "../../images/RoadTooltip.png";

function Community() {
  return (
    <Wrapper>
      <div className='container' id='community'>
        <div className='row customCOl'>
          <div className='col-md-12 '>
            <div className='row'>
              {/* single item start here */}
              <div className='col-md-7'>
                <div className='leftItem'>
                  <h2>
                    Join The Chyptos Community! <br />
                    <span> Cryptocurrency</span>
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
            </div>
          </div>

          {/* sinlge item */}
          <div className='col-md-8 offset-2'>
            <div className='singleItemButton'>
              <div className='social-icons'>
                <a href='https://www.facebook.com'>Twitter</a>
                <a href='https://www.facebook.com'>Discord</a>
              </div>
              <div className='para'>
                <p>
                  Join our Discord and follow us on Twitter to learn more about
                  our project, and chances to play games, have fun, and win
                  whitelist spots or other prizes!
                </p>
              </div>
            </div>
          </div>
          {/* sngile item end */}
        </div>
      </div>
    </Wrapper>
  );
}

export default Community;
