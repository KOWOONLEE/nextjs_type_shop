import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo />
      <NavBar />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
