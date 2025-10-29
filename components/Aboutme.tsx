import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<SiInformatica />} />
      <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className=" pr-2 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-xl mb-3">Frontend Developer</h3>
        <p className="font-medium text-blue-600">FleetBlox</p>
        <p className="text-gray-300 mb-2">Toronto-Ontario, Canada (Remote)</p>
        <p className="text-gray-300 mb-3">March, 2024 - July, 2024</p>
        <p className="text-gray-200 mb-3">
        At After20solution, I contributed as a Frontend Developer, specializing in catalog management 
        and front-end design. My role involved creating and modifying product catalogs to ensure 
        a smooth user experience. I prioritized responsive design and usability for both staff 
        and clients, leveraging technologies like React and TypeScript to enhance interaction 
        and visualization.
        </p>
        <div className="text-sm text-gray-300">
        Tech Stack: React, TypeScript, Ant Design, Redux, Tailwind
        </div>
      </div>

      <div className=" pr-2 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-xl mb-3">Full Stack Developer</h3>
        <p className="font-medium text-blue-600">Fiverr/Freelance</p>
        <p className="text-gray-300 mb-2">Budapest, Hungary (Remote)</p>
        <p className="text-gray-300 mb-2">January, 2024 - October, 2025</p>
        <p className="text-gray-200 mb-3">
        As a Freelance Full-stack Developer, I designed and developed an integrated web platform 
        for course purchases and job applications. Using Django and ReactJS, I built a secure 
        admin panel, intuitive dashboard, and scalable architecture, ensuring seamless user 
        experiences and reliable API integration.
        </p>
        <div className="text-sm text-gray-300">
        Tech Stack: React, Django, DRF, Redux, JavaScript, Python, Tailwind
        </div>
      </div>
      </div>
    </div>
  );
};

export default Aboutme;
