/** @format */

import React, { useEffect, useState } from "react";

import Wrapper from "./Count.styled";
import moment from "moment";
import Tv from "../../images/Tv.png";
import AOS from "aos";
import "aos/dist/aos.css";


function Count() {
  const [days, setDays] = useState(0, 0);
  const [hours, setHours] = useState(0, 0);
  const [minutes, setMinutes] = useState(0, 0);
  const [seconds, setSeconds] = useState(0, 0);
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2022-04-29T12:59-0500");
      const countdown = moment(then - now);
      setDays(countdown.format("DD"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <Wrapper>
      <div className='Timerapp container'>
        <div className='row'>
          <div className='col-md-6 leftCOl '>
            <div className='singleItem' >
              <div className='presale'>
                <h2>
                  Presale Mint <span>Starts In:</span>
                </h2>
              </div>
              <div className='timer-container'>
                <div className='Daytimer timer'>
                  <div className='Item Item2'>
                    <p> {days}</p>
                  </div>
                  <span>days</span>
                </div>
                {showSemicolon ? <div className='semicolon'>:</div> : null}
                <div className='Hourtimer timer'>
                  <div className='Item Item3'>
                    <p> {hours}</p>
                  </div>
                  <span>hour</span>
                </div>
                {showSemicolon ? <div className='semicolon'>:</div> : null}
                <div className='MinuteTimer timer'>
                  <div className='Item Item4'>
                    <p> {minutes}</p>
                  </div>
                  <span>minute</span>
                </div>
                {showSemicolon ? <div className='semicolon'>:</div> : null}
                <div className='SecoundTimer timer'>
                  <div className='Item Item5'>
                    <p>{seconds}</p>
                  </div>
                  <span>second</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6   rightCol'>
            <div className='rightItem ' >
              <div className='rightContent'>
                <a href='/'>
                  Have A Secret Code? <br />
                  <span>Click Here!</span>
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6 offset-6 overFlowCOl '>
            <div className='tvItem' data-aos='fade-up'>
              <img src={Tv} className='img-fluid' alt='tv' />

              <div className='youtubeVideo'>
                <iframe
                  className='iframeVideo'
                  src='https://www.youtube.com/embed/a8ww4aNlPQU'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default Count;
