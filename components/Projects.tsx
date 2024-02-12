import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazon-clone.png";
import cyberBlog from "../public/img/projects/hoobank.png";
import noorShop from "../public/img/projects/nike-store.png";
import dynamicPortfolio from "../public/img/projects/tea-house.png";
import reactBD from "../public/img/projects/service.png";
import dashboard from "../public/img/projects/usability-hub.png";
import newsportal from "../public/img/projects/news-portal.png";
import blog from "../public/img/projects/blog.png";
import fibernook from "../public/img/projects/fibernook.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={fibernook.src}
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
          img={blog.src}
          title="Django Blog"
          link="https://rkrayhan.pythonanywhere.com/"
          github="https://github.com/Abu-0-RayhaN/Django-blog-project"
          description="Html, CSS3, Bootstrap5, Django, ORM, Sqlite"
        />
        <ProjectCard
          img={newsportal.src}
          title="News24 Portal"
          link="https://news-24-portal.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/News-Portal"
          description="Reactjs, Tailwindcss, Javascript, React Router Dom"
        />
         <ProjectCard
          img={reactBD.src}
          title="Services Provider"
          link="https://abu-0-rayhan.github.io/Digital_Agency/"
          github="https://github.com/Abu-0-RayhaN/Digital_Agency"
          description="Tailwindcss, HTML, CSS3, Vite"
        />
          <ProjectCard
            img={cyberBlog.src}
            title="HooBank"
            link="https://curious-pika-ec3e13.netlify.app/"
            github="https://github.com/Abu-0-RayhaN/Application-0.0001"
            description="Reactjs, Javascript, Tailwindcss, CSS3, Html, Vite"
          />
           <ProjectCard
          img={dynamicPortfolio.src}
          title="Tea House"
          link="https://abu-0-rayhan.github.io/Tea-House/"
          github="https://github.com/Abu-0-RayhaN/Tea-House"
          description="Tailwindcss, Html, Vite"
        />
        <ProjectCard
          img={dashboard.src}
          title="Usability Hub"
          link="https://helpful-bubblegum-1cb14f.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/UsabilityHub"
          description="HTML, Raw CSS3"
        />
        <ProjectCard
          img={amazonClone.src}
          title="Amazon Clone"
          link="https://magnificent-tiramisu-934b28.netlify.app/"
          github="https://github.com/Abu-0-RayhaN/Amazon-clone"
          description="HTML, Raw CSS3"
        />
      </div>
    </div>
  );
};

export default Projects;