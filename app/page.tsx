export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#2F332F]">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#536857]">
              Nutrition Counseling · Eating Disorder Care
            </p>

            <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
              Justine Roth, MS, RD, CEDS-S
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5F665F]">
              Compassionate, evidence-based nutrition counseling for
              adolescents, adults, and families navigating eating disorders,
              recovery, and nutrition-related concerns.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#536857] px-8 py-4 text-white transition hover:bg-[#435646]"
              >
                Schedule a Consultation
              </a>

              <a
                href="/about"
                className="rounded-full border border-[#CFC7BC] bg-[#FFFDF8] px-8 py-4 transition hover:bg-white"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#FFFDF8] p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9BAF9B]">
              Areas of Focus
            </p>

            <div className="mt-6 space-y-4 text-lg">
              <p>Eating disorder recovery</p>
              <p>Adolescent and adult nutrition counseling</p>
              <p>Family and parent support</p>
              <p>Medical nutrition therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-[#FFFDF8] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-light">
            Areas of Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Eating Disorders",
                text: "Support for Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder, ARFID, and disordered eating patterns.",
              },
              {
                title: "Nutrition Counseling",
                text: "Individualized care rooted in evidence, compassion, and a non-diet approach to health and recovery.",
              },
              {
                title: "Family Support",
                text: "Guidance for parents and families navigating meals, recovery, and the emotional stress of eating disorder treatment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E8E1D8] bg-[#F8F5F0] p-8"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#5F665F]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-light">A warm, practical approach to nutrition care.</h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#5F665F]">
            <p>
              Nutrition counseling can feel overwhelming, especially when food,
              body image, health, or recovery feel complicated. Sessions are
              designed to be supportive, realistic, and individualized.
            </p>

            <p>
              Justine works collaboratively with clients, families, and treatment
              teams to support meaningful, sustainable progress.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#9BAF9B]/20 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-light">About Justine</h2>

          <p className="mt-6 text-lg leading-8 text-[#5F665F]">
            Justine Roth is a Registered Dietitian and Certified Eating
            Disorders Specialist with over two decades of experience working
            with adolescents and adults affected by eating disorders and
            nutrition-related concerns.
          </p>

          <a
            href="/about"
            className="mt-8 inline-block rounded-full border border-[#536857] px-7 py-3 text-[#536857]"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#FFFDF8] px-8 py-16 text-center shadow-sm">
          <h2 className="text-4xl font-light">Ready to get started?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F665F]">
            Reach out to schedule a consultation or learn more about services.
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
