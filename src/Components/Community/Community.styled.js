/** @format */
import styled from "styled-components";
import Bg from "../../images/Community.png";

const Wrapper = styled.div`
  background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 170px 0px;
  @media (max-width: 575px) {
    padding: 170px 20px;
  }
  .leftItem {
    text-align: center;
  }
  .col-md-7 {
    display: flex;
    align-items: center;
  }
  .leftItem h2 {
    font-size: 61px;
    line-height: 92px;
    font-weight: 700;
    color: black;
    padding: 0px 0px 0px 90px;
  }
  .leftItem h2 span {
    color: red;
  }
  .col-md-5 {
    position: relative;
  }
  .cartoonItem {
  }
  .offset-2 {
    margin-left: 20%;
  }
  .singleItemButton {
    text-align: center;
    margin-top: 60px;
  }
  .social-icons {
  }
.social-icons a {
    font-size: 28px;
    border: 2px solid black;
    padding: 12px 60px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: black;
    border-radius: 8px;
    background: #00c2ff;
    font-weight: 700;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -webkit-box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
}
  .social-icons a:last-child {
    background-color: #632dc9;
  }
  .customCOl {
    background: white;
    border: 3px solid black;
    padding: 70px 0px;
    box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -webkit-box-shadow: -9px 7px 2px 2px rgb(0 0 0);
    -moz-box-shadow: -9px 7px 2px 2px rgba(0,0,0,1);
    border-radius: 5px;
  }
  .social-icons a:hover {
    color: white;
  }
  .social-icons a:last-child {
    margin-left: 40px;
  }
  .para {
    margin: 30px 0px;
  }
  .para p {
    font-size: 22px;
    font-weight: 700;
    text-align: left;
    margin-top: 50px;
  }
  .tooltip {
    position: absolute;
    top: 0;
    right: 50px;
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
    width: 260px;
  }
  .cartoonImg {
    margin-top: 120px;
  }
  .cartoonImg img {
    width: 240px;
  }
  @media (max-width: 767px) {
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
      margin-left: 0;
      padding: 0px 20px;
    }
    .para p {
      font-size: 15px;
    }
    .singleItemButton {
      margin-top: 50px;
    }
    .col-md-7,
    .col-md-5 {
      flex: 0 0 100%;
      max-width: 100%;
      display: block;
    }
    .social-icons a {
      display: block;
    }
    .cartoonItem {
      text-align: center;
    }
    .leftItem h2 {
      font-size: 25px;
      line-height: 42px;
      padding: 0;
    }
    .social-icons a {
      font-size: 23px;
    }
    .social-icons a:last-child {
      margin-left: 0px;
      margin-top: 20px;
    }
    .cartoonImg img {
      width: 170px;
    }

    .customCOl {
      padding: 20px 0px;
    }
    .vector img {
      width: 160px;
    }
    .tooltip h3 {
      font-size: 23px;
    }
    .cartoonImg {
      text-align: center;
    }
    .tooltip {
      top: 30px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .leftItem h2 {
      font-size: 35px;
      line-height: 42px;
      padding: 0;
    }
    .social-icons a {
      display: inline-block;
      margin: 0px 20px;
    }
    .para p {
      padding: 0px 30px;
      text-align: center;
      font-size: 17px;
    }

    .cartoonImg img {
      width: 170px;
    }

    .customCOl {
      padding: 20px 0px;
    }
    .vector img {
      width: 210px;
    }
    .tooltip h3 {
      font-size: 30px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftItem h2 {
      font-size: 46px;
      line-height: 55px;
      padding: 0px 0px 0px 30px;
    }
    .singleItemButton {
      margin-top: 50px;
    }
    .cartoonImg img {
      width: 220px;
    }

    .customCOl {
      padding: 20px 0px;
    }
    .vector img {
      width: 210px;
    }
    .tooltip h3 {
      font-size: 30px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .leftItem h2 {
      font-size: 61px;
      padding: 0px 0px 0px 30px;
      line-height: 70px;
    }
    .singleItemButton {
      margin-top: 50px;
    }
    .cartoonImg img {
      width: 220px;
    }
    .customCOl {
      padding: 20px 0px;
    }
    .vector img {
      width: 210px;
    }
    .tooltip h3 {
      font-size: 30px;
    }
  }
`;

export default Wrapper;
