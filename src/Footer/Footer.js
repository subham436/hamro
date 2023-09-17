import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

const Footer = () => {

    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-container1">
                    <h4>Who is EzLicence?</h4>
                    <p>EzLicence takes the hassle out of choosing a driving school by helping leanrer drivers find, compare and book verified driving instructors online. <br /> <br /> The EzLicence online platform brings transparency choice and efficiency to booking and managing driving instructor and driving lessons in Sydney, Melbourne, Brisbane, Perth,
                        Adelaide, Hobart, Gold Coast, Sunshine Coast, Newcastle, Central Coast,
                        Geelong, Toowoomba, Wollongong, Cairns, Coffs Harbour, Bendigo, Canberra.</p>

                </div>
                <div className="footer-container2">
                    <div className="footer-container2-1">
                        <h4>Learners Test Online</h4>
                        <a>FREE Practice Learners Test</a>
                        <a>NSW Driver Knowledge Test</a>
                        <a>VIC Learner Permit Knowledge Test</a>
                        <a>QLD Road Rules Test</a>
                        <a>WA Road Rules Theory Test</a>
                        <a>SA Learner Theory Test</a>
                        <a>TAS Driver Knowledge Test</a>
                        <a>ACT Road Rules Knowledge Test</a>
                    </div>
                    <div className="footer-container2-2">
                        <h4>Driving Instructor by State</h4>
                        <a>NSW Driving instructors</a>
                        <a>VIC Driving instructors</a>
                        <a>QLD Driving instructors</a>
                        <a>WA Driving instructors</a>
                        <a>SA Driving instructors</a>
                        <a>TAS Driving instructors</a>
                        <a>ACT Driving instructors</a>



                    </div>

                </div>
                <div className="footer-container3">
                    <div className="footer-container3-1">
                        <h4>Resources</h4>
                        <a>Support</a>
                        <a>Blog</a>
                        <a>Contact</a>
                        <a>About</a>
                        <a>Instruct with Ezlicense</a>
                        <a>Become an instructor</a>
                    </div>
                    <div className="footer-container3-2">
                        <h4>Driving instructors by City</h4>
                        <a>Sydney Driving instructors</a>
                        <a>Melbourne Driving instructors</a>
                        <a>Brisbane Driving instructors</a>
                        <a>Perth Driving instructors</a>
                        <a>Adelaide Driving instructors</a>
                        <a>Hobart Driving instructors</a>

                    </div>

                </div>
                <div className="footer-container4">
                    <h4>Learn to Drive</h4>
                    <button>Book online</button>
                    <a>Driving Lessons</a>
                    <a>Test Packages</a>
                    <a>Gift Vouchers</a>
                    <a>Refresher Driving Lessons</a>
                    <a>International Driver's License Conversions</a>
                </div>
            </div>
            <div className="lower">
                <div className="left">
                    <a>Ez License Ptv Ltd © 2023</a>
                    <a>Privacy Policy</a>
                    <a>Terms and Conditions</a>
                </div>
                <div className="logo">
                    <BsFacebook />
                    <BsInstagram/>
                    <BsTwitter/>
                </div>
                <button className="help">
                    <AiOutlineQuestionCircle/>
                    <p>Help</p>
                </button>
            </div>
        </div>

    );
}

export default Footer;