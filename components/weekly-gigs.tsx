import Image from "next/image";

function WeeklyGigs() {
  return (
    <section className="bg-white">
      <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
        Weekly Gigs
      </h1>
      <div className="columns-2 justify-around pt-5 pb-10">
        {/* <img
          className="w-full aspect-auto"
          src="/images/site/Aulani.jpg"
          alt=""
        />
        <img
          className="w-full aspect-auto"
          src="/images/site/Veranda.jpg"
          alt=""
        /> */}
        {/* <div className="columns-1 w-full justify-center align-middle items-center"> */}
        <div className="text-center">
          <Image
            src="/images/site/Aulani.jpg"
            alt="Jeannette Trevias at Aulani"
            width={300}
            height={200}
            // layout="fill"
            className="w-full aspect-auto"
          />
        </div>
        <div className="text-center">
          <Image
            src="/images/site/Veranda.jpg"
            alt="Jeannette Trevias at the Veranda"
            width={300}
            height={200}
            // layout="fill"
            className="w-full aspect-auto"
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default WeeklyGigs;
