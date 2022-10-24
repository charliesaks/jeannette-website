import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Quotation(props: any) {
  const { author, quote, imageName, itemNum, isFirstElement = false } = props;
  return (
    <div className="pt-16">
      <div className="text-2xl sm:text-3xl font-semibold text-violet-700">
        <h4>{quote}</h4>
      </div>
      <figure className="md:flex rounded-xl p-8">
        <div className="ml-auto">
          <Image
            className="rounded-full"
            src={`/images/site/${imageName}`}
            alt={`${author} quote`}
            width={60}
            height={60}
          />
        </div>
        <div className="ml-2 md:ml-10">
          <cite>
            <h5>
              {author === "Charlie Sakamaki" ? (
                <a href="https://www.charliesakamaki.com" target="_blank">
                  {author}
                </a>
              ) : (
                author
              )}
            </h5>
          </cite>
        </div>
      </figure>
    </div>
  );
}

function Quotes() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false}>
          <Quotation
            author="Carol Tamura"
            quote="Chicken skin!!! You sing and perform so beautifully!!! ❤️"
            imageName="Carol-Tamura-face.jpg"
            itemNum="0"
            isFirstElement
          />
          <Quotation
            author="Robin Kimura"
            quote="Jeannette Casuga Trevias you are the awesome one!"
            imageName="Robin-Kimura-face.jpg"
            itemNum="1"
          />
          <Quotation
            author="John Loo"
            quote="Jeannette what a great night at GB. You had all the Big Guns with you… you Sounded Awhsome!! It was my pleasure hope you had an easy time with the keyboard…"
            imageName="John-Loo-face.jpg"
            itemNum="2"
          />
          <Quotation
            author="Charlie Sakamaki"
            quote="Jeannette Trevias is one of the most amazing musicians I have ever met!"
            imageName="Charlie-Sakamaki-face.jpg"
            itemNum="3"
          />
        </Carousel>
      </div>
    </section>
  );
}

export default Quotes;
