import styled from 'styled-components'
import { useRef } from 'react'

// importing xmark, bars and FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/img/sicuallow-logo-png.png'

const HeaderCon = styled.header`

    width: 100%;
    height: 80px;
    padding: 30px 10px;
    color: white;

    .logo-container {
        width: max-content;
        position: relative;
        float: right;
        right: 80px;
        margin-top: -28px;
        @media screen and (max-width: 400px) {
          position: absolute;
          right: 50%;
          left: 50%;
        }
    }

    .menu-container {
        width: max-content;
        position: relative;
        top: 10px;
        float: left;
        transition: all 0.5s;

        @media screen and (max-width: 550px) {
          margin-left: -1000px;  
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background-color: black;
          padding-top: 16rem;
        }

        @media screen and (max-width: 400px) {
          width: 70%;
        }

        li {
            display: inline-block;
            margin-right: 30px;
            
            @media screen and (max-width: 550px) {
              display: block;
              width: max-content;
              padding: 10px 15px;
            }

            a {
                text-decoration: none;
                color: white;

                @media screen and (max-width: 550px) {
                  font-size: 22pt;
                  width: 100%;
                  transistion: 0.5s all;
                }
            }
        }
    }

`
const Logo = styled.img`
    width: 120px;
    height: 120px;
`
const XmarkCon = styled.span`
    display: none;
    @media only screen and (max-width: 550px) {
        display: block;
        position: absolute;
        top: 20px;
        left: 20px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        svg {
            height: 3rem;
        }
    }
`
// defining FaBarsCon ( fa-bars container ) as a styled span
const FaBarsCon = styled.span`
    display: none;
    @media only screen and (max-width: 550px) {
        display: block;
        position: absolute;
        top: 20px;
        left: 20px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        svg {
            height: 3rem;
        }
    }
`

export default function Header() {

    const menuContainer = useRef(null)

    return (
        <HeaderCon>
        <div className="logo-container">
          <Logo src={logo} />
        </div>

        {/* 
            FaBars is the bars container;
            bars will appear when user come into site with mobile
            and it's used to open the menu.
        */}
        <FaBarsCon>
            <FontAwesomeIcon icon={faBars} onClick={() => {
                menuContainer.current.style.marginLeft = "0"
            }} />
        </FaBarsCon>

        <ul className="menu-container" ref={menuContainer}>

        {/* 
            XmarkCon is the xmark container;
            xmark will appear when user come into site with mobile
            and opened the menu. it's used to close the menu when it's open.
        */}
          <XmarkCon>
            <FontAwesomeIcon icon={faXmark} onClick={() => {
                menuContainer.current.style.marginLeft = "-1000px"
            }} />
          </XmarkCon>

          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          
        </ul>
      </HeaderCon>
    )
}