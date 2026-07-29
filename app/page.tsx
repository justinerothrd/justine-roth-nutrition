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
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="hidden text-xs font-medium uppercase tracking-[0.24em] text-[#829CB1] sm:block">
              Eating Disorder Nutrition Counseling
            </p>

            <h1 className="font-heading max-w-[12ch] text-[2.3rem] font-normal leading-[1.02] tracking-[-0.045em] sm:mt-5 sm:max-w-3xl sm:text-[2.8rem] md:text-[3.2rem]">
              What does healthy mean to you?
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-[#687785] sm:mt-7 sm:text-[1.05rem] sm:leading-8">
              <p>Healthy means something different for everyone.</p>

              <p className="hidden sm:block">
                Health often becomes defined by the number on the scale,
                yesterday&apos;s workout, or the foods we believe we should or
                shouldn&apos;t eat.
              </p>

              <p>
                Nutrition counseling can help reduce stress around food and
                support a more flexible, confident, and sustainable
                relationship with eating.
              </p>

              <p className="font-medium text-[#34414E]">
                My approach is practical, evidence-based, and collaborative—not
                overwhelming.
              </p>

              <p className="hidden font-medium text-[#34414E] sm:block">
                Together, we&apos;ll work to define what healthy looks like—for
                you.
              </p>
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#718CA2] px-6 text-sm font-medium text-white transition-colors hover:bg-[#607D93]"
              >
                Schedule a Consultation
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
              >
                About Justine
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="sm:flex sm:items-end sm:justify-between sm:gap-8">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.24em]">
                How I Can Help
              </p>

              <h2 className="font-heading mt-3 text-[1.8rem] font-normal leading-[1.08] tracking-[-0.03em] sm:text-3xl">
                Practical, individualized support.
              </h2>
            </div>

            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83] sm:mt-0"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 border-t border-[#E4EBF0] sm:mt-9">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`grid gap-3 py-6 sm:grid-cols-[minmax(220px,0.85fr)_1.15fr] sm:gap-10 sm:py-7 ${
                  index < services.length - 1
                    ? "border-b border-[#E4EBF0]"
                    : ""
                }`}
              >
                <h3 className="font-heading text-xl font-normal leading-tight tracking-[-0.025em] sm:text-[1.35rem]">
                  {service.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-[#687785] sm:text-[0.98rem]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl md:grid md:grid-cols-[170px_1fr] md:gap-14">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.24em]">
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

          <div className="mt-7 md:mt-0">
            <h2 className="font-heading max-w-3xl text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
              Experienced nutrition care without judgment or rigid rules.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#687785] sm:mt-5 sm:text-lg sm:leading-8">
              Justine Roth, MS, RD, CEDS-C is a registered dietitian
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
      <section className="bg-[#F6F8FA] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl md:flex md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.24em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
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
            className="mt-7 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#829CB1] px-6 text-sm font-medium text-[#607D93] transition-colors hover:bg-white hover:text-[#526D83] md:mt-0"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
