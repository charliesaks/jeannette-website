import Image from "next/image";
import rockAHulaPic from "../public/images/site/Rock-a-Hula.jpg";
import starOfHonoluluPic from "../public/images/site/StarOfHonolulu.jpg";
import verandaPic from "../public/images/site/Veranda.jpg";

function WeeklyGigs() {
  return (
    <section className="bg-gray-100">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Weekly Gigs
        </h1>
        <div className="columns-1 justify-around pb-10">
          {/* <div className="text-center pt-8">
            <Image src={rockAHulaPic} alt="Jeannette Trevias at Rock-a-Hula" />
          </div> */}
          <div className="text-center pt-8">
            <Image
              src={starOfHonoluluPic}
              alt="Jeannette Trevias at Star of Honolulu"
            />
          </div>
          <div className="text-center pt-8">
            <Image src={verandaPic} alt="Jeannette Trevias at the Veranda" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklyGigs;
