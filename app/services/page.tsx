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
      {/* Mobile introduction */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:hidden">
        <div className="mx-auto max-w-md">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1]">
            Services
          </p>

          <h1 className="font-heading mt-4 max-w-[14ch] text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em]">
            Nutrition care that meets you where you are.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#687785]">
            Every client arrives with a different story. Services are
            individualized and designed to provide practical, evidence-based
            nutrition care that feels collaborative—not overwhelming.
          </p>
        </div>
      </section>

      {/* Tablet and desktop introduction */}
<section className="hidden border-b border-[#E4EBF0] px-8 py-14 sm:block lg:px-10 lg:py-16">
  <div className="mx-auto max-w-7xl">
    <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
      Services
    </p>

    <div className="mt-6 grid gap-12 lg:grid-cols-[1.15fr_auto_0.85fr] xl:gap-14">
      <div>
        <h1 className="font-heading max-w-[16ch] text-[2.75rem] font-normal leading-[1.04] tracking-[-0.04em] md:text-[3.15rem] lg:text-[3.6rem]">
          Nutrition care that meets you where you are.
        </h1>
      </div>

      <div
        aria-hidden="true"
        className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#D7E4EC] to-transparent lg:block"
      />

      <div className="mt-7 max-w-4xl text-lg leading-8 text-[#687785]">
        <p>
          Every client arrives with a different story. Services are
          individualized and designed to provide practical, evidence-based
          nutrition care that feels collaborative—not overwhelming.
        </p>
      </div>
    </div>
  </div>
</section>
     

      {/* Services */}
      <section className="border-b border-[#E4EBF0] bg-white">
        <div className="bg-[#EAF1F5] px-6 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#718CA2] sm:text-xs sm:tracking-[0.26em]">
              How We Can Work Together
            </p>

            <h2 className="font-heading mt-3 max-w-2xl text-[1.8rem] font-normal leading-[1.08] tracking-[-0.03em] sm:text-3xl">
              Individualized support for different needs and stages of care.
            </h2>
          </div>
        </div>

        <div className="px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`grid gap-4 py-8 sm:py-9 md:grid-cols-[1fr_1fr] md:gap-14 ${
                  index < services.length - 1
                    ? "border-b border-[#E4EBF0]"
                    : ""
                }`}
              >
                <h3 className="font-heading max-w-[18ch] text-[1.45rem] font-normal leading-tight tracking-[-0.025em] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-[#687785]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-[#DCE6ED] bg-[#F3F7FA] px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              My Approach
            </p>

            <h2 className="font-heading mt-4 max-w-[17ch] text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
              Nutrition care should feel supportive, not rigid.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
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
      <section className="border-b border-[#E4EBF0] bg-white px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Group Programs
            </p>

            <h2 className="font-heading mt-4 text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
              Current group offerings
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
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
      <section className="border-b border-[#DCE6ED] bg-[#F6F9FB] px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
              Not sure which service is the right fit?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
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
