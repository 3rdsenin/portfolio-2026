import { about } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {about.heading}
      </h2>
      <div className="mt-6 flex max-w-3xl flex-col gap-4 text-muted-foreground">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
