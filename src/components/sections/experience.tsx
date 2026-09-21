import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/site-data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Experience
      </h2>
      <div className="mt-6 flex flex-col gap-4">
        {experience.map((item) => (
          <Card key={`${item.role}-${item.organization}`}>
            <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <CardTitle className="text-base">
                {item.role} · {item.organization}
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                {item.period}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
