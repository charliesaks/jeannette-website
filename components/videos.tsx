import Image from "next/image";
import { stringify } from "querystring";

function VideoClip(props: any) {
  const { token, title } = props;
  return (
    <div className="flex justify-center items-center w-full aspect-video">
      <iframe
        // width="560"
        // height="315"
        width="448"
        height="252"
        src={`https://www.youtube.com/embed/${token}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Videos() {
  return (
    <section className="bg-gray-200">
      <h1 className="pt-5 text-2xl md:text-5xl text-gray-500 text-center">
        Videos
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 pt-5 pb-10">
        <VideoClip
          token="Wh1TOwH4E-M"
          title="Thursday Night Live with Ben Vegas & Jeannette Trevias"
        />
        <VideoClip token="DuHnCmBJusQ" title="Garage Band Sessions (7/1/20)" />
        <VideoClip
          token="BLwwDikujUI"
          title="Thursday Night Live with 808 Caravan and Jeannette Trevias"
        />
        <VideoClip
          token="mY488PqiceM"
          title="Jaxx Minds Hawaii with the Little Big Band"
        />
        <VideoClip
          token="jmXEXbb99DY"
          title="At Last cover by Jeannette Trevias"
        />
        <VideoClip
          token="1bEg579U8kU"
          title="Summertime cover by Jeannette Trevias"
        />
        <VideoClip token="0IK8Iu-kbPM" title="Jammin' with Jeannette Trevias" />
        <VideoClip
          token="rn3-JXqe7hE"
          title="May Bukas Pa cover by Jeannette Trevias"
        />
      </div>

      {/*
        src="https://www.youtube.com/embed/mhkZ5-Jm3es?feature=oembed"
        title="Funkshun ft. Jeannette Trevias -  'Superstition' -  Gordon Biersch Honolulu  3-18-17"
        src="https://www.youtube.com/embed/WBWmp6sjZWg?feature=oembed"
        title="Jeannette Trevias & friends"
        src="https://www.youtube.com/embed/YHIs8hplJ7E?feature=oembed"
        title="Kona Winds ft Jeanette Trevias - 'We Are Family' - Lola's 10-14-17"
       */}
    </section>
  );
}

export default Videos;
