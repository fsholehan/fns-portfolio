import Title from "../Title";
import ProjectCard from "./ProjectCard";
import data from "../../service/data.json";

export default function Project() {
  return (
    <div id="data-project" className="py-10">
      <Title title="Awakening Project" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((info, i) => (
          <ProjectCard
            key={i}
            title={info.title}
            description={info.description}
            image={info.image}
            stacks={info.tech}
            link={info.link}
            github={info.github}
          />
        ))}
      </div>
    </div>
  );
}
