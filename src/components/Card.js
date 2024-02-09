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
    return (
        <Row>
            <Col className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
                <img src={props.coverImg} alt="cover" width="100px" height="100px"/>
                <h3>{props.title}</h3>
                <p>{props.address}</p>
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
                    {props.images && props.images.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
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
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {props.images && props.images.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <img src={image} alt="cover"/>
                    </SwiperSlide>
                    ))}
                </Swiper> */}
                <div>
                    <h2>{props.title}</h2>
                    <h4>{props.address}</h4>
                    <p>{props.description}</p>
                </div>
                <Button type="primary" onClick={handleClose}>Close</Button>
            </Modal>
            </Col>
        </Row>
        
    )
}