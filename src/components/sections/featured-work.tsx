import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/lib/projects-data";

export function FeaturedWork() {
  if (caseStudies.length === 0) return null;

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Featured work
        </h2>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all projects →
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {caseStudies.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Link
        href="/projects"
        className={buttonVariants({ variant: "outline", className: "mt-6" })}
      >
        View all projects
      </Link>
    </section>
  );
}
