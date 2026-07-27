import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Individual Counseling",
    description:
      "Personalized nutrition care for adolescents and adults navigating eating disorders, ARFID, disordered eating, and recovery.",
  },
  {
    number: "02",
    title: "Family Support",
    description:
      "Practical guidance for parents and caregivers supporting a loved one through meals, treatment, and recovery.",
  },
  {
    number: "03",
    title: "Group Programs",
    description:
      "Current offerings include meal support, mindfulness, movement, and nutrition-focused groups.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Hero */}
      <section className="border-b border-[#E4EBF0]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                Eating Disorder Nutrition Counseling
              </p>

              <h1 className="mt-7 max-w-3xl text-[2.75rem] font-normal leading-[1.12] tracking-[-0.045em] text-[#34414E] sm:text-5xl md:text-[3.65rem]">
                A more peaceful relationship with food is possible.
              </h1>

              <div className="mt-8 h-px w-10 bg-[#AEC0CD]" />
            </div>

            <div className="lg:border-l lg:border-[#D8E2E9] lg:pl-12">
              <p className="max-w-xl text-lg leading-8 text-[#687785]">
                Compassionate, evidence-based nutrition counseling for
                adolescents, adults, and families navigating eating disorders,
                ARFID, recovery, and nutrition-related concerns.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#829CB1] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#708A9F]"
                >
                  Schedule a Consultation
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 px-2 py-3 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
                >
                  Learn About Justine
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[#E4EBF0] pt-6">
            <div className="flex flex-col gap-2 text-sm text-[#71808E] sm:flex-row sm:items-center sm:justify-between">
              <p>Justine Roth, MS, RD, CEDS-S</p>
              <p>Over 20 years of specialized experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="bg-[#F3F7FA] px-6 py-12 sm:px-8 md:py-14 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3 md:gap-0">
          <div className="md:border-r md:border-[#D8E2E9] md:px-10">
            <p className="text-3xl font-normal tracking-[-0.04em] text-[#7894AA]">
              20+
            </p>

            <p className="mt-2 text-sm font-medium text-[#34414E]">
              Years of Experience
            </p>

            <div className="mx-auto mt-5 h-px w-8 bg-[#91A8BA]" />

            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#697887]">
              Years specializing in eating disorders and mental health
              nutrition.
            </p>
          </div>

          <div className="md:border-r md:border-[#D8E2E9] md:px-10">
            <p className="text-3xl font-normal tracking-[-0.04em] text-[#7894AA]">
              RD
            </p>

            <p className="mt-2 text-sm font-medium text-[#34414E]">
              Registered Dietitian
            </p>

            <div className="mx-auto mt-5 h-px w-8 bg-[#91A8BA]" />

            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#697887]">
              Evidence-based nutrition counseling tailored to each client.
            </p>
          </div>

          <div className="md:px-10">
            <p className="text-3xl font-normal tracking-[-0.04em] text-[#7894AA]">
              CEDS-S
            </p>

            <p className="mt-2 text-sm font-medium text-[#34414E]">
              Eating Disorder Specialist
            </p>

            <div className="mx-auto mt-5 h-px w-8 bg-[#91A8BA]" />

            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#697887]">
              Certified Eating Disorders Specialist and Supervisor.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Services
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-[-0.04em] text-[#34414E] sm:text-4xl">
              Care that meets you where you are.
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-6xl border-t border-[#E4EBF0]">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid gap-5 border-b border-[#E4EBF0] py-9 sm:grid-cols-[50px_1fr] sm:gap-8 md:grid-cols-[50px_0.9fr_1.1fr] md:gap-12"
              >
                <p className="text-sm text-[#8A9AAA]">{service.number}</p>

                <h3 className="text-xl font-normal leading-snug tracking-[-0.025em] text-[#34414E] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="max-w-xl leading-7 text-[#697887]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#94AABD] px-8 py-3 text-sm font-medium text-[#6D879D] transition-colors hover:bg-[#F2F7FA]"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-[#E4EBF0] bg-[#F3F7FA] px-6 py-20 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Philosophy
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-normal leading-tight tracking-[-0.04em] text-[#34414E] sm:text-4xl">
              What does healthy mean to you?
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#697887]">
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
      </section>

      {/* About */}
      <section className="px-6 py-20 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-16">
            <div className="rounded-[2rem] bg-[#E7EFF4] px-8 py-12 sm:px-10">
              <p className="text-6xl font-normal tracking-[-0.055em] text-[#7894AA]">
                20+
              </p>

              <p className="mt-5 max-w-xs text-lg leading-7 text-[#596B79]">
                Years specializing in eating disorders and mental health
                nutrition.
              </p>
            </div>

            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                About Justine
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-normal leading-tight tracking-[-0.04em] text-[#34414E] sm:text-4xl">
                Experienced care without judgment or rigid rules.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#697887]">
                Justine Roth is a registered dietitian and Certified Eating
                Disorders Specialist and Supervisor. Her approach combines
                clinical expertise with practical, collaborative support
                tailored to each client and family.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
              >
                Meet Justine
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="border-y border-[#E4EBF0] bg-[#F8FBFD] px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Current Offerings
            </p>

            <h2 className="mt-3 text-2xl font-normal tracking-[-0.035em] text-[#34414E]">
              Group schedule now available
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#697887]">
              View current yoga, meal-support, mindfulness, and movement
              groups.
            </p>
          </div>

          <Link
            href="/groups"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#94AABD] bg-white px-7 py-3 text-sm font-medium text-[#6D879D] transition-colors hover:bg-[#F2F7FA]"
          >
            View Group Schedule
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 text-center sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
            Get Started
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-normal leading-tight tracking-[-0.04em] text-[#34414E] sm:text-4xl">
            Nutrition care can feel supportive, flexible, and human.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#697887]">
            Reach out to ask a question, learn more about services, or schedule
            an initial consultation.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#829CB1] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#708A9F]"
          >
            Contact Justine
          </Link>
        </div>
      </section>
    </main>
  );
}
