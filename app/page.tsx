import Link from "next/link";

const services = [
  {
    title: "Eating Disorder Recovery",
    description:
      "Support for anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and disordered eating.",
  },
  {
    title: "Individual Nutrition Counseling",
    description:
      "Personalized care for adolescents and adults using a mindful, non-diet approach.",
  },
  {
    title: "Families & Groups",
    description:
      "Support for parents and caregivers, meal support, mindfulness, and current group offerings.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Hero */}
      <section className="px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Eating Disorder Nutrition Counseling
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-normal leading-[1.12] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            What does healthy mean to you?
          </h1>

          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[#687785]">
            <p>Healthy looks different for everyone.</p>

            <p>
              Too often, health becomes defined by the number on the scale,
              yesterday&apos;s workout, or the foods we believe we should or
              shouldn&apos;t eat.
            </p>

            <p>
              Nutrition counseling can help reduce stress around food and
              support a more flexible, confident, and sustainable relationship
              with eating.
            </p>

            <p>
              My approach is practical, evidence-based, and collaborative—never
              overwhelming.
            </p>

            <p className="font-medium text-[#34414E]">
              Together, we&apos;ll discover what healthy looks like—for you.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#829CB1] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#708A9F]"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
            >
              Meet Justine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-[#E4EBF0] px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            How I Can Help
          </p>

          <div className="mt-8 border-t border-[#E4EBF0]">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid gap-3 border-b border-[#E4EBF0] py-7 md:grid-cols-[0.85fr_1.15fr] md:gap-12"
              >
                <h2 className="text-xl font-normal tracking-[-0.025em] text-[#34414E]">
                  {service.title}
                </h2>

                <p className="leading-7 text-[#687785]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
          >
            View all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Meet Justine
            </p>
          </div>

          <div>
            <h2 className="max-w-2xl text-3xl font-normal leading-tight tracking-[-0.035em] text-[#34414E]">
              More than 20 years of specialized experience.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#687785]">
              Justine Roth, MS, RD, CEDS-S is a registered dietitian specializing
              in eating disorders, ARFID, and nutrition counseling. She works
              with adolescents, adults, and families using a practical,
              evidence-based, non-diet approach.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
            >
              Read more about Justine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="border-y border-[#E4EBF0] bg-[#F7FAFC] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Current Groups
            </p>

            <p className="mt-2 text-lg text-[#34414E]">
              View the current group schedule and registration information.
            </p>
          </div>

          <Link
            href="/groups"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
          >
            View schedule
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 border-b border-[#E4EBF0] pb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
                Get Started
              </p>

              <h2 className="mt-4 text-3xl font-normal tracking-[-0.035em] text-[#34414E]">
                Ready to take the next step?
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-md bg-[#829CB1] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#708A9F]"
            >
              Contact Justine
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
