import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailTemplate from "@/components/project/ProjectDetailTemplate";
import VideoWorkDetail from "@/components/video/VideoWorkDetail";
import NotFound from "@/pages/NotFound";
import { getProject } from "@/lib/projects";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Kobi Israel`;
      setMeta(
        "description",
        `${project.title} — ${project.intro_statement || "Project page on the Kobi Israel artist archive."}`
      );
    }
  }, [slug, project]);

  if (!project) {
    return <NotFound slug={slug} />;
  }

  return (
    <>
      <ProjectDetailTemplate
        project={{
          title: project.title,
          subtitle: project.subtitle,
          year_range: project.year_range,
          location: project.location,
          intro_statement: project.intro_statement,
          hero_image: project.hero_image,
          hero_alt: project.hero_alt,
          hasStill: project.hasStill,
          hasMoving: project.hasMoving,
          gallery_images: project.gallery_images,
          selected_works: project.selected_works,
          book: project.book,
          exhibition_history: project.exhibition_history,
          publication_history: project.publication_history,
          press_quotes: project.press_quotes,
        }}
      />

      {project.hasMoving && (
        <section className="container-ki" data-testid="project-moving-detail">
          <div className="overline mb-4">Moving · Film / Video</div>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            Moving-image work
          </h2>
          <VideoWorkDetail
            work={{
              title: project.moving.title,
              subtitle: "Moving-image work",
              year: project.moving.year_range,
              duration: project.moving.duration,
              format: project.moving.format,
              synopsis: project.moving.synopsis,
            }}
          />
        </section>
      )}
    </>
  );
}
