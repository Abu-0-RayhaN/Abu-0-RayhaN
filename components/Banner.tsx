import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Md RayhaN</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Web Developer | Javascript, python enthusiast
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
         As a passionate Web Developer, I have a strong focus on building modern, scalable web
          applications using technologies like React, TypeScript, Django, and REST APIs. I’ve contributed
           to real-world projects including Fleetblox, Hunter X Platform, and FiberNook, combining performance
            with user-focused design. My goal is to create impactful digital solutions while continuously
             exploring emerging trends such as SaaS, API-driven development, and AI-powered applications.
              Committed to lifelong learning, I strive to grow in dynamic environments
               and deliver high-quality, future-ready software.
        </p>
          <button className=" px-5 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
        <a href="/resume/MdRayhan.pdf" download>
            Resume
        </a>
            </button>
      </div>
    </div>
  );
};

export default Banner;
