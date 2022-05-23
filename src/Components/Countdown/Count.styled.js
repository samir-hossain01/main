/** @format */
import styled from "styled-components";
import TvBg from "../../images/tvBg.png";
import Vector from "../../images/vectoBg.png";
import countVector from "../../images/countVector.png";

const Wrapper = styled.div`
  background: url(${TvBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 70px 0px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    background: url(${Vector});
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
    z-index: 542;
  }
  ::before{
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    background: url(${countVector});
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
  }
  @media (max-width: 575px) {
    padding: 70px 20px;
  }
  .singleItem {
    background-color: white;
    border: 3px solid black;
    border-radius: 5px;

    padding: 30px 20px;
   
    box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-webkit-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
  }
  .presale {
  }
  .presale h2 {
    font-size: 72px;
    margin-bottom: 30px;
  }
  .presale h2 span {
    color: red;
  }
  .timer-container {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
  }
  .timer {
    position: relative;
    text-align: center;
  }
  .Item {
    width: 110px;
    background-color: #7f2b6e;
  }
  .timer::after {
    content: "";
    position: absolute;
    top: 0;
    width: 65px;
    border: 2px solid white;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    left: -33%;
    padding: 0px -20px;
    top: 21px;
  }
  .timer p {
    color: white;
    text-align: center;
    /* padding: 10px 30px; */

    font-size: 37px;
    box-shadow: -5px 9px 13px 0px rgba(222, 193, 193, 0.75);
    -webkit-box-shadow: -5px 9px 13px 0px rgba(222, 193, 193, 0.75);
    -moz-box-shadow: -5px 9px 13px 0px rgba(222, 193, 193, 0.75);
    margin-bottom: 20px;
    border-radius: 5px;
    text-align: end;
    padding-right: 0;
    padding-left: 0;
    letter-spacing: 24px;
  }
  .timer span {
    font-size: 22px;
    font-weight: 700;
  }
  .Daytimer {
  }
  .Daytimer::after {
    content: "";
    left: 15%;
  }
  .Daytimer span {
  }
  .leftCOl{

  }
  .Daytimer p {
    /* background-color: #7f2b6e; */
  }
  .Item3 {
    background-color: #e63068;
  }
  .Hourtimer::after {
    content: "";
    left: 16%;
  }
  .Hourtimer span {
  }
  .Hourtimer p {
  }
  .Item4 {
    background-color: #f3aa33;
  }
  .MinuteTimer::after {
    content: "";
    left: 16%;
  }
  .MinuteTimer span {
  }
  .MinuteTimer p {
  }
  .Item5 {
    background-color: #5e5aff;
  }
  .SecoundTimer p {
  }
  .SecoundTimer span {
  }
  .SecoundTimer::after {
    content: "";
    left: 16%;
  }
  .rightItem {
    background-color: white;
    border: 3px solid black;
    padding: 30px 40px;
    border-radius: 5px;
    box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-webkit-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
  
  }

  .rightContent {
    text-align: center;
  }
  .rightContent a {
    font-size: 58px;
    line-height: 105px;
    max-height: 210px;
    font-family: bigbank_bold;
    height: 100%;
  }
  .rightContent a span {
    color: red;
  }

  .offset-6 {
    margin-left: 25%;
  }
  .tvItem {
    position: relative;
    margin-top: 50px;
  }
  .youtubeVideo {
    position: absolute;
    top: 40px;
    left: 35px;
  }
  .iframeVideo {
    width: 390px;
    height: 290px;
    object-fit: cover;
    border-radius: 20px;
  }

  .rightCol {
 padding: 0px 20px;

  }

  .overFlowCOl {
    overflow-x: visible;
    overflow: visible;
  }
  @media (max-width: 575px) {
    .presale h2 {
      font-size: 47px;
    }
    .timer-container {
      display: grid;

      column-gap: 20px;

      grid-template-columns: 1fr 1fr;
    }
    .Item4,
    .Item5 {
      margin-top: 40px;
    }
    .MinuteTimer::after,
    .SecoundTimer::after {
      content: "";
      left: 20px;
      top: 60px;
    }
    .rightContent a {
      font-size: 47px;
      line-height: 65px;
    }
    .Daytimer::after,
    .Hourtimer::after {
      left: 20px;
    }
    .timer span {
      position: relative;
      left: -20px;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .row {
      justify-content: center;
    }
    .offset-6 {
      margin-left: 0%;
    }
    .youtubeVideo {
      top: 32px;
      left: 37px;
    }
    .iframeVideo {
      max-width: 420px;
      height: 300px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 555px) {
    .youtubeVideo {
      top: 35px;
      left: 37px;
    }
    .iframeVideo {
      max-width: 380px;
      height: 280px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 535px) {
    .youtubeVideo {
      top: 35px;
      left: 37px;
    }
    .iframeVideo {
      max-width: 340px;
      height: 280px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 511px) {
    .youtubeVideo {
      top: 35px;
      left: 37px;
    }
    .iframeVideo {
      max-width: 320px;
      height: 280px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 475px) {
    .youtubeVideo {
      top: 35px;
      left: 32px;
    }
    .iframeVideo {
      max-width: 320px;
      height: 240px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 408px) {
    .youtubeVideo {
      top: 35px;
      left: 30px;
    }
    .iframeVideo {
      max-width: 260px;
      height: 190px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 395px) {
    .youtubeVideo {
      top: 30px;
      left: 25px;
    }
    .iframeVideo {
      max-width: 260px;
      height: 190px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 375px) {
    .youtubeVideo {
      top: 25px;
      left: 25px;
    }
    .iframeVideo {
      max-width: 240px;
      height: 180px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 337px) {
    .youtubeVideo {
      top: 25px;
      left: 25px;
    }
    .iframeVideo {
      max-width: 220px;
      height: 160px;
    }
    .tvItem {
      overflow: hidden;
    }
  }
  @media (max-width: 991.98px) {
    .leftCOl,
    .rightCol {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0;
      margin-bottom: 30px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .row {
      justify-content: center;
    }
    .offset-6 {
      margin-left: 0%;
    }
    .youtubeVideo {
      top: 32px;
      left: 22px;
    }
    .iframeVideo {
      width: 390px;
      height: 280px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .youtubeVideo {
      top: 23px;
      left: 22px;
    }
    .iframeVideo {
      width: 250px;
      height: 180px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .timer-container {
      column-gap: 5px;
    }
    .rightContent a {
      line-height: 94px;
    }
    .youtubeVideo {
      top: 35px;
      left: 30px;
    }
    .iframeVideo {
      width: 320px;
      height: 250px;
    }
  
  }
`;

export default Wrapper;
