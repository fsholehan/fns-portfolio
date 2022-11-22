import Title from "../Title";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="py-10">
      <Title title="Awakening Project" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
