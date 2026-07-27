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
      "Nutrition counseling for adolescents and adults, including diabetes, pediatric nutrition, hypertension, sports nutrition, and mindful eating.",
  },
  {
    title: "Family & Parent Support",
    description:
      "Helping parents and caregivers navigate meals, treatment recommendations, school concerns, and recovery at home.",
  },
  {
    title: "ARFID Support",
    description:
      "Evidence-based support for selective eating, sensory sensitivities, fear of adverse consequences, and limited food variety.",
  },
  {
    title: "Professional Consultation",
    description:
      "Consultation for clinicians, treatment programs, schools, and healthcare professionals seeking eating disorder nutrition expertise.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FCFDFE] text-[#2C3138]">

      {/* Hero */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#7F96A8]">
            SERVICES
          </p>

          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            <div>
              <h1 className="font-display text-6xl leading-[0.95] tracking-[-0.03em] md:text-7xl">
                Practical, evidence-based nutrition care that feels collaborative—not
                overwhelming.
              </h1>
            </div>
        </div>
      </section>

      {/* Service Cards */}

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[32px] border border-[#E5ECF1] bg-white p-10 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <h2 className="font-display text-4xl leading-tight">
                {service.title}
              </h2>

              <p className="mt-6 leading-8 text-[#66717D]">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Philosophy */}

      <section className="bg-[#F4F8FB] px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#7F96A8]">
            MY APPROACH
          </p>

          <h2 className="font-display text-5xl leading-tight md:text-6xl">
            Nutrition care should feel supportive, not rigid.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#66717D]">
            Treatment is collaborative, individualized, and grounded in current
            evidence. Whenever appropriate, care is coordinated with therapists,
            physicians, psychiatrists, schools, and other members of the
            treatment team.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#DDEAF3] p-16 text-center">

          <h2 className="font-display text-5xl md:text-6xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66717D]">
            If you're unsure where to begin, I'm happy to answer questions and
            help determine the best next step.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#7F96A8] px-8 py-4 text-white transition hover:bg-[#6D8599]"
          >
            Schedule a Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}
