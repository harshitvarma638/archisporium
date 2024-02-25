import {React,useState} from "react";
import {Button,Modal} from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import './CardStyles.css';

export default function Card(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleClose = () => {
        setIsModalOpen(false);
    };
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
                        zoom={true}
                        navigation={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Zoom, Navigation, Pagination]}
                        className="mySwiper2"
                    >
                                {props.images && props.images.map((image, index) => (
                            <SwiperSlide key={index} className="card_slide">
                                <img src={image} alt="cover"/>
                            </SwiperSlide>
                            ))} 
                    </Swiper>
                    
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


