/** @format */
import vector from "../../images/curve.png";
import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #dc1500;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background: url(${vector});
    background-repeat: no-repeat;
    bottom: 0;
    top: auto;
    left: 0;
    right: 0;
    transform: translate(0%, 93%);
  }
  @media (max-width: 992px) {
    position: relative;
    justify-content: space-between;
    padding: 0 50px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
  }
  .nav-logo {
    display: flex;
    justify-content: center;
    transition: 0.5s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
  .nav-link-container {
    display: flex;
    @media (max-width: 992px) {
      position: absolute;
      left: 0%;
      top: 100%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #030b21;
      transition: 0.5s ease-out;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-left: 50px;
        margin-right: 50px;
        width: 100%;
        padding-bottom: 20px;
      }
      li {
        margin: 0 15px;
        @media (max-width: 1199.98px) {
          margin: 0 8px;
        }
      }
      @media (max-width: 992px) {
        width: 100%;
      }
      a {
        text-decoration: none;
        color: #ffffff;
        display: block;
        transition: 0.5s ease-in-out;
        :hover {
          transform: translateY(-5px);
          color: #efbe1c;
        }
        @media (max-width: 992px) {
          text-align: center;
        }
      }
    }
    .nav-link-last-itemTwo {
      margin-right: 80px;
      @media (max-width: 992px) {
        margin: 0;
      }
    }
    .social-media-icon {
      display: flex;
      margin-top: 12px;
      @media (max-width: 992px) {
        justify-content: center;
      }
      a {
        margin: 0 10px;
        font-size: 30px;
      }
    }
    .nav-button {
      @media (max-width: 992px) {
        text-align: center;
      }
      a {
        background: #efbe1c;
        padding: 9px 25px;
        border-radius: 5px;
        border: 3px solid black;
        transition: 0.5s ease-in-out;
        position: relative;
        z-index: 99;
        box-shadow: -5px 7px 2px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -5px 7px 2px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -5px 7px 2px 0px rgba(0,0,0,0.75);

        :hover {
          background: #efbe1c;
          border: 3px solid black;
          transform: translateY(0px);
          color: red;
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: #ffffff;
        font-size: 30px;
        background: transparent;
      }
    }
  }
`;
export default Wrapper;
