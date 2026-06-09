export default function ServicesPage() {
  const services = [
    ["Eating Disorder Nutrition Therapy", "Specialized nutrition care for Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder, ARFID, and disordered eating."],
    ["Individual Nutrition Counseling", "Personalized nutrition guidance for various health concerns including: pediatric nutrition, diabetes, hypertension, sports nutrition, and mindful eating."],
    ["Family & Parent Support", "Guidance for families who need help navigating meals, recovery expectations, school concerns, and treatment support."],
    ["ARFID Support", "Practical interventions and strategies for selective eating, limited variety, sensory sensitivity, fear of adverse consequences, and low appetite."],
    ["Professional Consultation", "Consultation for clinicians, programs, schools, and teams seeking eating disorder nutrition expertise."],
  ];

  return (
    <main className="bg-[#F8F5F0] px-6 py-20 text-[#2F332F]">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light">Services</h1>

        <div className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {services.map(([title, text]) => (
            <div key={title} className="border-t border-[#D8CFC3] pt-6">
              <h2 className="text-2xl font-light">{title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#5F665F]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
