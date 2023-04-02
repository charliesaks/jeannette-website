import Image from "next/image";
import schedulePic from "../public/images/site/Schedule-2023-04.jpg";

function Schedule() {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <h1 className="pt-24 text-2xl md:text-5xl text-center text-gray-500 ">
          Schedule
        </h1>
        <div className="pt-5 pb-10">
          <Image
            src={schedulePic}
            alt="Jeannette Trevias Schedule March 2023"
          />
        </div>
      </div>
    </section>
  );
}

export default Schedule;
