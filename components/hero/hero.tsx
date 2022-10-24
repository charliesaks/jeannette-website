import Image from "next/image";

function Hero() {
  return (
    <section className="bg-violet-400">
      <h1 className="text-4xl md:text-7xl text-center text-white">
        Jeannette Casuga Trevias
      </h1>
      <div className="pt-10">
        <Image
          src="/images/site/home-jumbotron.jpg"
          alt="Jeannette Trevias on location"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Hero;
