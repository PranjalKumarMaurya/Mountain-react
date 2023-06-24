import React from "react";
import HIST from "./section-2.png";
import IMG from "./carousel1.png";
import IMG2 from "./carousel2.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/slide";
import "./History.scss";

export default function History() {
  return (
    <section
      className="history"
      style={{
        backgroundImage: `url(${HIST})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="history-wrapper">
        <div className="history-content">
          <div className="history-info">
            <span className="number">01.</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              neque quisquam voluptate nulla, mollitia dicta a tenetur
              doloremque repudiandae soluta facilis. Dolor placeat quam
              repellendus.
            </p>
          </div>
        </div>
        <div className="history-swiper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={IMG} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
