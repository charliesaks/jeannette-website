import Image from "next/image";
import koolinaLongboardsPic from "../public/images/site/Koolina-Longboards.jpg";
import musicLoungePic from "../public/images/site/Music-Lounge.jpg";
import verandaPic from "../public/images/site/Veranda.png";
import waikikiYachtClubPic from "../public/images/site/Waikiki Yacht Club.jpeg";

function WeeklyGigs() {
  return (
    <section className="bg-gray-100">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Weekly Gigs
        </h1>
        <div className="columns-1 justify-around pb-10">
          <div className="text-center pt-5">
            <Image
              src={koolinaLongboardsPic}
              alt="Jeannette Trevias at the Ko'olina Beach Club Longboards"
            />
          </div>
          <div className="text-center pt-8">
            <Image
              src={musicLoungePic}
              alt="Jeannette Trevias at the Music Lounge"
            />
          </div>
          <div className="text-center pt-8">
            <Image src={verandaPic} alt="Jeannette Trevias at the Veranda" />
          </div>
          <div className="text-center pt-8">
            <Image
              src={waikikiYachtClubPic}
              alt="Jeannette Trevias at the Waikiki Yacht Club"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklyGigs;
