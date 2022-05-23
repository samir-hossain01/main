/** @format */

import styled from "styled-components";
import Vector from "../../images/footerVector.png";

const Wrapper = styled.div`
  footer {
    background-color: #dc1500;
    text-align: center;
    padding: 50px 0px;
    position: relative;
  }
  footer::before {
    content: "";
    position: absolute;
    top: -101px;
    left: 0;
    right: 0;
    height: 120px;
    background-size: cover;
    background: url(${Vector});
    background-repeat: no-repeat;
  }
  .footerSingleItem {
    display: grid;
    grid-template-columns: 4fr 2fr 3fr 2fr;
  }
  .footerLogo {
  }
  .footerLogo img {
  }
  .footerLink {
  }
  .footerLink ul {
  }
  .footerLink ul li {
    list-style: none;
    text-align: left;
  }
  .footerLink ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    line-height: 39px;
    font-weight: 300;
  }
  .footerLink2 {
  }
  .footerCondition {
  }
  .footerCondition ul {
  }
  .footerCondition ul li {
    text-align: left;
    list-style: none;
  }
  .footerCondition ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    line-height: 39px;
    font-weight: 300;
  }
  .searchBar {
    text-align: left;
  }
  .searchBar input {
    padding: 11px 20px;
    border-radius: 5px;
    border: 0;
    outline: 0;
    margin: 20px 0px;
    width: 80%;
  }
  .footerCopy {
    text-align: left;
  }
  .footerCopy p {
    color: white;
    font-size: 18px;
    line-height: 39px;
    font-weight: 300;
  }
  .footerSocialICon {
    text-align: left;
  }
  .footerSocialICon a {
    font-size: 30px;
    color: white;
    padding: 0px 10px;
  }
  .footerSocialICon a span {
  }
  @media (max-width: 575.98px) {
    .footerSingleItem {
      display: grid;
      grid-template-columns: 1fr;
    }
    .footerSocialICon,
    .footerCondition {
      text-align: left;
      margin-top: 40px;
    }
    .footerLink ul li,
    .footerCondition ul li,
    .searchBar,
    .footerCopy,
    .footerSocialICon {
      text-align: center;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .footerSingleItem {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .footerSocialICon,
    .footerCondition {
      text-align: left;
      margin-top: 40px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .footerSingleItem {
      grid-template-columns: 3fr 2fr 3fr 2fr;
    }
    .footerSocialICon a {
      font-size: 26px;
    }
    .footerLink ul li a,
    .footerCondition ul li a,
    .footerCopy p {
      font-size: 16px;
    }
  }
`;

export default Wrapper;
