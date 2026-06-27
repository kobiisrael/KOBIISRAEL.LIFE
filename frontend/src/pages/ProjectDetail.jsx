import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProjectDetailTemplate from "@/components/project/ProjectDetailTemplate";
import VideoWorkDetail from "@/components/video/VideoWorkDetail";
import NotFound from "@/pages/NotFound";
import { getProject } from "@/lib/projects";
import {
  applyPageSeo,
  breadcrumbSchema,
  creativeWorkSchema,
  removeJsonLd,
} from "@/lib/seo";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      const path = `/projects/${slug}`;
      const description =
        project.intro_statement ||
        `${project.title} by Kobi Israel — project page in the artist archive.`;
      applyPageSeo({
        title: `${project.title} | Kobi Israel`,
        description: description.slice(0, 155),
        path,
        ogType: "article",
        image: project.hero_image || undefined,
        imageAlt:
          project.hero_alt ||
          `Image from ${project.title} by Kobi Israel, details to be confirmed.`,
        jsonLd: [
          {
            id: "project-breadcrumb",
            data: breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: project.title, path },
            ]),
          },
          {
            id: "project-creativework",
            data: creativeWorkSchema({
              name: project.title,
              description,
              path,
              year: project.year_range,
            }),
          },
        ],
      });
    } else {
      removeJsonLd("project-breadcrumb");
      removeJsonLd("project-creativework");
    }
  }, [slug, project]);

  const templateProject = useMemo(
    () =>
      project
        ? {
            slug,
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
            medium: project.medium,
            format: project.format,
            status: project.status,
            number_of_works: project.number_of_works,
            related_moving_works: project.related_moving_works,
            related_books: project.related_books,
            related_prints: project.related_prints,
            related_texts: project.related_texts,
            archive_status: project.archive_status,
            availability_status: project.availability_status,
            last_updated: project.last_updated,
          }
        : null,
    [project, slug]
  );

  const movingWork = useMemo(
    () =>
      project?.hasMoving
        ? {
            title: project.moving.title,
            subtitle: "Moving-image work",
            year: project.moving.year_range,
            duration: project.moving.duration,
            format: project.moving.format,
            synopsis: project.moving.synopsis,
            youtube_id: project.moving.youtube_id,
            youtube_url: project.moving.youtube_url,
            poster_url: project.moving.poster_url,
            poster_alt: project.moving.poster_alt,
          }
        : null,
    [project]
  );

  if (!project) {
    return <NotFound slug={slug} />;
  }

  return (
    <>
      <ProjectDetailTemplate project={templateProject} />

      {project.hasMoving && (
        <section className="container-ki" data-testid="project-moving-detail">
          <div className="overline mb-4">Moving · Film / Video</div>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            Moving-image work
          </h2>
          <VideoWorkDetail work={movingWork} />
        </section>
      )}
    </>
  );
}
