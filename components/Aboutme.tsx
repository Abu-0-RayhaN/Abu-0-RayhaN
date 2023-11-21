import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <div>
      <p>
        Hey there! 👋 I am Abu RayhaN, a seasoned developer on a coding odyssey since 2019.
        Fluent in both frontend and backend wizardry, specializing in Django and Django Rest API.
      </p>
      <p>
        Crafting impactful projects like E-commerce websites and dynamic Photo/Video sharing platforms
        showcases my technical skills and commitment to building functional solutions.
      </p>
      <p>
        In the frontend realm, I have crafted engaging user interfaces and delightful user experiences.
        Proficient in HTML, CSS, and JavaScript, I bring designs to life, creating seamless and visually appealing applications.
      </p>
      <p>
        I am on a mission to evolve into a formidable Full Stack Developer, always embracing new challenges
        and staying ahead of industry trends. Let us create something extraordinary together! 🚀
      </p>
    </div>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
