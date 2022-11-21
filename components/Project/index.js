import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="py-10">
      <h1 className="text-xl md:text3xl font-bold mb-4">Awakening Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
