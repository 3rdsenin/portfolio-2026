import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export function Services() {
  if (services.length === 0) return null;

  return (
    <section id="services" className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Services
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle className="text-base">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
