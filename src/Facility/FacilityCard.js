import React from "react";
import "./FacilityCard.css";

const FacilityCard = ({imgLink, service, description}) => {

    

    return (
        <div>
            <div className="facility-card">
                <img src="/steering.png" />
                <span>{service}</span>
                <p>{description}</p>
            </div>
        </div>


    );
}

export default FacilityCard ;