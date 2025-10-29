import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">
          Available for Exciting Opportunities & Collaborations!
        </h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, enhancing your online
          presence, or helping with your website design, development, or
          freelance and part-time opportunities.
        </p>
        <a href="mailto:rayhan844625@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/Abu-0-RayhaN" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/abu-0-rayhan/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/abu.0.rayhan/"
        />
        <SocialLink
          title="YouTube"
          link="https://www.youtube.com/@WHY-RYANISM/"
        />
      </div>
    </div>
  );
};

export default Contact;
