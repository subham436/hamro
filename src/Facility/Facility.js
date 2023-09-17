import React from "react";
import "./Facility.css";
import FacilityCard from "./FacilityCard";

const Facility = () => {
    const serviceInfo = [
        {
            id: 1,
            img: "/steering.png",
            service : "BEST SERVICE",
            description : "We are the best in terms of services that we offer you. We ensure safety as our main priority therefore we are well equipped with professional and well trained instructors. "
        },
        {
            id:2,
            img: "/steering.png",
            service : "WE TRAIN ALL AGES",
            description : "We have driving instructors who are certified. Apart from that, they are also fit both mentally as well as physically and have many years of driving experience. Even though learning driving is expensive. we make sure to provide it at an affordable and budget friendly range."
        },
        {
            id:3,
            img:"steering.png",
            service: "24*7 AVALIBILITY",
            description : "Now is the perfect time to start your In Class, Online or Behind The Wheel Training."
        
        },
        {
            id:4,
            img:"steering.png",
            service: "CALM INSTRUCTOR",
            description: ""
            
        
        },
        {
            id:5,
            img:"steering.png",
            service: "BEST CAR",
            description : "Both the classroom driving classes as well as online sessions are available with a wide range of cars."
        
        },
        {
            id:6,
            img:"steering.png",
            service: "99% PASS RATE",
            description : "Success rate of our students is very high as compared to other driving schools in Melbourne"
                   
        }
       
        
    ]

    return (
        <div className="facility-container">
            <div className="facility-page">
                <div className="facility-page-head">
                    <h2>Why Choose Us?</h2>
                    <p>Learning is not low in cost. This has become boon for many driving schools in Melbourne that charge too much. But we never expect just money but give preference to the satisfaction of our students.</p>

                </div>
                <div className="service-container">
                {serviceInfo.map(({ id, imgLink, service, description }) => {
                    return (
                    <FacilityCard imgLink={imgLink} service={service} description={description} />
                    )

                })
                }
                </div>

            </div>
        </div>

    );
}

export default Facility;