import Image from "next/image";
import pic01 from "../public/images/site/Melody.jpg";
import pic02 from "../public/images/site/WaiKai.jpg";
import pic03 from "../public/images/site/WaikikiYachtClub.jpg";
import pic04 from "../public/images/site/Studio909.jpg";
import pic05 from "../public/images/site/Growlers.jpg";
import pic06 from "../public/images/site/Elks.jpg";
import Button from "../components/button";

function UpcomingShows() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Upcoming Shows
        </h1>
        <div className="columns-1 justify-around pt-5 pb-10">
          <div className="text-center pt-8">
            <Image src={pic01} alt="Jeannette Trevias gig" />
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.gofundme.com/f/fundraiser-for-melody-cabrera-luna"
          >
            <Button
              color="blue"
              isAnimated={true}
              className={`w-full shadow-2xl p-4 mt-2 mb-12 hover:shadow-3xl hover:scale-105 hover:rotate-1 hover:translate-x-1 hover:translate-y-1 hover:z-50`}
            >
              <div className="relative">
                <div className="text-3xl font-bold mb-1 hover:text-[#fff000] hover:border-gray-900">
                  Melody’s GoFundMe
                </div>
              </div>
            </Button>
          </a>
          <div className="text-center pt-8">
            <Image src={pic02} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic03} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic04} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-8">
            <Image src={pic05} alt="Jeannette Trevias gig" />
          </div>
          <div className="text-center pt-5">
            <Image src={pic06} alt="Jeannette Trevias gig" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingShows;
