import React from "react";
import { ClientsInfo } from "./ClientInfo";
import "./Testimonial.css";

import {AiTwotoneStar} from 'react-icons/ai';

// Import Swiper styles first
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Pagination } from "swiper";




const Testimonial = () => {
  return (
    <>
      <section className="testimonial container section" id="testimonials">
        <h1 className="section__title">What our learners say</h1>
        <span className="section__subtitle">Choose a driving instructor you can trust</span>

        <Swiper className="testimonial__container" 
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400:{
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          992: {
            slidesPerView: 4, 
          },
          
        }}
        modules={[Pagination]}
        >
          {ClientsInfo.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide className="testimonial__card" key={id}>
                <div className="testimonial__card-head">
                  <img
                    src={image}
                    alt="testimonial__img"
                    className="testimonial__img"
                  />
                  <div className="reviews__star">
                  <h3 className="testimonial__name">{title}</h3>
                  <AiTwotoneStar style={{ fontSize: '20px', color: '#FFD800', }}/><AiTwotoneStar style={{ fontSize: '20px', color: '#FFD800' }}/><AiTwotoneStar style={{ fontSize: '20px', color: '#FFD800' }}/><AiTwotoneStar style={{ fontSize: '20px', color: '#FFD800' }}/><AiTwotoneStar style={{ fontSize: '20px', color: '#FFD800' }}/>
                  </div>
                  
                </div>
                
                <p className="testimonal__description">{description}</p>
                <span className="reviewer__name">Livia</span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;