import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";
// import Primera from "../public/videos/primera.mp4";

interface HTMLIFrameElement extends HTMLElement {
  align: string;
  allowFullscreen: boolean;
  allowPaymentRequest: boolean;
  border: string;
  readonly contentDocument: Document;
  readonly contentWindow: Window;
  frameBorder: string;
  frameSpacing: any;
}

export default function Home() {
  return (
    <div className="container">
      <Seo />
      <NavBar />
      <main className={styles.main}>
        <div className="videoBox">
          <iframe
            className="videoMain"
            src="/videos/primera.mp4"
            title="video player"
            frameBorder="0"
            allowFullScreen={true}
            width="400"
            height="225"
          ></iframe>
        </div>

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
        .videoBox {
          position: relative;
          padding-top: 30px;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
        .videoMain {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
