import Link from "next/link";

const services = [
  {
    title: "Eating Disorder Nutrition Therapy",
    description:
      "Specialized nutrition therapy for anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and disordered eating.",
  },
  {
    title: "Individual Nutrition Counseling",
    description:
      "Personalized nutrition counseling for adolescents and adults, including pediatric nutrition, diabetes, hypertension, sports nutrition, mindful eating, and other nutrition-related concerns.",
  },
  {
    title: "Family & Parent Support",
    description:
      "Practical guidance for parents and caregivers navigating meals, treatment recommendations, school concerns, and recovery at home.",
  },
  {
    title: "ARFID Support",
    description:
      "Evidence-based support for selective eating, sensory sensitivities, fear of adverse consequences, limited food variety, and low appetite.",
  },
  {
    title: "Professional Consultation",
    description:
      "Consultation for clinicians, treatment programs, schools, and healthcare professionals seeking specialized eating disorder nutrition expertise.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Introduction */}
      <section className="border-b border-[#E4EBF0] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Services
          </p>

          <h1 className="font-heading mt-6 max-w-3xl text-3xl font-normal leading-[1.1] tracking-[-0.035em] sm:text-4xl md:text-[3rem]">
            Nutrition care that meets you where you are.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#687785]">
            Every client arrives with a different story. Services are
            individualized and designed to provide practical, evidence-based
            nutrition care that feels collaborative—not overwhelming.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-[#E4EBF0] px-6 py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            How We Can Work Together
          </p>

          <div className="mt-8 border-t border-[#E4EBF0]">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid gap-4 border-b border-[#E4EBF0] py-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14"
              >
                <h2 className="font-heading text-2xl font-normal leading-tight tracking-[-0.025em]">
                  {service.title}
                </h2>

                <p className="max-w-xl leading-7 text-[#687785]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-[#DCE6ED] bg-[#F3F7FA] px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              My Approach
            </p>

            <h2 className="font-heading mt-4 text-3xl font-normal leading-tight tracking-[-0.03em]">
              Nutrition care should feel supportive, not rigid.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#687785]">
            <p>
              Treatment is collaborative, individualized, and grounded in
              current evidence.
            </p>

            <p>
              When appropriate, care is coordinated with therapists,
              physicians, psychiatrists, schools, and other members of the
              treatment team.
            </p>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="border-b border-[#E4EBF0] px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Group Programs
            </p>

            <h2 className="font-heading mt-4 text-3xl font-normal leading-tight tracking-[-0.03em]">
              Current group offerings
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#687785]">
              Group programs may include yoga, breakfast meal support,
              mindfulness, mindful eating, and movement. Offerings and
              availability may change throughout the year.
            </p>

            <Link
              href="/groups"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
            >
              View the current group schedule
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
              Not sure which service is the right fit?
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#687785]">
              Reach out with questions or to discuss what type of support may
              be most appropriate.
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
