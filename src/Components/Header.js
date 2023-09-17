import React from "react";
import "./Header.css";
import {CiLocationOn} from 'react-icons/ci';
import {FiPhoneCall} from 'react-icons/fi';
import {IoIosMail} from 'react-icons/io';
import {GoClock} from 'react-icons/go';
import {BiLogoFacebook} from 'react-icons/bi';
import {TiSocialTwitter} from 'react-icons/ti';
import {FaInstagram} from 'react-icons/fa';


const Header = () => {

    return (
        <div className="header">
           
                <ul>
                    <li><a><CiLocationOn/></a>     Broadmeadows,Vc</li>
                    <li><a><FiPhoneCall /></a>     045 145 6666</li>
                    <li><a><IoIosMail /></a>       rv547754@gmail.com</li>
                    <li><a><GoClock/> </a>         8:00 AM TO 7:00 PM / 7 Days</li>   
                    <li><a><BiLogoFacebook /></a> <a><TiSocialTwitter /></a> <a><FaInstagram/></a></li>              


                </ul>
            
        </div>

    );
}

export default Header;