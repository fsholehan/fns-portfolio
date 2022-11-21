import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="py-10">
      <h1 className="text-xl md:text3xl font-bold">Awakening Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard />
        <ProjectCard bg="from-violet-400 to-purple-500" />
        <ProjectCard bg="from-cyan-400 to-green-500" />
      </div>
    </div>
  );
}
