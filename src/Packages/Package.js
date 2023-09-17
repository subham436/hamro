import React from "react";
import "./Package.css"



const Package = () => {

    return (
        <div className="package-container">   
                 
            <div className="packages"> 
                <div className="package-head">
                    <img  src="/dollar.png"/>
                    <h1>Driving Lesson Pricing & Packages</h1>
                </div>
                    
                <div className="packagecards-container">
                    <div className="package-card"> 
                        <div className="packagecard-head">
                            <span className="individual-lesson">INDIVIDUAL LESSON</span> 
                            <div className="border"></div>              
                        </div>
                        <div className="package-middle">
                            <div>60 minutes lesson = $55</div>
                            <div>90 minutes lesson = $ 80</div>
                            <div>2 hour lesson = $105</div>
                            <div>5 × 1 hour lesson = $260</div>
                            <div>10 × 1 hour lesson = $500</div>
                            <div className="border"></div> 

                        </div>
                        
                                        
                </div>
                <div className="package-card"> 
                        <div className="packagecard-head">
                            <span className="express-package">EXPRESS TEST PACKAGE</span> 
                            <div className="border"></div>              
                        </div>
                        <div className="package-middle">
                            <div>5 × 60 min</div>
                            <div>lesson and drive test</div>

                            <div className="price">$450</div>
                            <div className="border"></div> 

                        </div>
                        
                        <button>BOOK NOW</button>                    
                </div>
                <div className="package-card"> 
                        <div className="packagecard-head">
                            <span className="standard-package">STANDARD TEST PACKAGE</span> 
                            <div className="border"></div>              
                        </div>
                        <div className="package-middle">
                        <div>10 × 60 min</div>
                            <div>lesson and drive test</div>

                            <div className="price">$690</div>
                            <div className="border"></div>

                        </div>
                        
                        <button>BOOK NOW</button>                    
                </div>
                <div className="package-card"> 
                        <div className="packagecard-head">
                            <span className="drive-test">DRIVE TEST ONLY</span> 
                            <div className="border"></div>              
                        </div>
                        <div className="package-middle">
                        <div>30 min</div>
                            <div>Warm up Lesson</div>

                            <div className="price">$200</div>
                            <div className="border"></div>

                        </div>
                        
                        <button>BOOK NOW</button>                    
                </div>
                </div>
                
            </div>
            <div className="package-bottom">
                    <div className="package-bottom1">Schedule Your Driving Lessons with Us!</div>
                    <div className="package-bottom2">Book your test lesson and meet your personal driving instructor</div>
                    <div className="package-bottom3">045 145 6666</div>
                </div>
        </div>

        
    );
};

export default Package;