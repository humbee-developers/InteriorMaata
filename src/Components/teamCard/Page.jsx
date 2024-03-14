import i0 from "@/images/teamCard1.png";
import i1 from "@/images/team2.png";
import i2 from "@/images/teamCard3.png";
import i3 from "@/images/teamcard4.png";
import i4 from "@/images/teamcard5.png";
import "./teamCard.css";
import "./teamCard2.css";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
const Page = () => {
  const cards = gsap.utils.toArray(".c-project");

  cards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: () => `top bottom-=100`,
        end: () => `top top+=40`,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
      },
      ease: "none",
      scale: () => 1 - (cards.length - index) * 0.025,
    });

    // ScrollTrigger.create({
    //   trigger: card,
    //   start: "top top",
    //   pin: false,
    //   pinSpacing: false,
    //   markers: false,
    //   id: "pin",
    //   end: "max",
    //   invalidateOnRefresh: true,
    // });
  });
  return (
    <div>
      <section id="projects" className="c-section cc-projects">
        <div className="c-container">
          <div className="c-projects-layout">
            <div
              data-w-id="8ecb513b-e731-cc62-ada9-78b5e5d0a8c5"
              className="c-projects-wrapper"
            >
              <div className="c-project cc-1">
                <a
                  href=""
                  target="_blank"
                  className="c-project_link w-inline-block"
                >
                  <Image
                    src={i0}
                    // width="900"
                    alt="image"
                    className="c-image-contain"
                  />
                  <div className="c-project_details">
                   
                  </div>
                </a>
              </div>
              <div className="c-project cc-2">
                <a
                  href=""
                  target="_blank"
                  className="c-project_link w-inline-block"
                >
                  <Image
                    src={i1}
                    // width="900"
                    alt="image"
                    className="c-image-contain"
                  />
                  <div className="c-project_details">
                    
                  </div>
                </a>
              </div>
              <div className="c-project cc-3">
                <a
                  href=""
                  target="_blank"
                  className="c-project_link w-inline-block"
                >
                  <Image
                    src={i2}
                    // width="900"
                    alt="image"
                    className="c-image-contain"
                  />
                  <div className="c-project_details">
                
                  </div>
                </a>
              </div>
              <div className="c-project cc-4">
                <a
                  href=""
                  target="_blank"
                  className="c-project_link w-inline-block"
                >
                  <Image
                    src={i3}
                    // width="900"
                    alt=""
                    className="c-image-contain"
                  />
                  <div className="c-project_details">
                    <div className="c-text-2 cc-bold">View Case Study</div>
                  </div>
                </a>
              </div>
              <div className="c-project cc-5">
                <a
                  href=""
                  target="_blank"
                  className="c-project_link w-inline-block"
                >
                  <Image
                    src={i4}
                    // width="900"
                    alt=""
                    className="c-image-contain"
                  />
                  <div className="c-project_details">
                    <div className="c-text-2 cc-bold">View Case Study</div>
                  </div>
                </a>
              </div>  
              {/* <div no-pointer="1" className="c-project cc-invisible"></div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
