import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { headLabels } from "@/constants/indexLabels";
import Hero from "@/components/Molecules/Hero/Hero";
import Features from "@/components/Molecules/Feature/Feature";
import Footer from "@/components/Molecules/Footer/Footer";
import Intro from "@/components/Molecules/Intro/Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{headLabels.title}</title>
        <meta
          name="description"
          content="Skillup - Enhance your skills with personalized quizzes and interviews."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Intro />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
