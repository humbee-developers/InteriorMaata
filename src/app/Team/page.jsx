"use client"
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import TeamsPage from '@/Components/TeamsPage/page'
// import TeamCard from '@/Components/teamCard/Page'
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
    <Stairs>
      <TeamsPage/>
      {/* <TeamCard /> */}
    </Stairs>
    </div>
  )
}

export default Page;                                        