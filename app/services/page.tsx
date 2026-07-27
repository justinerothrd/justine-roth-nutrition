import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Eating Disorder Nutrition Therapy",
    description:
      "Specialized nutrition care for anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and disordered eating.",
  },
  {
    number: "02",
    title: "Individual Nutrition Counseling",
    description:
      "Personalized nutrition guidance for pediatric nutrition, diabetes, hypertension, sports nutrition, mindful eating, and other nutrition-related concerns.",
  },
  {
    number: "03",
    title: "Family & Parent Support",
    description:
      "Guidance for families navigating meals, recovery expectations, school concerns, and treatment support.",
  },
  {
    number: "04",
    title: "ARFID Support",
    description:
      "Practical strategies for selective eating, limited variety, sensory sensitivity, fear of adverse consequences, and low appetite.",
  },
  {
    number: "05",
    title: "Professional Consultation",
    description:
      "Consultation for clinicians, treatment programs, schools, and teams seeking specialized eating disorder nutrition expertise.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] text-[#2C3138]">
      {/* Intro */}
      <section className="px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
            Services
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="font-display max-w-4xl text-5xl font-normal leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl">
              Individualized nutrition care for every stage of recovery.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-[#68727E]">
              Services are tailored to each client’s needs and may include
              individual counseling, family support, collaboration with
              treatment teams, and professional consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="border-y border-[#E3E9ED] bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-[#E3E9ED]">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid gap-5 border-b border-[#E3E9ED] py-9 sm:grid-cols-[55px_1fr] sm:gap-8 md:grid-cols-[60px_0.9fr_1.1fr] md:items-start md:gap-12"
              >
                <p className="text-sm text-[#8A96A2]">{service.number}</p>

                <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                  {service.title}
                </h2>

                <p className="max-w-xl leading-7 text-[#68727E]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F3F7F9] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
              Approach
            </p>

            <h2 className="font-display mt-5 text-5xl font-normal leading-[1.02] sm:text-6xl">
              Collaborative, practical, and evidence-based.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#68727E]">
            <p>
              Nutrition care is designed to feel supportive rather than rigid.
              Sessions focus on practical strategies that reflect each
              client’s needs, goals, medical history, and lived experience.
            </p>

            <p>
              When appropriate, care may include collaboration with therapists,
              physicians, psychiatrists, schools, and other members of the
              treatment team.
            </p>
          </div>
        </div>
      </section>

      {/* Groups link */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 border-y border-[#E3E9ED] py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
              Current Groups
            </p>

            <h2 className="font-display mt-3 text-4xl font-normal">
              View the current group schedule
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#68727E]">
              Current offerings may include yoga, meal support, mindfulness,
              and nutrition-focused groups.
            </p>
          </div>

          <Link
            href="/groups"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#7F96A8] px-7 py-3.5 text-sm text-[#617B91] transition hover:bg-[#7F96A8] hover:text-white"
          >
            View Groups
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#DCE7EE] px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl font-normal leading-[1.02] sm:text-6xl">
            Not sure which service is the best fit?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#68727E]">
            Reach out to ask a question or discuss what type of support may be
            most appropriate.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#7F96A8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#687F92]"
          >
            Contact Justine
          </Link>
        </div>
      </section>
    </main>
  );
}
