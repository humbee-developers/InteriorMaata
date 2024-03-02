"use client"
import React , {useEffect} from 'react'
import Stairs from "@/Animations/Stairs"
import HowWeWorkHeader from "@/Components/HowWeWorkHeader/page"
import HowWeWorkTimeline from "@/Components/HowWeWorkTimeline/page"
import HowWeWorkText from "@/Components/HowWeWorkText/page"
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
          <HowWeWorkHeader/>
          <HowWeWorkTimeline/>
          <HowWeWorkText/>
      </Stairs>
    </div>
  )
}

export default Page