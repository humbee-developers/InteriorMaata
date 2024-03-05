"use client"
import React , {useEffect} from 'react'
import Stairs from "@/Animations/Stairs"
import HomeBanner from "@/Components/Home_page_Banner/page"

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
        <HomeBanner />
      </Stairs>
    </div>
  )
}

export default Page