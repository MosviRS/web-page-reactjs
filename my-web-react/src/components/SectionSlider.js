import react from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper";
import smileGirl from "../assets/img/smiling-girl.jpg";
const StyleSection = styled.div``;
export default function SectionSlider() {
  return (
    <StyleSection>
      <section className="About">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
        </Swiper>
      </section>
    </StyleSection>
  );
}
