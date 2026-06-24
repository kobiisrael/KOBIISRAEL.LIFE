import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailTemplate from "@/components/project/ProjectDetailTemplate";
import { STILL_PROJECTS } from "@/data/site";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = STILL_PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Kobi Israel`;
    }
    window.scrollTo(0, 0);
  }, [slug, project]);

  return (
    <ProjectDetailTemplate
      project={{
        title: project?.title,
        subtitle: project?.medium,
        year_range: project?.year_range,
        location: project?.location,
        intro_statement: project?.description,
      }}
    />
  );
}
