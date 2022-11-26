import react from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';
import smileGirl from "../assets/img/smiling-girl.jpg";
const StyleSection = styled.div`
  width: 100%;
  height: 450px;
  margin: auto;
  padding-top: 25px;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .swiper-slide img {
    vertical-align: top;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 100%;
  }
`;
export default function SectionSlider() {
  return (
    <StyleSection>
      <section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
          <SwiperSlide>
            <p>Make my web site of my dreams</p>
            <img src={smileGirl}></img>
            <h4>Name</h4>
          </SwiperSlide>
        </Swiper>
      </section>
    </StyleSection>
  );
}
