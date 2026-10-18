import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/site-data";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Certifications
      </h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <Badge key={cert} variant="secondary">
            {cert}
          </Badge>
        ))}
      </div>
    </section>
  );
}
