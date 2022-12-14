import Image from "next/image";

function Schedule() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-24 text-2xl md:text-5xl text-center text-gray-500 ">
          Schedule
        </h1>
        <div className="pt-5 pb-10">
          <Image
            src="/images/site/Schedule-2023-01.jpg"
            alt="Jeannette Trevias Schedule January 2023"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default Schedule;
