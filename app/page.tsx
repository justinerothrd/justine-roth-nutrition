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
      {/* Mobile hero */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:hidden">
        <div className="mx-auto max-w-md">
          <h1 className="font-heading max-w-[12ch] text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em]">
            What does healthy mean to you?
          </h1>

          <p className="mt-6 text-base leading-7 text-[#687785]">
            Healthy means something different for everyone. Nutrition
            counseling can help reduce stress around food and support a more
            flexible, confident, and sustainable relationship with eating.
          </p>

          <p className="mt-5 text-base font-medium leading-7 text-[#34414E]">
            My approach is practical, evidence-based, and collaborative—not
            overwhelming.
          </p>
        </div>
      </section>

      {/* Tablet and desktop hero */}
      <section className="hidden border-b border-[#E4EBF0] px-8 py-14 sm:block lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Eating Disorder Nutrition Counseling
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 xl:gap-12">
            <div>
              <h1 className="font-heading max-w-[13ch] text-[2.75rem] font-normal leading-[1.04] tracking-[-0.04em] md:text-[3.15rem] lg:text-[3.6rem]">
                What does healthy mean to you?
              </h1>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#D7E4EC] to-transparent lg:block"
            />

            <div className="max-w-lg space-y-4 text-[1.05rem] leading-8 text-[#687785]">
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
      <section className="border-b border-[#E4EBF0] bg-white">
        {/* Blue heading band */}
        <div className="bg-[#EAF1F5] px-6 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-6xl sm:flex sm:items-end sm:justify-between sm:gap-10">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#718CA2] sm:text-xs sm:tracking-[0.26em]">
                How I Can Help
              </p>

              <h2 className="font-heading mt-3 max-w-[15ch] text-[1.8rem] font-normal leading-[1.08] tracking-[-0.03em] sm:max-w-none sm:text-3xl">
                Practical, individualized support.
              </h2>
            </div>

            <Link
              href="/services"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#607F96] transition-colors hover:text-[#34414E] sm:mt-0"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Service list */}
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl md:grid md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`border-b border-[#E4EBF0] py-8 md:min-h-[240px] md:border-b-0 md:px-8 md:py-10 ${
                  index === 0 ? "md:pl-0" : "md:border-l"
                } ${index === services.length - 1 ? "md:pr-0" : ""}`}
              >
                <h3 className="font-heading max-w-[15ch] text-xl font-normal leading-tight tracking-[-0.025em] text-[#34414E] sm:text-[1.35rem]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687785] sm:text-[0.95rem]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-[#E4EBF0] bg-white px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-[190px_1fr] md:gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              About
            </p>

            <div className="mt-4 flex items-end gap-3 md:block">
              <p className="font-heading text-4xl font-normal tracking-[-0.045em] text-[#7894AA] lg:text-[2.75rem]">
                20+
              </p>

              <p className="max-w-[160px] pb-1 text-sm leading-6 text-[#687785] md:mt-2 md:pb-0">
                Years of specialized experience
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="font-heading max-w-3xl text-[1.75rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
              Experienced nutrition care without judgment or rigid rules.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
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
      <section className="bg-[#F6F9FB] px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl md:flex md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 max-w-[16ch] text-[1.75rem] font-normal leading-[1.1] tracking-[-0.03em] sm:max-w-none sm:text-3xl">
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
            className="mt-7 inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#829CB1] pb-1 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83] md:mt-0"
          >
            Schedule a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
