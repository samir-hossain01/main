/** @format */

import styled from "styled-components";

import Bg from "../../images/Bg.png";

const Wrapper = styled.div`
  .roadmap {
    position: relative;
    background: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 50px;
    z-index: -89;
    background-attachment: fixed;
  }

  .roadImg {
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%, 0%);
    -ms-transform: translate(-50%, 0%);
    transform: translate(-50%, 20%);
    z-index: 5;
  }
  .roadImg img {
    width: 490px;
  }
  .leftItem {
    text-align: center;
  }
  .leftItem h2 {
    font-size: 128px;
    line-height: 150px;
    font-weight: 700;
    color: black;
  }
  .leftItem h2 span {
    color: red;
  }
  .col-md-5 {
    position: relative;
    overflow-x: hidden;
  }
  .cartoonItem {
  }
  .roadCOl12 {
    background: white;
    border: 5px solid black;
    margin: 50px 0px;
    padding: 86px 0px;
    z-index: 58;
    box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -webkit-box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
    border-radius: 5px;
  }
  .roadcol2{
    position: relative;
  }
  .offset-6 {
    margin-left: 50%;
    padding-left: 130px;
  }
  .offset-right {
    padding-right: 130px;
  }
  .col-md-6 {
    overflow-x: hidden;
  }
  .phaseSingleItem {
    background-color: white;
    border: 3px solid black;
    padding: 20px;
    margin-bottom: 50px;
    overflow-x: hidden;
  }
  .phaseTitle {
  }
  .phaseTitle h3 {
    font-size: 38px;
  }
  .phaseTitle h3 span{
    color: #F80000;
    font-size: 38px;
    font-weight: 700;
  }
  .phasePara {
  }
  .phasePara p {
    font-size: 20px;
  }
  .tooltip {
    position: absolute;
    top: -70px;
    right: 30px;
  }
  .tooltip h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    font-size: 40px;
    color: black;
    font-weight: 700;
    position: absolute;
    top: 32%;
    left: 20%;
  }
  .vector {
  }
  .vector img {
    width: 240px;
  }
  .offset-right {
    overflow-x: visible;
  }
  .roadCol{
    position: relative;

  }
  .cowboy{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 545;
    left: 50%;
    transform: translate(-8%, 0%);
  }
  [data-aos^=fade][data-aos^=fade].aos-animate {
    opacity: 1;
    transform: none;
   
    box-shadow: -9px 9px 2px 2px rgb(0 0 0);
    -webkit-box-shadow: -9px 9px 2px 2px rgb(0 0 0);
    -moz-box-shadow: -9px 9px 2px 2px rgba(0,0,0,1);
    border-radius: 5px;
}
  .cowboy img{}
  @media (max-width: 767px) {
    .roadCol{
      overflow-x: hidden;
    }
    .roadImg {
      display: none;
    }
    .offset-6,
    .offset-right {
      margin-left: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .col-md-7,
    .col-md-5 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftItem h2 {
      font-size: 68px;
      line-height: 100px;
    }
    .cartoonImg {
      text-align: center;
    }
    .tooltip {
      top: 0px;
    }
    .cartoonImg img {
      width: 200px;
      margin-top: 140px;
    }
    .vector img {
      width: 170px;
    }
    .tooltip h3 {
      font-size: 22px;
    }
    .roadmap {
      padding: 0px 15px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .leftItem h2 {
      font-size: 68px;
      line-height: 100px;
    }
    .cartoonImg img {
      width: 180px;
      margin-top: 50px;
    }
    .vector img {
      width: 170px;
    }
    .tooltip h3 {
      font-size: 22px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .roadCol{
      overflow-x: hidden;
    }
    .leftItem h2 {
      font-size: 88px;
      line-height: 100px;
    }
    .roadImg {
      transform: translate(-50%, 11%);
    }
    .roadImg img {
      width: 100%;
    }
    .phasePara p {
      font-size: 12px;
    }
    .phaseSingleItem {
      margin-bottom: 0px;
    }
    .vector img {
      width: 190px;
    }
    .tooltip h3 {
      font-size: 30px;
    }
.cowboy {
 
    transform: translate(-30%,0%);
}
.cowboy img{
  width: 120px;
}
.cowboy2{
  left: 60%;
}
  }
  @media (max-width:767px) {
    .cowboy{
      display: none;
    }
    .roadcol2{
      padding: 0px 5px;
    }
    
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .roadCol{
      overflow-x: hidden;
    }
    .phasePara p {
      font-size: 14px;
    }
    .roadImg {
      transform: translate(-50%, 14%);
    }
    .roadImg img {
      width: 460px;
    }
    .leftItem h2 {
      font-size: 98px;
      line-height: 120px;
    }
  }
`;

export default Wrapper;
