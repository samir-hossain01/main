/** @format */

import React, { useState, useEffect } from "react";
import Wrapper from "./Footer.styled";
import { Icon } from "@iconify/react";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../images/logo.png";

function Footer() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

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
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='footerSingleItem'>
              <div className='footerLogo'>
                <img src={Logo} className='img-fluid' alt='Logo' />
              </div>
              <div className='footerLink'>
                <ul>
                  <li>
                    <NavHashLink
                      to='/#home'
                      scroll={(el) => scrollWithOffset(el)}>
                      ABOUT
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to='/#about'
                      scroll={(el) => scrollWithOffset(el)}>
                      UTILITY
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to='/#roadmap'
                      scroll={(el) => scrollWithOffset(el)}>
                      ROADMAP
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to='/#ownership'
                      scroll={(el) => scrollWithOffset(el)}>
                      FAQ
                    </NavHashLink>
                  </li>
                  <li className='nav-link-last-item'>
                    <NavHashLink
                      to='/#faq'
                      scroll={(el) => scrollWithOffset(el)}>
                      GAMES
                    </NavHashLink>
                  </li>
                  <li className='nav-link-last-itemTwo'>
                    <NavHashLink
                      to='/#faq'
                      scroll={(el) => scrollWithOffset(el)}>
                      DASHBOARD
                    </NavHashLink>
                  </li>

                  <li className='nav-button'>
                    <li>
                      <NavHashLink
                        to='/#home'
                        scroll={(el) => scrollWithOffset(el)}>
                        Connect Wallet
                      </NavHashLink>
                    </li>
                  </li>
                </ul>
              </div>

              <div className='footerLink2'>
                <div className='footerCondition'>
                  <ul>
                    <li>
                      <a href='disclaimer'>Disclaimer</a>
                    </li>
                    <li>
                      <a href='Terms and Conditions'>Terms and Conditions</a>
                    </li>
                    <li>
                      <a href='Terms and Conditions'>Join our mailling list</a>
                    </li>
                  </ul>
                </div>
                <div className='searchBar'>
                  <input
                    type='text'
                    placeholder='Search here'
                    onChange={handleChange}
                    value={searchInput}
                  />
                </div>
                <div className='footerCopy'>
                  <p>Chyptos Token Address: @Dytpos Token Address</p>
                </div>
              </div>

              <div className='footerSocialICon'>
                <a href='twiter.com'>
                  <span>
                    <Icon icon='akar-icons:twitter-fill' />
                  </span>
                </a>
                <a href='twiter.com'>
                  <span>
                    <Icon icon='akar-icons:discord-fill' />
                  </span>
                </a>
                <a href='twiter.com'>
                  <span>
                    <Icon icon='ci:mail' />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
