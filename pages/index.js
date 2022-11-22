import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fuad Sholehan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto py-2 px-3 sm:px-0 relative">
        <Header />
        <Hero />
        <Project />
        <About />
      </main>
    </>
  );
}
