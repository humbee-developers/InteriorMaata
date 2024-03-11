"use client"
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "./Slider.css";
import Residential_Interior_Design from "@/images/Residential_Interior_Design.png";
import Commercial_Interior_Design from "@/images/Commercial_Interior_Design.png";
import Office_Interior_Design from "@/images/Office_Interior_Design.png";
import Services_interior_svg from "@/svgs/Services_svg.svg";
import arrow from "@/svgs/slider_arrow.svg";
const Page = () => {
  return (
    <div className="productSlider">
      <div className="wrapper">
        <Swiper
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1000}
          navigation={{
            nextEl: ".productSlider .right",
            prevEl: ".productSlider .left",
            // disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation, EffectFade]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card2">
                <Image src={Residential_Interior_Design} alt="none" className="imgg"></Image>
              </div>
              <div className="card1">
                {/* <HomePageCommonHeading heading={"Our Product"} /> */}
                <div className="card1_inner">
                  <div className="info">
                    {"POLY"}
                    <br />
                    {"CRYSTALLINE0"}
                  </div>
                  <div className="details">
                    {
                      "With the development of Technology Poly Modules efficiency has increased up to 18%, where we can make Modules up to 345 WP. Poly Modules are ideally used for Ground Mounted, Industrial, Commercial, Residential, Water Pumping system & Street Lights. Poly Modules are cost effective & easily available."
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card2">
                <Image src={Commercial_Interior_Design} alt="none" className="imgg"></Image>
              </div>
              <div className="card1">
                <div className="card1_inner">
                  <div className="info">
                    {"POLY"}
                    <br />
                    {"CRYSTALLINE1"}
                  </div>
                  <div className="details">
                    {
                      "With the development of Technology Poly Modules efficiency has increased up to 18%, where we can make Modules up to 345 WP. Poly Modules are ideally used for Ground Mounted, Industrial, Commercial, Residential, Water Pumping system & Street Lights. Poly Modules are cost effective & easily available."
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card2">
                <Image src={Office_Interior_Design} alt="none" className="imgg"></Image>
              </div>
              <div className="card1">
                <div className="card1_inner">
                  <div className="info">
                    {"POLY"}
                    <br />
                    {"CRYSTALLINE2"}
                  </div>
                  <div className="details">
                    {
                      "With the development of Technology Poly Modules efficiency has increased up to 18%, where we can make Modules up to 345 WP. Poly Modules are ideally used for Ground Mounted, Industrial, Commercial, Residential, Water Pumping system & Street Lights. Poly Modules are cost effective & easily available."
                    }
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider_btn">
            <div className="left">
              <Image src={arrow} alt="slider_arrow" />
            </div>
            <div className="right">
              <Image src={arrow} alt="slider_arrow" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Page;