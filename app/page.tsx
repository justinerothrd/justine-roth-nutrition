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
    title: "Families & Caregivers",
    description:
      "Practical guidance for parents and caregivers supporting a loved one through meals, treatment, and recovery.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Hero */}
      <section className="border-b border-[#E4EBF0] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Eating Disorder Nutrition Counseling
          </p>

          <h1 className="font-heading mt-6 max-w-3xl text-3xl font-normal leading-[1.1] tracking-[-0.035em] sm:text-4xl md:text-[3rem]">
            What does healthy mean to you?
          </h1>

          <div className="mt-7 max-w-3xl space-y-4 text-[1.05rem] leading-8 text-[#687785]">
            <p>Healthy means something different for everyone.</p>

            <p>
              Health often becomes defined by the number on the scale,
              yesterday&apos;s workout, or the foods we believe we should or
              shouldn&apos;t eat.
            </p>

            <p>
              Nutrition counseling can help reduce stress around food and
              support a more flexible, confident, and sustainable relationship
              with eating.
            </p>

            <p>
              My approach is practical, evidence-based, and collaborative—not
              overwhelming.
            </p>

            <p className="font-medium text-[#34414E]">
              Together, we&apos;ll work to define what healthy looks like—for
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#E4EBF0] px-6 py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
                How I Can Help
              </p>

              <h2 className="font-heading mt-3 text-3xl font-normal tracking-[-0.03em]">
                Practical, individualized support.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-9 grid border-y border-[#E4EBF0] md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`py-7 md:px-7 ${
                  index > 0
                    ? "border-t border-[#E4EBF0] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <h3 className="font-heading text-xl font-normal tracking-[-0.025em]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687785]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-[#E4EBF0] px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[220px_1fr] md:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              About
            </p>

            <p className="font-heading mt-5 text-4xl font-normal tracking-[-0.045em] text-[#7894AA]">
              20+
            </p>

            <p className="mt-2 text-sm leading-6 text-[#687785]">
              Years of specialized experience
            </p>
          </div>

          <div>
            <h2 className="font-heading max-w-2xl text-3xl font-normal leading-tight tracking-[-0.03em]">
              Experienced nutrition care without judgment or rigid rules.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#687785]">
              Justine Roth, MS, RD, CEDS-C is a registered dietitian
              specializing in eating disorders, ARFID, and nutrition
              counseling. She works with adolescents, adults, and families
              using a practical, evidence-based, non-diet approach.
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

      {/* Contact */}
<section className="border-b border-[#DCE6ED] bg-[#F3F7FA] px-6 py-14 md:py-16">
  <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
        Get Started
      </p>

      <h2 className="font-heading mt-3 text-3xl font-normal leading-tight tracking-[-0.03em]">
        Ready to take the next step?
      </h2>

      <p className="mt-4 text-lg leading-8 text-[#687785]">
        Whether you are looking for individual nutrition counseling, family
        support, or simply have questions about working together, I&apos;d be
        happy to hear from you.
      </p>
    </div>

    <Link
      href="/contact"
      className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#829CB1] pb-1 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
    >
      Schedule a Consultation
      <span aria-hidden="true">→</span>
    </Link>
  </div>
</section>
    </main>
  );
}
