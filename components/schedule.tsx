import Image from "next/image";

function Schedule() {
  return (
    <section className="bg-gray-200">
      <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
        Gig Schedule
      </h1>
      <div className="pt-5 pb-10 ">
        <Image
          src="/images/site/Schedule-2022-10.jpg"
          alt="Jeannette Trevias Schedule October 2022"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Schedule;
