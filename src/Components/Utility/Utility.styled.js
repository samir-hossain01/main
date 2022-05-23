/** @format */

import styled from "styled-components";
import Utility from "../../images/Utility.png";
import utilityVector from "../../images/utilityVector.png";

const Wrapper = styled.div`
position: relative;
 ::after{
    content: '';
    position: absolute;
    bottom: -30px;
    width: 100%;
    left: 0;
    right: 0;
    height: 50px;
    background: url(${utilityVector});
    z-index: 542;
  }
  .utility {
    padding: 120px 0px;
    background: url(${Utility});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
 
  .container {
    background-color: white;
    padding: 70px 20px;
    border: 3px solid black;
    box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-webkit-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
-moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
border-radius: 5px;
  }
  .leftItem {
  }
  .leftImg {
    text-align: center;
  }
  .leftImg img {
    width: 220px;
  }
  .rightItem {
    text-align: center;
  }
  .rightItem h2 {
    font-size: 78px;
    line-height: 90px;
  }
  .rightItem span {
    color: red;
  }

  .singleCommonItem {
    position: relative;
    overflow-x: hidden;
  }
  .content {
    padding: 110px 90px 180px 120px;
    position: absolute;
    top: 50px;
  }
  .content h3 {
    font-size: 48px;
  }
  .content p {
    font-size: 22px;
    line-height: 35px;
    color: white;
    margin-top: 20px;
  }
  .col-md-6 {
    position: relative;
    overflow-x: hidden;
  }
  .customCOl {
  
  }
  .vector{}
  .tooltip {
    position: absolute;
    top: -120px;
    left: 40px;
  }
  .tooltip h3 {
    position: absolute;
    top: 45%;
    left: 20%;
    font-size: 36px;
  }
  .vector {
    margin-top: 60px;
  }
  .vector img {
    width: 230px;
  }
  .overflow {
    overflow-x: visible;
    overflow: visible;
  }
  @media (max-width: 767px) {
    .utility-6 {
      flex: 0 0 100%;
      max-width: 100%;
      overflow-x: hidden;
    }
    .content {
      padding: 70px 70px 70px 70px;
    }
    .content p {
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media (max-width: 575.98px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .utility-6 {
    
      overflow-x: hidden;
    }
    .content {
      padding: 0px 60px 40px 80px;
    }
    .content p {
      line-height: 18px;
      font-size: 13px;
    }
    .container {
      padding: 40px 30px;
    }
    .tooltip {
      left: 10px;
    }
    .vector img {
      width: 170px;
    }
    .tooltip h3 {
      font-size: 27px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .utility-6 {
    
    overflow-x: hidden;
  }
    .singleCommonItem {
      margin: 0px 0px 0px 0px;
    }
    .content {
      padding: 0px 90px 180px 80px;
      position: absolute;
      top: 50px;
      left: 30px;
    }

    .content h3 {
      margin-top: 30px;
    }
    .content p {
      font-size: 20px;
      line-height: 33px;
    }
    .vector img {
      width: 170px;
    }
    .tooltip h3 {
      font-size: 27px;
    }
    .tooltip {
      left: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .utility-6 {
    
    overflow-x: hidden;
  }
    .content {
      padding: 50px 55px 60px 60px;
    }
    .content p {
      font-size: 13px;
      line-height: 24px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    
    .content {
      padding: 50px 70px 120px 90px;
    }
    .content p {
      font-size: 18px;
    }
  }
`;

export default Wrapper;
