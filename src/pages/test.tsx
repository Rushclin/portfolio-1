import Cookies from "@/components/Cookies";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

const Test = () => {
  return (
    <>
      <Head>
        <title>RUSHCLIN TAKAM • Front-End and Mobile Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <Header />
      <Cookies />
    </>
  );
};

export default Test;
