import Image from "next/image";

function Services() {
  return (
    <section className="bg-gray-100">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Services
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-around pt-5 pb-10">
          <div className="text-center w-full aspect-auto">
            <h3>Private Events</h3>
            <Image
              src="/images/site/Services-1.jpg"
              alt="Jeannette Trevias Private Events"
              width={300}
              height={200}
            />
            <div className="container px-8 py-4 text-violet-700 prose lg:prose-xl">
              <p>
                I specialize in Jazz and R&amp;B music, but can also do soul,
                country, blues, rock &amp; roll, pop, or dance music. I can work
                with your event’s theme to fit any occasion. I can perform solo
                or provide a duo, trio, or full band.
              </p>
            </div>
          </div>
          <div className="text-center w-full aspect-auto">
            <h3>Weddings</h3>
            <Image
              src="/images/site/Services-2.jpg"
              alt="Jeannette Trevias Weddings"
              width={300}
              height={300}
            />
            <div className="container px-8 py-4 text-violet-700 prose lg:prose-xl">
              <p>
                I’m here to make your dream wedding come true and fulfill your
                vision. I would love to be a part of your special day wherever
                it may be. From the beginning of the ceremony, until the drunk
                uncle leaves, I will customize your music to fit your needs.
              </p>
            </div>
          </div>
          <div className="text-center w-full aspect-auto">
            <h3>Piano/Vocal Lessons</h3>
            <Image
              src="/images/site/Services-3.jpg"
              alt="Jeannette Trevias Piano/Vocal Lessons"
              width={300}
              height={200}
            />
            <div className="container px-8 py-4 text-violet-700 prose lg:prose-xl">
              <p>
                I can provide private piano and/or voice lessons in the privacy
                of your own home or at my place of business.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <a href="mailto:jeannette.trevias@gmail.com?subject=Hello From JeannetteTrevias.com">
            <button className="text-center text-white font-bold rounded py-2 w-4/12 focus:outline-none bg-violet-600 border-2 border-violet-900">
              E-mail me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
