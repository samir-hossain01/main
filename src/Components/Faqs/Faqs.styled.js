/** @format */

import styled from "styled-components";
import FaqBg from "../../images/FAQ.png";
import FaqVector from "../../images/faqvector.png";
import FaqVector2 from "../../images/faqvector2.png";

const Wrapper = styled.div`
  background: url(${FaqBg});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 59;
  padding: 50px 0px;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  @media (max-width: 575px) {
    padding: 50px 20px;
  }
  ::before {
    content: "";
    position: absolute;
    top: -41px;
    left: 0;
    right: 0;
    height: 50px;
    background: url(${FaqVector});
    background-size: cover;
    background-repeat: no-repeat;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: -41px;
    left: 0;
    right: 0;
    height: 50px;
    background: url(${FaqVector2});
    background-size: cover;
    background-repeat: no-repeat;
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
  .itemCenter {
    border: 4px solid black;
    padding: 30px 0px;
    background-color: white;
    border-radius: 8px;
    z-index: 59;
    box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -webkit-box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
  }
  .imgCol {
    position: relative;
  }
  .faqs-container {
    width: 100%;
    margin: auto;
    padding: 0px 0px 0px 0px;
    @media (max-width: 768px) {
      width: 95%;
    }
    @media (max-width: 600px) {
      width: calc(100% - 20px);
      margin: 0 10px;
    }
    h2 {
      margin-bottom: 41px;
    }
  }
  .accordion-container {
    border-radius: 5px;
    overflow: hidden;
    margin-top: 35px;
    padding: 0 0px;
    transition: 0.5s ease-out;

    .accordion-item {
      background: #ffffff;
      color: #000;
      cursor: pointer;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      -webkit-transition: 0.4s;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      padding: 20px 0;
      padding-left: 30px;
      position: relative;
      border: 3px solid black;
      padding-right: 50px;
      @media (max-width: 600px) {
        font-size: 16px;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/plus.svg")
          no-repeat center center / contain;
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/minus.svg")
          no-repeat center center / contain;
      }
    }
    .panel {
      background: white;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        border-radius: 5px;
        padding: 20px 0px;

        border-radius: 0;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #000;
        padding-left: 40px;
        @media (max-width: 600px) {
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 750px) {
    .row {
    }
    .col-md-4,
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .rightItem h2 {
      font-size: 58px;
      line-height: 60px;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .accordion-container .accordion-item {
      padding-right: 30px;
    }
    .accordion-container .accordion-item:after {
      right: 10px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .rightItem h2 {
      font-size: 58px;
      line-height: 60px;
    }
    .accordion-container .accordion-item {
      padding-right: 50px;
    }
  }
  .tooltip {
    position: absolute;
    top: 0;
    left: 30px;
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
    width: 220px;
  }
  .cartoonImg {
    margin-top: 140px;
    text-align: center;
  }
  .cartoonImg img {
    width: 240px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .vector img {
      width: 180px;
    }
    .tooltip h3 {
      font-size: 28px;
    }
  }
`;

export default Wrapper;
