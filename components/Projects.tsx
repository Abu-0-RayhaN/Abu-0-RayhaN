import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import cyberBlog from "../public/img/projects/hoobank.png";
import noorShop from "../public/img/projects/nike-store.png";
import srs from "../public/img/projects/srs.png";
import newsportal from "../public/img/projects/news-portal.png";
import blog from "../public/img/projects/blog.png";
import fiber from "../public/img/projects/fiber.png";
import agency from "../public/img/projects/agency.png";
import hunter from "../public/img/projects/hunter.png";
import fleetblox from "../public/img/projects/fleetblox.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={fleetblox.src}
          title="Fleetblox"
          link="https://www.fleetblox.com/"
          github="https://www.fleetblox.com/"
          tech="HTML, CSS3, React, NodeJs, PostgreSql, JavaScript"
          description="Contributed to the development of a fleet management system, collaborating with a team to implement features and optimize performance. Focused on enhancing user experience through intuitive design."
        />
        <ProjectCard
          img={hunter.src}
          title="Hunter X Platform"
          link="https://hunterx.pythonanywhere.com/"
          github="https://hunterx.pythonanywhere.com/"
          tech="HTML, CSS3, Bootstrap5, Django, ORM, PostgreSql, JavaScript"
          description="Implemented user authentication and integrated the PostgreSQL database for a seamless user experience. Worked on improving the platform's scalability and performance."
        />
        <ProjectCard
          img={fiber.src}
          title="FiberNook"
          link="https://fibernook.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/FiberNook"
          tech="React, Tailwindcss, Material UI, CSS3, Redux, Django Rest Framework, Django, Sqlite3"
          description="Developed key components and integrated Redux for state management in a full-stack e-commerce platform. Ensured responsive design for optimal mobile and desktop experiences."
        />
        <ProjectCard
          img={noorShop.src}
          title="Nike Clone"
          link="https://shop-nike1.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/Nike-Store"
          tech="Reactjs, Tailwindcss, Javascript, React Router Dom"
          description="Focused on building the product showcase and enhancing the user interface with Tailwind CSS. Collaborated with designers to create a visually appealing layout."
        />
        <ProjectCard
          img={srs.src}
          title="SRS Global Logistics"
          link="https://srsgloballogistics.com/"
          github="https://srsgloballogistic.netlify.app/"
          tech="Reactjs, Tailwindcss, TypeScript, react-intersection-observer"
          description="Implemented smooth scrolling animations and optimized the website for better user engagement using TypeScript. Conducted user testing to refine the interface."
        />
        <ProjectCard
          img={blog.src}
          title="Django Blog"
          link="https://rkrayhan.pythonanywhere.com/"
          github="https://github.com/Abu-0-RayhaN/Django-blog-project"
          tech="Html, CSS3, Bootstrap5, Django, ORM, Sqlite"
          description="Developed user authentication features and designed the blog layout using Bootstrap. Focused on SEO optimization to increase visibility."
        />
        <ProjectCard
          img={agency.src}
          title="Michael Scott"
          link="https://abu-0-rayhan.github.io/Michael_Scott_Digital_Company/"
          github="https://github.com/Abu-0-RayhaN/Michael_Scott_Digital_Company"
          tech="Tailwindcss, HTML, CSS3, Vite"
          description="Created a responsive landing page using Vite and Tailwind CSS, focusing on user experience. Implemented best practices for performance optimization."
        />
        <ProjectCard
          img={newsportal.src}
          title="News24 Portal"
          link="https://news-24-portal.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/News-Portal"
          tech="Reactjs, Tailwindcss, Javascript, React Router Dom"
          description="Implemented article navigation and enhanced the user interface for better readability. Worked on integrating real-time news updates."
        />
        <ProjectCard
          img={cyberBlog.src}
          title="HooBank"
          link="https://curious-pika-ec3e13.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/Application-0.0001"
          tech="Reactjs, Javascript, Tailwindcss, CSS3, Html, Vite"
          description="Designed the modern banking application interface and implemented responsive design principles. Focused on security features to protect user data."
        />
      </div>
    </div>
  );
};

export default Projects;
