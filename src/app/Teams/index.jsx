"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import TeamsPage from "@/Components/TPage/page";
import Comp from "@/Components/comp/page"
const Page1 = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
      <Stairs>
        <TeamsPage />
        <Comp/>
      </Stairs>
  );
};

export default Page1;
