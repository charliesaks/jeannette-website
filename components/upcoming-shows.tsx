import Image from "next/image";
import elksPic from "../public/images/site/Elks.jpg";
import beerworksPic from "../public/images/site/Beerworks.jpg";
import rooftopPic from "../public/images/site/Rooftop.jpg";
import birthdayPic from "../public/images/site/Birthday.jpg";
import longboardsPic from "../public/images/site/Longboards.jpg";
import waikikiYachtClubPic from "../public/images/site/WaikikiYachtClub.jpg";

function UpcomingShows() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Upcoming Shows
        </h1>
        <div className="columns-1 justify-around pt-5 pb-10">
          <div className="text-center pt-5">
            <Image src={elksPic} alt="Jeannette Trevias at Elks" />
          </div>
          <div className="text-center pt-8">
            <Image
              src={birthdayPic}
              alt="Jeannette Trevias Birthday Celebration"
            />
          </div>
          <div className="text-center pt-8">
            <Image
              src={waikikiYachtClubPic}
              alt="Jeannette Trevias at the Waikiki Yacht Club"
            />
          </div>
          <div className="text-center pt-8">
            <Image src={rooftopPic} alt="Jeannette Trevias at the Rooftop" />
          </div>
          <div className="text-center pt-5">
            <Image
              src={longboardsPic}
              alt="Jeannette Trevias at the Ko'olina Beach Club Longboards"
            />
          </div>
          <div className="text-center pt-8">
            <Image
              src={beerworksPic}
              alt="Jeannette Trevias at the Honolulu Beerworks"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingShows;
