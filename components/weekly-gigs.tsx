import Image from "next/image";
import pic01 from "../public/images/site/Longboards.jpg";
import pic02 from "../public/images/site/StarOfHonolulu.jpg";
import pic03 from "../public/images/site/Herringbone.jpg";

function WeeklyGigs() {
  return (
    <section className="bg-gray-100">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Weekly Gigs
        </h1>
        <div className="columns-1 justify-around pb-10">
          <div className="text-center pt-8">
            <Image src={pic01} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic02} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic03} alt="Jeannette Trevias gig" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklyGigs;
