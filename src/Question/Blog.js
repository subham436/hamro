import React from "react";
import './Blog.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = ({text, imgLink}) => {

    return (
        <div>
            <div className="blog-card">
                <div className="blog-container1">
                    <div className="vertical-header">
                        <span className="vertical-text">EzLicense</span>
                    </div>
                    <img src= {imgLink} />
                </div>
                <div className="blog-container2">
                    <div className="blog-text">{text}</div>
                    <MdOutlineKeyboardArrowRight style={{ fontSize: '30px', paddingTop: '9px'}}/>                
                </div>
                
                
            </div>
        </div>

    );
}

export default Blog;