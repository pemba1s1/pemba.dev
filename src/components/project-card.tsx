import type { Project } from "../data/projects";
import { GitHubIcon, LinkIcon } from "../icons";
import SocialLink from "./social-link";
import TechCard from "./tech-card";

function ProjectCard({ project }: { project: Project }) {
  const projectImage = "/public/projects/" + project.image;
  return (
    <div
      className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50"
      key={project.title}
    >
      <div className="max-h-[300px] max-w-[600px]">
        <img alt={project.title} src={projectImage} className="h-full w-full object-cover"/>
      </div>
      <div className="p-4">
        <a className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {project.title}
        </a>
        <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
          {project.description}
        </div>
        <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
          {project.techStack.map((tech, index) => <TechCard key={index} tech={tech} />)}
        </div>
        <div className="flex items-center gap-5">
          { project.gitUrl && (
            <SocialLink
              icon={GitHubIcon}
              href={project.gitUrl}
              className="flex-none"
              iconClassName="h-8 w-8"
          />
          )}
          {project.url && (
            <SocialLink
              icon={LinkIcon}
              href={project.url}
              className="flex-none"
              iconClassName="h-8 w-8"
            />
          )}
        </div>
      </div>

    </div>
  );
}  

export default ProjectCard;