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
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-4xl">
            <p className="text-[0.68rem] font-medium uppercase leading-5 tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Eating Disorder Nutrition Counseling
            </p>

            <h1 className="font-heading mt-4 max-w-3xl text-[2rem] font-normal leading-[1.08] tracking-[-0.035em] sm:mt-5 sm:text-4xl md:text-[3rem]">
              What does healthy mean to you?
            </h1>

            {/* Mobile */}
            <div className="mt-5 text-base leading-7 text-[#687785] sm:hidden">
              <p>
                Healthy means something different for everyone. Nutrition
                counseling can help reduce stress around food and support a
                more flexible, confident, and sustainable relationship with
                eating.
              </p>

              <p className="mt-4 font-medium text-[#34414E]">
                My approach is practical, evidence-based, and collaborative—not
                overwhelming.
              </p>
            </div>

            {/* Tablet and desktop */}
            <div className="mt-6 hidden max-w-3xl space-y-4 text-[1.05rem] leading-8 text-[#687785] sm:block">
              <p>Healthy means something different for everyone.</p>

              <p>
                Health often becomes defined by the number on the scale,
                yesterday&apos;s workout, or the foods we believe we should or
                shouldn&apos;t eat.
              </p>

              <p>
                Nutrition counseling can help reduce stress around food and
                support a more flexible, confident, and sustainable
                relationship with eating.
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
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
                How I Can Help
              </p>

              <h2 className="font-heading mt-3 max-w-xl text-[1.85rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
                Practical, individualized support.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-7 border-y border-[#E4EBF0] sm:mt-9 md:grid md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`py-6 md:px-7 ${
                  index > 0
                    ? "border-t border-[#E4EBF0] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <h3 className="font-heading text-xl font-normal leading-tight tracking-[-0.025em]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#687785]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-[200px_1fr] md:gap-14">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              About
            </p>

            <div className="mt-4 flex items-end gap-3 md:block">
              <p className="font-heading text-4xl font-normal tracking-[-0.045em] text-[#7894AA]">
                20+
              </p>

              <p className="pb-1 text-sm leading-6 text-[#687785] md:mt-2 md:pb-0">
                Years of specialized experience
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading max-w-3xl text-[1.75rem] font-normal leading-[1.12] tracking-[-0.03em] sm:text-3xl">
              Experienced nutrition care without judgment or rigid rules.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#687785] sm:mt-5 sm:text-lg sm:leading-8">
              Justine Roth, MS, RD, CEDS-S is a registered dietitian
              specializing in eating disorders, ARFID, and nutrition
              counseling. She works with adolescents, adults, and families
              using a practical, evidence-based, non-diet approach.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
            >
              Read more about Justine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-[#DCE6ED] bg-[#F3F7FA] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 text-[1.75rem] font-normal leading-[1.12] tracking-[-0.03em] sm:text-3xl">
              Ready to take the next step?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
              Whether you are looking for individual nutrition counseling,
              family support, or simply have questions about working together,
              I&apos;d be happy to hear from you.
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
