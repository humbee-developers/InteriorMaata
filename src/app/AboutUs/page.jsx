"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import AboutUs_header from "@/Components/AboutUs_header/page";
import AboutUs_threeCards from "@/Components/AboutUs_threeCards/page";
import Marquee from "@/Components/Marquee/page";
import AboutUs_Carousel2 from "@/Components/AboutUs_Carousel2/page";
// import AboutUs_Carousal from "@/Components/AboutUs_Carousal/page"
import AboutUs_flex from "@/Components/AboutUs_flex/page";
import AboutUsInfo from "@/Components/AboutUsInfo/page";
import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
import AboutUsCrafting from "@/Components/AboutUs_Crafting/page";
const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <Stairs>
      </Stairs>
    </div>
  );
};

export default page;
