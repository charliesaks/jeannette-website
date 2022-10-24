import Image from "next/image";

function PastConcerts() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Past Concerts
        </h1>
        <div className="pt-5 pb-10 text-center">
          <Image
            src="/images/site/BlueNote-2020-09.jpg"
            alt="Jeannette Trevias BlueNote September 2020"
            width={400}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default PastConcerts;
