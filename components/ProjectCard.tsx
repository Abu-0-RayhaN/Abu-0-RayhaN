import Image from "next/image";
interface Props {
  title: string;
  link: string;
  img: string;
  github:string;
  description:string;
}

const ProjectCard = ({ title, link, img, github,description }: Props) => {
  return (
        <a href={link} target="_blank">
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[80%] transition-transform duration-[3s]"
          width={350}
          height={350}
          src={img}
          alt="Amazonclone"
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          <span className="underline">{title}</span> &nbsp;|&nbsp;
          <a href={github} className="underline" target="_blank">Project Details</a>
          <p>{description}</p>
        </p>
      </div>
    </a>
      );
};

export default ProjectCard;