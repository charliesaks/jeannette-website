import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero/hero";
import PastConcerts from "../components/past-concerts";
import Schedule from "../components/schedule";
import Services from "../components/services";
import UpcomingShows from "../components/upcoming-shows";
import WeeklyGigs from "../components/weekly-gigs";

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
