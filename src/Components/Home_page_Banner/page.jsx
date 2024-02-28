import React from "react";
import Image from "next/image";
import HomePageBanner from "@/images/Home_page_banner.png";
import styles from "@/Components/Home_page_Banner/Banner.module.css";
const Page = () => (
  <>
    <div className={styles.Contact_Us_outer}>
      <Image
        src={HomePageBanner}
        alt="none"
        className={styles.Contact_Us_img}
      />
      <div className={styles.Contact_us_overlay}>
        <p className={styles.Contact_us_overlay_text}>
          Transforming Spaces, Inspiring Lives
        </p>
      </div>
    </div>
  </>
);

export default Page;
