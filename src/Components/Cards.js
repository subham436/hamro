import React from "react";
import "./Cards.css"


const Card = () => {

  return (

    <div className="instructor-card">
      <div className="card-head">
        <img src="/testimonial2.jpg" />
        <div className=" name">Rahul Khanna <br />  12 Years Exp. </div>
      </div>
      <div className="card-details">
        Ipsum has been the industry's  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.
      </div>
      <button>BOOK NOW</button>

    </div>



  );
};

export default Card;