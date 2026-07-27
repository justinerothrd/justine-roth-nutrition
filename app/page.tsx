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
      <section className="border-b border-[#E4EBF0] px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                Eating Disorder Nutrition Counseling
              </p>

              <h1 className="mt-6 max-w-3xl text-[2.65rem] font-normal leading-[1.1] tracking-[-0.045em] sm:text-5xl md:text-[3.45rem]">
                A more peaceful relationship with food is possible.
              </h1>
            </div>

            <div className="lg:border-l lg:border-[#D8E2E9] lg:pl-10">
              <p className="max-w-xl text-lg leading-8 text-[#687785]">
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
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#E4EBF0] pt-5 text-sm text-[#71808E] sm:flex-row sm:justify-between">
            <p>Justine Roth, MS, RD, CEDS-S</p>
            <p>Over 20 years of specialized experience</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                Services
              </p>

              <h2 className="mt-4 text-3xl font-normal leading-tight tracking-[-0.04em] sm:text-4xl">
                Care that meets you where you are.
              </h2>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] hover:text-[#526D83]"
              >
                Explore all services
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="border-t border-[#E4EBF0]">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-4 border-b border-[#E4EBF0] py-7 sm:grid-cols-[42px_0.85fr_1.15fr] sm:gap-8"
                >
                  <p className="text-sm text-[#8A9AAA]">{service.number}</p>

                  <h3 className="text-xl font-normal leading-snug tracking-[-0.025em]">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-[#697887]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-[#E4EBF0] bg-[#F3F7FA] px-6 py-14 sm:px-8 md:py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-14">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Philosophy
            </p>

            <h2 className="mt-4 max-w-sm text-3xl font-normal leading-tight tracking-[-0.04em]">
              What does healthy mean to you?
            </h2>
          </div>

          <div className="space-y-4 text-lg leading-8 text-[#697887]">
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
      <section className="px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start md:gap-16">
            <div className="border-t border-[#AFC0CD] pt-5">
              <p className="text-5xl font-normal tracking-[-0.05em] text-[#7894AA]">
                20+
              </p>

              <p className="mt-3 text-sm leading-6 text-[#697887]">
                Years specializing in eating disorders and mental health
                nutrition.
              </p>
            </div>

            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                About Justine
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-tight tracking-[-0.04em] sm:text-4xl">
                Experienced care without judgment or rigid rules.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#697887]">
                Justine Roth is a registered dietitian and Certified Eating
                Disorders Specialist and Supervisor. Her approach combines
                clinical expertise with practical, collaborative support
                tailored to each client and family.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#718CA2] transition hover:text-[#526D83]"
              >
                Meet Justine
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="border-y border-[#E4EBF0] bg-[#F8FBFD] px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Current Offerings
            </p>

            <h2 className="mt-3 text-2xl font-normal tracking-[-0.035em]">
              Group schedule now available
            </h2>

            <p className="mt-2 max-w-2xl leading-7 text-[#697887]">
              View current yoga, meal-support, mindfulness, and movement groups.
            </p>
          </div>

          <Link
            href="/groups"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#94AABD] bg-white px-7 py-3 text-sm font-medium text-[#6D879D] transition hover:bg-[#F2F7FA]"
          >
            View Group Schedule
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
            Get Started
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight tracking-[-0.04em] sm:text-4xl">
            Nutrition care can feel supportive, flexible, and human.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#697887]">
            Reach out to ask a question, learn more about services, or schedule
            an initial consultation.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#829CB1] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#708A9F]"
          >
            Contact Justine
          </Link>
        </div>
      </section>
    </main>
  );
}
