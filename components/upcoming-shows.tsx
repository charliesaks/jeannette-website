import Image from "next/image";
import pic04 from "../public/images/site/Beerworks.jpg";
import pic05 from "../public/images/site/Puena.jpg";
import pic06 from "../public/images/site/Longboards.jpg";
import pic07 from "../public/images/site/Hilton.jpg";

function UpcomingShows() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Upcoming Shows
        </h1>
        <div className="columns-1 justify-around pt-5 pb-10">
          <div className="text-center pt-8">
            <Image src={pic04} alt="Jeannette Trevias at Honolulu Beerworks" />
          </div>
          {/* <div className="text-center pt-8">
            <Image src={pic05} alt="Jeannette Trevias at the Puena Cafe" />
          </div> */}
          <div className="text-center pt-5">
            <Image
              src={pic06}
              alt="Jeannette Trevias at the Ko'olina Beach Club Longboards"
            />
          </div>
          {/* <div className="text-center pt-8">
            <Image
              src={pic07}
              alt="Jeannette Trevias at the Hilton Hawaiian Village"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default UpcomingShows;
