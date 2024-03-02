"use client";
import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import facebook_logo from "@/svgs/facebook.svg";
import Instagram_logo from "@/svgs/instagram.svg";
import youtube_logo from "@/svgs/youtube.svg";
import whatsapp_logo from "@/svgs/whatsapp.svg";
import linkedin_logo from "@/svgs/linkedin.svg";
import ScrollToTop from "react-scroll-to-top";
import styles from "@/Common/Footer/Footer.module.css";
import "./Scroll_To_Top.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.Footer_Section}>
        <div className={styles.Footer_Content}>
          <div>
            <p className={styles.phone_no}>+917404040286</p>
            <p className={styles.footer_address}>
              Karamdham Complex
              <br /> Near Akota Atithi Gruh,
              <br /> Akota, Vadodara
            </p>
          </div>
          <div className={styles.footer_Second}>
            <ul className={styles.footerUl}>
              <li className={styles.footer_home}>
                <Link href="/Home">Home</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li className={styles.footer_home}>
                <Link href="/Consultancy">Online Consultancy</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="/Projects">Projects</Link>
              </li>
            </ul>
            <ul className={styles.footerUl}>
              <li className={styles.footer_home}>
                <Link href="/Team">Team</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="/HowWeWork">How we work</Link>
              </li>
              <li className={styles.footer_home}>
                <Link href="/Services">Services</Link>
              </li>
              <li className={styles.footer_Search}>
                <Link href="/ContactUs">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          <div>
            <p>
              Copyright &copy; 2024 Interiormaata, All Right Reserved. Designed
              & Developed by H/dS.
            </p>
          </div>
          <div className={styles.footer_social_media}>
            <div className={styles.footer_Facebook}>
              <Link
                href="https://www.facebook.com/interiormaata"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={facebook_logo}
                  alt="none"
                />
              </Link>
            </div>
            <div className={styles.footer_insta}>
              <Link
                href="https://www.instagram.com/interiormaata/"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={Instagram_logo}
                  alt="none"
                />{" "}
              </Link>
            </div>
            <div className={styles.footer_youtube}>
              <Link href="" target="_blank">
                <Image
                  className={styles.footer_icons}
                  src={whatsapp_logo}
                  alt="none"
                />
              </Link>
            </div>
            <div className={styles.footer_whatsapp}>
              <Link
                href="https://www.youtube.com/c/interiormaata"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={youtube_logo}
                  alt="none"
                />
              </Link>
            </div>
            <div className={styles.footer_linkedin}>
              <Link
                href="https://www.linkedin.com/in/ananya-bhattacharjee-3a5383135/"
                target="_blank"
              >
                <Image
                  className={styles.footer_icons}
                  src={linkedin_logo}
                  alt="none"
                />
              </Link>
            </div>
          </div>
        </div>

        <p className={styles.footer_last_Section}>interiormaata</p>
      </div>
      <div>
        <ScrollToTop smooth color="black" />
      </div>
    </div>
  );
};
export default Footer;
