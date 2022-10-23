import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jeannette Trevias</title>
        <meta name="description" content="Musician Jeannette Trevias Website" />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
