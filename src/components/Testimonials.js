import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './NewsTestimonial.css';

import { Autoplay, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination]);

export default function Testimonials() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      if (isMouseOver) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }, [swiper, isMouseOver]);

  const image = "../images/male_avatar.jpg";

  return (
    <>
        
        <div className="testimonial container">
            <h2 className="common-heading">Happy Client Works!!</h2>
        </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper swiper"
        onMouseEnter = {()=>setIsMouseOver(true)}
        onMouseLeave={()=>setIsMouseOver(false)}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiper-client-msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.</p>
            </div>
            <div className="swiper-client-data grid grid-two-col">
              <figure>
                <img src={image} alt="client-1" />
              </figure>
              <div className="client-data-details">
                <p>Harshith Varma</p>
                <p>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
