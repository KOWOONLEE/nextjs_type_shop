import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Seo />
      <NavBar />
      <main className={styles.main}>
        <iframe
          className="videoMain"
          src="https://a01-g-naver-vod.pstatic.net/shopnseller/a/read/v2/VOD_ALPHA/shopnseller_2022_10_26_0/821b5d08-54d2-11ed-80e6-a0369ffdd624.mp4?__gda__=1669153037_efec5d3fbdc24eb75fa03ddf9a346e62"
          title="video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
        {/* <video
          playsinline
          disablepictureinpicture="true"
          controlslist="nodownload"
          x-webkit-airplay
          webkit-playsinline
          width="100%"
          height="100%"
          src="https://a01-g-naver-vod.pstatic.net/shopnseller/a/read/v2/VOD_ALPHA/shopnseller_2022_10_26_0/821b5d08-54d2-11ed-80e6-a0369ffdd624.mp4?__gda__=1669153037_efec5d3fbdc24eb75fa03ddf9a346e62"
        ></video> */}
      </main>
      <Footer />
      <style jsx>{`
        .container {
          height: 100%;
        }
        .videoMain {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
