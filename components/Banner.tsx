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
          Frontend Developer | Django Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
         As a highly motivated and passionate web developer, I possess a keen interest in mastering the realms of JavaScript
          and Python. My aspiration is to contribute to the software industry by leveraging cutting-edge web technologies.
           Eager to collaborate with diverse local and multinational software/IT agencies in Bangladesh, I aim to embark
            on a journey of continuous growth, shouldering increasing responsibilities.
             My commitment is to thrive in a dynamic environment, pushing the boundaries of my skills and knowledge.. 
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
