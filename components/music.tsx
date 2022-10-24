import Image from "next/image";

function Music() {
  return (
    <section className="bg-[url('/images/site/pink-roses-background.jpg')]">
      <div className="container">
        <h1 className="pt-5 text-2xl md:text-5xl text-center text-gray-500 ">
          Music
        </h1>
        <div className="columns-1 md:columns-2 justify-around pt-5 pb-10">
          <div className="text-center w-full aspect-video">
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="450"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/maui-magic/1490057143"
              style={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                background: "transparent",
              }}
            ></iframe>
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="150"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/song-for-mom-and-dad/1490057143?i=1490057154"
              style={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                background: "transparent",
              }}
            ></iframe>
            <div className="pt-5 pb-10 ">
              <Image
                src="/images/site/Jeannette-Trevias-with-Asian-Blend.jpg"
                alt="Jeannette Trevias with Asian Blend"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Music;
