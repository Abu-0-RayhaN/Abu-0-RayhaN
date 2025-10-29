import Image from "next/image";
interface Props {
  title: string;
  link: string;
  img: string;
  github: string;
  description: string;
  tech?: string;
}

const ProjectCard = ({
  title,
  link,
  img,
  github,
  description,
  tech,
}: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-[600px] md:h-[650px] border-[1px] border-blue-600 rounded-lg overflow-hidden group">
        <div className="w-full h-64 relative overflow-hidden">
          <Image
            className="object-cover transition-transform duration-[3000ms] group-hover:-translate-y-[50%]"
            width={500}
            height={200}
            src={img}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="px-6 py-8 bg-black h-[364px] md:h-[414px]">
          <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>

          {tech && (
            <p className="text-gray-300 text-base mb-4">
              <span className="font-semibold">Tech Stack:</span> {tech}
            </p>
          )}

          <p className="text-gray-200 text-base leading-relaxed mb-6 ">
            {description}
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              View on GitHub
            </a>
            <span className="text-sm text-gray-400">Open project →</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
