import Image from "next/image";

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
              src="/images/site/Koolina-Longboards.jpg"
              alt="Jeannette Trevias at the Ko'olina Beach Club Longboards"
              width={300}
              height={250}
              className="w-full aspect-auto"
            />
          </div>
          <div className="text-center pt-5">
            <Image
              src="/images/site/Music-Lounge.jpg"
              alt="Jeannette Trevias at the Music Lounge"
              width={300}
              height={300}
              className="w-full aspect-auto"
            />
          </div>
          <div className="text-center pt-5">
            <Image
              src="/images/site/Veranda.jpg"
              alt="Jeannette Trevias at the Veranda"
              width={300}
              height={200}
              className="w-full aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklyGigs;
