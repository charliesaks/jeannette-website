import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero/hero";
import Music from "../components/music";
import PastConcerts from "../components/past-concerts";
import Quotes from "../components/quotes";
import Schedule from "../components/schedule";
import Services from "../components/services";
import UpcomingShows from "../components/upcoming-shows";
import Videos from "../components/videos";
import WeeklyGigs from "../components/weekly-gigs";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Jeannette Trevias</title>
        <meta name="description" content="Musician Jeannette Trevias Website" />
      </Head>
      <Hero />
      <Schedule />
      <WeeklyGigs />
      {/* <UpcomingShows /> */}
      <PastConcerts />
      <Services />
      <Videos />
      <Music />
      <Quotes />
    </div>
  );
};

export default Home;
