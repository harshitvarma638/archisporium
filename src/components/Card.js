import {React,useState} from "react";
import {Col, Row} from "react-bootstrap";
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
    const images2 = props.images;
    return (
        <Row>
            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="card">
                <img src={props.coverImg} alt="cover" style={{ width: '300px', height: '250px', objectFit: 'cover' }}/>
                <h3>{props.title}</h3>
                <p>{props.address}</p>
                <Button type="primary" onClick={showModal}>
                    Know More
                </Button>
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
            
            </Col>
        </Row>
        
    )
}
