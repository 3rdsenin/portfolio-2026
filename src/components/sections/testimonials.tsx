import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        What people say
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.quote}>
            <CardContent className="flex flex-col gap-4 pt-6">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="text-sm">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
