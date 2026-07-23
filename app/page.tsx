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
    <main className="min-h-screen bg-[#FCFDFE] text-[#2C3138]">
      {/* Hero */}
      <section className="overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
                Eating Disorder Nutrition Counseling
              </p>

              <h1 className="font-display max-w-4xl text-[3.5rem] font-normal leading-[0.95] tracking-[-0.035em] sm:text-7xl md:text-[5.5rem] lg:text-[6.25rem]">
                A more peaceful relationship with food is possible.
              </h1>
            </div>

            <div className="border-l border-[#C9D4DC] pl-6 lg:mb-3 lg:pl-8">
              <p className="text-lg leading-8 text-[#68727E]">
                Compassionate, evidence-based nutrition counseling for
                adolescents, adults, and families navigating eating disorders,
                ARFID, recovery, and nutrition-related concerns.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#7F96A8] px-7 py-3.5 text-sm text-white transition hover:bg-[#687F92]"
                >
                  Schedule a Consultation
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#C9D4DC] bg-white px-7 py-3.5 text-sm text-[#617B91] transition hover:bg-[#F3F7F9]"
                >
                  Learn About Justine
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 h-px bg-[#E3E9ED]" />

          <div className="mt-6 flex flex-col gap-2 text-sm text-[#68727E] sm:flex-row sm:items-center sm:justify-between">
            <p>Justine Roth, MS, RD, CEDS-S</p>
            <p>Over 20 years of specialized experience</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
                Services
              </p>

              <h2 className="font-display mt-5 text-5xl font-normal leading-none tracking-[-0.025em] sm:text-6xl">
                Care that meets you where you are.
              </h2>
            </div>

            <div className="border-t border-[#E3E9ED]">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-4 border-b border-[#E3E9ED] py-8 sm:grid-cols-[55px_1fr] sm:gap-8"
                >
                  <p className="text-sm text-[#8A96A2]">{service.number}</p>

                  <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                    <h3 className="font-display text-3xl leading-tight">
                      {service.title}
                    </h3>

                    <p className="leading-7 text-[#68727E]">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#617B91] hover:underline"
              >
                Explore all services
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F3F7F9] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
              Philosophy
            </p>

            <h2 className="font-display mt-5 text-5xl font-normal leading-[1.02] tracking-[-0.025em] sm:text-6xl">
              What does healthy mean to you?
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#68727E]">
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

      {/* Experience */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="rounded-[2rem] bg-[#E7EEF3] px-8 py-12 sm:px-12 sm:py-16">
            <p className="font-display text-7xl leading-none text-[#617B91] sm:text-8xl">
              20+
            </p>

            <p className="mt-5 max-w-xs text-lg leading-7 text-[#566575]">
              Years specializing in eating disorders and mental health
              nutrition.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
              About Justine
            </p>

            <h2 className="font-display mt-5 text-5xl font-normal leading-[1.02] tracking-[-0.025em] sm:text-6xl">
              Experienced care without judgment or rigid rules.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#68727E]">
              Justine Roth is a registered dietitian and Certified Eating
              Disorders Specialist and Supervisor. Her approach combines
              clinical expertise with practical, collaborative support tailored
              to each client and family.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#617B91] hover:underline"
            >
              Meet Justine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="border-y border-[#E3E9ED] bg-[#F3F7F9] px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
              Current Offerings
            </p>

            <h2 className="font-display mt-3 text-4xl font-normal">
              Group schedule now available
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#68727E]">
              View current yoga, meal-support, mindfulness, and movement
              groups.
            </p>
          </div>

          <Link
            href="/groups"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#7F96A8] bg-white px-7 py-3.5 text-sm text-[#617B91] transition hover:bg-[#7F96A8] hover:text-white"
          >
            View Group Schedule
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#DCE7EE] px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#617B91]">
            Get Started
          </p>

          <h2 className="font-display mx-auto mt-6 max-w-4xl text-5xl font-normal leading-[1] tracking-[-0.025em] text-[#2C3138] sm:text-6xl md:text-7xl">
            Nutrition care can feel supportive, flexible, and human.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#68727E]">
            Reach out to ask a question, learn more about services, or schedule
            an initial consultation.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#7F96A8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#687F92]"
          >
            Contact Justine
          </Link>
        </div>
      </section>
    </main>
  );
}
