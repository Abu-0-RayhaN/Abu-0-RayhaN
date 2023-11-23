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
        <h1 className="text-5xl font-bold text-white">Md Rayhan</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Frontend Developer | Django Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          A self-motivated and enthusiastic web developer with a deep interest in JavaScript,
           Python. To work in the Software industry with modern web technologies of different 
           local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities. 
        </p>
          <button className=" px-5 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
        <a href="/resume/md-rayhan.pdf" download>
            Resume
        </a>
            </button>
      </div>
    </div>
  );
};

export default Banner;
