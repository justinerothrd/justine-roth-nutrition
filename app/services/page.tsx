export default function ServicesPage() {
  const services = [
    ["Individual Nutrition Counseling", "Personalized nutrition support for adolescents and adults working toward recovery, improved nourishment, and a more flexible relationship with food."],
    ["Eating Disorder Nutrition Therapy", "Specialized care for Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder, ARFID, and disordered eating patterns."],
    ["Family & Parent Support", "Guidance for families navigating meals, recovery expectations, school concerns, and the emotional stress of eating disorder treatment."],
    ["ARFID Support", "Practical nutrition counseling for selective eating, limited variety, sensory sensitivity, fear of adverse consequences, and low appetite."],
    ["Medical Nutrition Therapy", "Nutrition care for health concerns that require individualized support, coordination, and realistic treatment goals."],
    ["Professional Consultation", "Consultation and education for clinicians, programs, schools, and teams seeking eating disorder nutrition expertise."],
  ];

  return (
    <main className="bg-[#F8F5F0] text-[#2F332F]">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-light">Services</h1>

          <div className="mt-12 divide-y divide-[#E1D8CD]">
            {services.map(([title, text]) => (
              <div
                key={title}
                className="grid gap-4 py-8 md:grid-cols-[260px_1fr]"
              >
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="max-w-2xl leading-7 text-[#5F665F]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
