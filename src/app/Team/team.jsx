"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import TeamsPage from "@/Components/TPage/team";
const Page1 = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <Stairs>
        <TeamsPage />
      </Stairs>
    </div>
  );
};

export default Page1;
