import React from "react";
import "./Home.css";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Card from "../../Cards";


const Home = () => {

    return (
        <div>
            <Header/>
            <Navbar />
            <div className="instructor">  
                <h1>Choose your driving Instructor</h1>
                <div className="cards-container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> 
                </div>
            </div>
            <div className="container-bottom">
                <div className="steering box">
                    <img src="/steering.png" alt="img"/>
                    <div className="text-box" >
                        <span className="span1">EXPERIENCED</span>
                        <span>INSTRUCTOR</span>
                    </div>
                </div>
                <div className="sheild box">
                    <img src="/sheild.png" alt="img"/>
                    <div className="text-box" >
                        <span className="span1">99%</span>
                        <span>PASS RATES</span>
                    </div>
                </div>
                <div className="license box">
                    <img src="/license.png" alt="img"/>
                    <div className="text-box" >
                        <span className="span1">5000+</span>
                        <span>LICENSES ISSUED</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;