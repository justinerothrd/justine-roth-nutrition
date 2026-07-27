import Link from "next/link";

const services = [
  {
    title: "Individual Counseling",
    description:
      "Personalized nutrition care for adolescents and adults navigating eating disorders, ARFID, disordered eating, and recovery.",
  },
  {
    title: "Family Support",
    description:
      "Practical guidance for parents and caregivers supporting a loved one through meals, treatment, and recovery.",
  },
  {
    title: "Group Programs",
    description:
      "Current offerings include meal support, mindfulness, movement, and nutrition-focused groups.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Hero */}
      <section className="border-b border-[#E4EBF0] px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Eating Disorder Nutrition Counseling
            </p>

            <h1 className="mt-6 max-w-3xl text-[2.65rem] font-normal leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-[3.55rem]">
              A more peaceful relationship with food is possible.
            </h1>
          </div>

          <div className="lg:border-l lg:border-[#D8E2E9] lg:pl-10">
            <p className="text-lg leading-8 text-[#687785]">
              Compassionate, evidence-based nutrition counseling for
              adolescents, adults, and families navigating eating disorders,
              ARFID, recovery, and nutrition-related concerns.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#829CB1] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#708A9F]"
              >
                Schedule a Consultation
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-3 py-3 text-sm font-medium text-[#718CA2] transition hover:text-[#526D83]"
              >
                Learn About Justine
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-[#E4EBF0] pt-5 text-sm text-[#71808E]">
              <span>Justine Roth, MS, RD, CEDS-S</span>
              <span>20+ years of experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                Services
              </p>

              <h2 className="mt-3 text-3xl font-normal tracking-[-0.04em]">
                Care that meets you where you are.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] hover:text-[#526D83]"
            >
              Explore all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid border-y border-[#E4EBF0] md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`py-8 md:px-8 ${
                  index > 0
                    ? "border-t border-[#E4EBF0] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <h3 className="text-xl font-normal tracking-[-0.025em]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#697887]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy + About */}
      <section className="border-y border-[#E4EBF0] bg-[#F3F7FA] px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Philosophy
            </p>

            <h2 className="mt-4 text-3xl font-normal leading-tight tracking-[-0.04em]">
              What does healthy mean to you?
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#697887]">
              <p>
                Health is personal. It should not be defined only by food
                choices, weight, exercise, or a number on the scale.
              </p>

              <p>
                Nutrition counseling can help reduce stress around food and
                support a more flexible, confident, and sustainable relationship
                with eating.
              </p>
            </div>
          </div>

          <div className="border-t border-[#C9D7E0] pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div className="flex items-start gap-8">
              <div className="shrink-0">
                <p className="text-4xl font-normal tracking-[-0.05em] text-[#7894AA]">
                  20+
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#829CB1]">
                  Years
                </p>
              </div>

              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                  About Justine
                </p>

                <h2 className="mt-4 text-3xl font-normal leading-tight tracking-[-0.04em]">
                  Experienced care without judgment or rigid rules.
                </h2>

                <p className="mt-5 text-base leading-8 text-[#697887]">
                  Justine Roth is a registered dietitian and Certified Eating
                  Disorders Specialist and Supervisor. Her approach combines
                  clinical expertise with practical, collaborative support
                  tailored to each client and family.
                </p>

                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-[#718CA2] hover:text-[#526D83]"
                >
                  Meet Justine
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Groups + CTA */}
      <section className="px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Current Offerings
            </p>

            <h2 className="mt-3 text-2xl font-normal tracking-[-0.035em]">
              Group schedule now available
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#697887]">
              View current yoga, meal-support, mindfulness, and movement groups.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/groups"
              className="inline-flex items-center justify-center rounded-full border border-[#94AABD] px-7 py-3 text-sm font-medium text-[#6D879D] transition hover:bg-[#F2F7FA]"
            >
              View Group Schedule
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#829CB1] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#708A9F]"
            >
              Contact Justine
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
