import {React,useState} from "react";
import {Button,Modal} from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './CardStyles.css';

export default function Card(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleClose = () => {
        setIsModalOpen(false);
    };
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images1 = props.images;
    // const images2 = props.images;
    return (
        <div className="card">
                <img src={props.coverImg} alt="cover" />
                <div className="card-content">
                    <h3>{props.title}</h3>
                    <p><i class="fa-solid fa-location-dot"></i>{props.address}</p>
                    <Button type="primary" onClick={showModal}>
                        Know More
                    </Button>
                </div>
                <Modal
                    visible={isModalOpen}
                    footer={null} // Removing the default footer buttons
                    onCancel={handleClose} // Handling close event
                    width={1300}
                    // height={800}
                >
                  <Swiper
                        style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {images1 && images1.map((image, index) => (
                        <SwiperSlide key={index} className="swiper_slide">
                            <img src={image} alt="cover"/>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation,]}
                        className="mySwiper"
                    >
                        {images2 && images2.map((image, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <img src={image} alt="cover"/>
                        </SwiperSlide>
                        ))}
                    </Swiper>  */}
                    
                    <div>
                        <h2>{props.title}</h2>
                        <h4>{props.address}</h4>
                        <p>{props.description}</p>
                    </div>
                    <Button type="primary" onClick={handleClose}>Close</Button>
                </Modal>
            </div>
    )
}
