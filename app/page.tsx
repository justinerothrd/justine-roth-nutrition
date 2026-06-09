export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-5xl font-light text-slate-900 md:text-7xl">
            Justine Roth, MS, RD, CEDS-S
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-slate-600">
            Eating Disorder & Nutrition Counseling for adolescents,
            adults, and families.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-slate-900 px-8 py-4 text-white"
            >
              Schedule a Consultation
            </a>

            <a
              href="/about"
              className="rounded-full border border-slate-300 px-8 py-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-light text-slate-900">
            Areas of Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-medium">
                Eating Disorders
              </h3>
              <p className="mt-3 text-slate-600">
                Anorexia Nervosa, Bulimia Nervosa,
                Binge Eating Disorder, and ARFID.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-medium">
                Nutrition Counseling
              </h3>
              <p className="mt-3 text-slate-600">
                Individualized nutrition care rooted in evidence,
                compassion, and recovery.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-medium">
                Family Support
              </h3>
              <p className="mt-3 text-slate-600">
                Guidance for parents and families navigating the
                recovery process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-slate-900">
            About Justine
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Justine Roth is a Registered Dietitian and Certified Eating
            Disorders Specialist with over two decades of experience
            working with adolescents and adults affected by eating
            disorders and nutrition-related concerns.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-slate-900">
            Ready to Get Started?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Reach out to schedule a consultation or learn more about
            services.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-slate-900 px-8 py-4 text-white"
          >
            Contact Justine
          </a>
        </div>
      </section>
    </main>
  );
}
