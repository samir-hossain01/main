/** @format */

import React, { useEffect, useState } from "react";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import { NavHashLink } from "react-router-hash-link";

import mianLogo from "../../images/logo.png";
function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 350 + "px";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll function
  useEffect(() => {
    let navigation = document.querySelector("header");
    window.addEventListener("scroll", scrollFunc);
    function scrollFunc() {
      if (window.innerWidth) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navigation.style.background = "#DC1500";
        } else {
          navigation.style.background = "#DC1500";
        }
      } else {
        navigation.style.background = "#DC1500";
      }
    }
  }, []);

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className='nav-logo'>
        <img src={mianLogo} className='img-fluid' alt='main logo' />
      </div>
      <div className='nav-link-container'>
        <ul>
          <li>
            <NavHashLink
              to='/#about'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              ABOUT
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to='/#utility'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              UTILITY
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to='/#roadmap'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              ROADMAP
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to='/#faq'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              FAQ
            </NavHashLink>
          </li>
          <li className='nav-link-last-item'>
            <NavHashLink
              to='/#community'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              GAMES
            </NavHashLink>
          </li>
          <li className='nav-link-last-itemTwo'>
            <NavHashLink
              to='/#faq'
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => {
                setMobileMenu(false);
              }}>
              DASHBOARD
            </NavHashLink>
          </li>

          <li className='social-media-icon'>
            <a href='https://www.facebook.com'>
              <Icon icon='ant-design:twitter-outlined' />
            </a>
            <a href='https://www.facebook.com'>
              <Icon icon='akar-icons:discord-fill' />
            </a>
            <a href='mailto: chyptosnft@gmail.com'>
            <Icon icon="carbon:email" />
            </a>
          </li>
          <li className='nav-button'>
            <li>
              <NavHashLink
                to='/#home'
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                }}>
                Connect Wallet
              </NavHashLink>
            </li>
          </li>
        </ul>
      </div>
      <div className='mobile-menu'>
        <button
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}>
          {mobileMenu ? (
            <Icon icon='akar-icons:cross' />
          ) : (
            <Icon icon='uim:bars' />
          )}
        </button>
      </div>
    </Wrapper>
  );
}

export default Navbar;
