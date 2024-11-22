import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex justify-between gap-6">
        <div>
          <p className="font-bold text-xl">Frontend Developer</p>
          <p>
            <span className="">After20solution</span>,
            Toronto-Ontario,Canada(remote)
          </p>
          <p>March, 2024 - July, 2024.</p>
          <p> Tech- React, Typescript, Ant design, Redux, Tailwind</p>
        </div>
        <div>
          <p className="font-bold text-xl">Full Stack Developer</p>
          <p>
            <span className="">Fiverr/Freelance</span>
          </p>
          <p>January, 2024 - Present.</p>
          <p> Tech- React,Django, DRF, Redux,Js, Python, Tailwind...</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
