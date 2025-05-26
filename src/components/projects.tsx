import projects from "../data/projects";
import ProjectCard from "./project-card";

function Projects() {
  return (
    <section id="projects" className="flex flex-col min-h-[90vh] p-5 justify-center mx-auto">
      <h1 className="text-xl sm:text-4xl font-bold mb-15 text-center">Projects</h1>
      <div
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 xl:grid-cols-3"
      >
        { projects.map((project, index) => <ProjectCard key={index} project={project} />)}
      </div>
    </section>
  );
}

export default Projects;
