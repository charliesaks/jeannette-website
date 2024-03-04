import Image from "next/image";
import heroPic from "../../public/images/site/home-jumbotron.jpg";

function Hero() {
  return (
    <section className="bg-violet-400">
      <h1 className="text-4xl md:text-7xl text-center text-white">
        Jeannette Casuga Trevias
      </h1>
      <div className="pt-10 pb-10 text-center">
        <Image src={heroPic} alt="Jeannette Trevias on location" />
      </div>
    </section>
  );
}

export default Hero;
