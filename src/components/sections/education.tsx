import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/site-data";

export function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Education
      </h2>
      <div className="mt-6 flex flex-col gap-4">
        {education.map((item) => (
          <Card key={`${item.degree}-${item.institution}`}>
            <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <CardTitle className="text-base">
                {item.degree} · {item.institution}
              </CardTitle>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </CardHeader>
            {item.detail && (
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
