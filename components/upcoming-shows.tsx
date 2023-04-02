import Image from "next/image";
import elksPic from "../public/images/site/Elks April 7.png";
import hiltonPic from "../public/images/site/Hilton Hawaiian Village April 21.png";
import rooftopPic from "../public/images/site/Rooftop April 23.jpeg";

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
              src={hiltonPic}
              alt="Jeannette Trevias at the Hilton Hawaiian Village"
            />
          </div>
          <div className="text-center pt-8">
            <Image src={rooftopPic} alt="Jeannette Trevias at the Rooftop" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingShows;
