import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-24 sm:py-32">
      <p className="text-sm font-medium text-muted-foreground">
        {siteConfig.location}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
        {siteConfig.title} — {siteConfig.tagline}
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <a href="#contact" className={buttonVariants({ size: "lg" })}>
          Get in touch
        </a>
        <a
          href="#experience"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          View experience
        </a>
      </div>
    </section>
  );
}
