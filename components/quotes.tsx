import Image from "next/image";
import Script from "next/script";

function Quotation(props: any) {
  const { author, quote, imageName, itemNum, isFirstElement = false } = props;
  return (
    <div
      className={`${"hidden"} duration-1000 ease-in-out`}
      data-carousel-item={isFirstElement ? "active" : itemNum}
    >
      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
      <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-2xl sm:text-3xl font-semibold text-violet-700">
          <h4>{quote}</h4>
        </div>
        <figure className="md:flex rounded-xl p-8 md:m-20">
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
              <h5>{author}</h5>
            </cite>
          </div>
        </figure>
      </div>
    </div>
  );
}

function Quotes() {
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto pt-20 pb-10 ">
        <div id="quotes-carousel" className="relative" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
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
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex space-x-4 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
