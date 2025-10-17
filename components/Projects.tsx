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
          description="HTML, CSS3, React, NodeJs, PostgreSql, JavaScript"
        />
        <ProjectCard
          img={hunter.src}
          title="Hunter X Platform"
          link="https://hunterx.pythonanywhere.com/"
          github="https://hunterx.pythonanywhere.com/"
          description="HTML, CSS3, Bootstrap5, Django, ORM, PostgreSql, JavaScript"
        />
        <ProjectCard
          img={fiber.src}
          title="FiberNook"
          link="https://fibernook.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/FiberNook"
          description="React, Tailwindcss, Material UI, CSS3, Redux, Django Rest Framework, Django, Sqlite3"
        />
          <ProjectCard
            img={noorShop.src}
            title="Nike Clone"
            link="https://shop-nike1.netlify.app/"
            github="https://github.com/Abu-0-RayhaN/Nike-Store"
            description="Reactjs, Tailwindcss, Javascript, React Router Dom"
          />
          <ProjectCard
          img={srs.src}
          title="SRS Global Logistics"
          link="https://srsgloballogistics.com/"
          github="https://srsgloballogistic.netlify.app/"
          description="Reactjs, Tailwindcss, TypeScript,react-intersection-observer"
        />
        <ProjectCard
          img={blog.src}
          title="Django Blog"
          link="https://rkrayhan.pythonanywhere.com/"
          github="https://github.com/Abu-0-RayhaN/Django-blog-project"
          description="Html, CSS3, Bootstrap5, Django, ORM, Sqlite"
        />
         <ProjectCard
          img={agency.src}
          title="Michael Scott"
          link="https://abu-0-rayhan.github.io/Michael_Scott_Digital_Company/"
          github="https://github.com/Abu-0-RayhaN/Michael_Scott_Digital_Company"
          description="Tailwindcss, HTML, CSS3, Vite"
        />
        <ProjectCard
          img={newsportal.src}
          title="News24 Portal"
          link="https://news-24-portal.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/News-Portal"
          description="Reactjs, Tailwindcss, Javascript, React Router Dom"
        />
          <ProjectCard
            img={cyberBlog.src}
            title="HooBank"
            link="https://curious-pika-ec3e13.netlify.app/"
            github="https://github.com/Abu-0-RayhaN/Application-0.0001"
            description="Reactjs, Javascript, Tailwindcss, CSS3, Html, Vite"
          />
      </div>
    </div>
  );
};

export default Projects;