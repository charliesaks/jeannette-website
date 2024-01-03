import Image from "next/image";
import pic01 from "../public/images/site/MauiBrewingCompany.jpg";
import pic02 from "../public/images/site/WaikikiYachtClub.jpg";
import pic03 from "../public/images/site/Herringbone.jpg";
import pic04 from "../public/images/site/Hilton.jpg";
// import pic05 from "../public/images/site/Herringbone.jpg";
// import pic06 from "../public/images/site/HonoluluBeerWorks.png";
// import pic07 from "../public/images/site/Elks.jpg";
// import pic08 from "../public/images/site/InternationalMarketplace.jpg";

function UpcomingShows() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Upcoming Shows
        </h1>
        <div className="columns-1 justify-around pt-5 pb-10">
          <div className="text-center pt-8">
            <Image src={pic02} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic03} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic01} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic04} alt="Jeannette Trevias gig" />
          </div>
          {/* <div className="text-center pt-8">
            <Image src={pic05} alt="Jeannette Trevias gig" />
          </div> */}
          {/* <div className="text-center pt-5">
            <Image src={pic06} alt="Jeannette Trevias gig" />
          </div> */}
          {/* <div className="text-center pt-8">
            <Image src={pic07} alt="Jeannette Trevias gig" />
          </div> */}
          {/* <div className="text-center pt-8">
            <Image src={pic08} alt="Jeannette Trevias gig" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default UpcomingShows;
