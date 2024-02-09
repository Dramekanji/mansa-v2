import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Head from "next/head";
import Image from "next/image";
import Custom404 from "./Custom404";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mansa Nzinga Productions</title>
        <meta name="description" content="Powered by kanjī."></meta>
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <Hero
        heading="Mansa Nzinga Productions"
        message={
          <>
            Dedicated to authentic storytelling across film, television, and
            digital platforms.
            <br />
            Unveiling African stories where experiences meet cinema, and culture
            finds a voice.
          </>
        }
      />

      <Instagram />
    </div>
  );
}
