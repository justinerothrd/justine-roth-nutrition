export default function ServicesPage() {
  const services = [
    {
      title: "Individual Nutrition Counseling",
      text: "Personalized nutrition support for adolescents and adults working toward recovery, improved nourishment, and a more flexible relationship with food.",
    },
    {
      title: "Eating Disorder Nutrition Therapy",
      text: "Specialized care for Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder, ARFID, and disordered eating patterns.",
    },
    {
      title: "Family & Parent Support",
      text: "Guidance for families navigating meals, recovery expectations, school concerns, and the emotional stress of eating disorder treatment.",
    },
    {
      title: "ARFID Support",
      text: "Practical nutrition counseling for selective eating, limited variety, sensory sensitivity, fear of adverse consequences, and low appetite.",
    },
    {
      title: "Medical Nutrition Therapy",
      text: "Nutrition care for health concerns that require individualized support, coordination, and realistic treatment goals.",
    },
    {
      title: "Professional Consultation",
      text: "Consultation and education for clinicians, programs, schools, and teams seeking eating disorder nutrition expertise.",
    },
  ];

  return (
    <main className="bg-[#F8F5F0] text-[#2F332F]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#536857]">
            Services
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-6xl">
            Nutrition counseling rooted in compassion, evidence, and recovery.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5F665F]">
            Services are individualized for each client and may include nutrition
            assessment, meal support, family guidance, treatment team
            collaboration, and recovery-focused skill building.
          </p>
        </div>
      </section>

      <section className="bg-[#FFFDF8] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#E8E1D8] bg-[#F8F5F0] p-8"
            >
              <h2 className="text-xl font-medium">{service.title}</h2>
              <p className="mt-4 leading-7 text-[#5F665F]">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#FFFDF8] px-8 py-16 text-center shadow-sm">
          <h2 className="text-4xl font-light">Not sure where to start?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F665F]">
            Reach out to discuss whether nutrition counseling is the right fit
            and what type of support may be most helpful.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#536857] px-8 py-4 text-white transition hover:bg-[#435646]"
          >
            Contact Justine
          </a>
        </div>
      </section>
    </main>
  );
}
