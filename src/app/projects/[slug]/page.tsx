import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies } from "@/lib/projects-data";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← All projects
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {project.role} · {project.period}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              View live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              View code
            </a>
          )}
        </div>
      )}

      <div className="mt-10 flex flex-col gap-10">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">Problem</h2>
          <p className="mt-3 text-muted-foreground">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Approach</h2>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
            {project.approach.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className="text-foreground">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Outcome</h2>
          <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
            {project.outcome.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className="text-foreground">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.images && project.images.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold tracking-tight">
              Screenshots
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={500}
                  className="rounded-lg ring-1 ring-foreground/10"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
