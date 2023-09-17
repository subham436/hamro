import React from "react";
import Ques from "./Accordion";
import './Question.css';
import Blog from "./Blog";

 const Question = () => {

    return (

        <div className="query-container">
            <div className="query-container1">
                <div className="queries">
                    <h2>Top Frequently Asked Questions</h2>
                    <Ques/>
                </div>
                <div className="query-baner">
                    <h2>Featured Blogs</h2>
                    <div className="blogs">
                        <Blog imgLink = {"/reasons.png"} text={"28 Reasons You Might NOT Pass Your Driving Test"}/>
                        <Blog imgLink= {"/good-instructor.png"} text={"11 Tips for Choosing a Good Driving Instructor"} />
                        
                    </div>
                    <button>Read More Blogs</button>
                    
                </div>
            </div>
        </div>
    );
 }

 export default Question;