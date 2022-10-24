import Image from "next/image";

function UpcomingShows() {
  return (
    <section className="bg-gray-100">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Upcoming Shows
        </h1>
        <div className="columns-2 justify-around pt-5 pb-10">
          <div className="text-center">
            <Image
              src="/images/site/Aulani.jpg"
              alt="Jeannette Trevias at Aulani"
              width={300}
              height={200}
              className="w-full aspect-auto"
            />
          </div>
          <div className="text-center">
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

export default UpcomingShows;
