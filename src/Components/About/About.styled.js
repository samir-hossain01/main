/** @format */

import styled from "styled-components";

import AboutBg from "../../images/about.png";

import Vector from "../../images/aboutVector.png";

const Wrapper = styled.div`
  background: url(${AboutBg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding: 80px 0px;
.container{
  box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-webkit-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
border-radius: 5px;
}
  ::after {
    content: "";
    background: url(${Vector});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    height: 50px;
    width: 100%;
    bottom: -38px;
    z-index: 542;
  }
  .leftItem {
    text-align: center;
  }
  .leftItem h2 {
    font-size: 105px;
    line-height: 136px;
    font-weight: 700;
    color: black;
  }
  .leftItem h2 span {
    color: red;
  }
  .col-md-5 {
    position: relative;
  }
  .cartoonItem {
  }
  .container {
    background: white;
    padding: 50px 40px;
    border: 4px solid black;
    border-radius: 5px;
  }
  .tooltip {
    position: absolute;
    top: 0;
    right: 0;
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
  }
  .cartoonImg {
    margin-top: 230px;
  }
  .cartoonImg img {
    width: 240px;
  }
  .aboutPara {
    padding: 30px 0px;
  }
  .aboutPara p {
    font-size: 20px;
    color: black;
    font-weight: 700;
    line-height: 40px;
  }
  .aboutPara p:last-child {
    margin-top: 30px;
  }
  @media (max-width: 767px) {
    .col-md-7,
    .col-md-5 {
      flex: 0 0 100%;
      width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .about {
      padding: 0px 20px;
    }
    .leftItem h2 {
      font-size: 47px;
      line-height: 60px;
    }
    .tooltip {
      width: 84%;
      height: 160px;
      top: 30px;
      right: 0;
    }
    .cartoonImg img {
      width: 150px;
    }
    .aboutPara p {
      font-size: 17px;

      line-height: 29px;
    }
    .container {
      padding: 50px 20px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .leftItem h2 {
      font-size: 78px;
      line-height: 90px;
    }
    .tooltip {
      width: 64%;
      height: 220px;

      top: 30px;
    }
    .aboutPara p {
      font-size: 17px;

      line-height: 29px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftItem h2 {
      font-size: 70px;
      line-height: 100px;
    }
    .tooltip {
      width: 81%;
      height: 160px;
    }
    .cartoonImg img {
      width: 158px;
    }
    .aboutPara p {
      font-size: 17px;

      line-height: 32px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .leftItem h2 {
      font-size: 108px;
      line-height: 150px;
    }
    .tooltip {
      width: 74%;
      height: 200px;
    }
  }
`;

export default Wrapper;
