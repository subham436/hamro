import React from "react";
import "./Working.css";



const Working = () => {

    return (
        <div>
            
            <div className="Working-container">  
                <div className="working-container1">
                    <div className="working-content1">How Hamro Driving School works</div>
                    <div className="working-content2">Simple & flexible booking system</div>
                    <div className="img-content">
                        <img className="car-img" src="/car.png" />
                        <ol>
                            <li>Choose Your Driving Instructor.</li>
                            <li>Book Your Driving Lessons</li>
                            <li>Learn to Drive</li>
                        </ol>
                    </div>
                </div>
                <div className="working-bottom">
                    <img src="/oksheild.png" />
                    <div className="working-bottom-content">
                        <span className="working-bottom-content1">Driving lesson guarantee!</span>
                        <span className="working-bottom-content2">We will fulfill your driving lesson booking or you won’t be charged</span>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Working;