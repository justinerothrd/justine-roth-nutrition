import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#2F332F]">
      {/* Hero */}
      <section className="px-6 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#536857]">
            Eating Disorder Nutrition Counseling
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-light leading-tight md:text-7xl">
            Helping individuals and families build a healthier relationship with
            food.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[#5F665F]">
            Compassionate, evidence-based nutrition counseling for adolescents,
            adults, and families navigating eating disorders, recovery, ARFID,
            and nutrition-related concerns.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#536857] px-8 py-4 text-white transition hover:bg-[#435646]"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-[#536857] px-8 py-4 text-[#536857] transition hover:bg-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#FFFDF8] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-light">
            How I Can Help
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-[#E8E1D8] bg-[#F8F5F0] p-8">
              <h3 className="text-2xl font-medium">Individual Counseling</h3>
              <p className="mt-4 leading-7 text-[#5F665F]">
                Personalized nutrition counseling for adolescents and adults
                struggling with eating disorders and disordered eating.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8E1D8] bg-[#F8F5F0] p-8">
              <h3 className="text-2xl font-medium">Family Support</h3>
              <p className="mt-4 leading-7 text-[#5F665F]">
                Guidance for parents and caregivers navigating meals, recovery,
                and supporting a loved one.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E8E1D8] bg-[#F8F5F0] p-8">
              <h3 className="text-2xl font-medium">Groups</h3>
              <p className="mt-4 leading-7 text-[#5F665F]">
                Yoga, meal support, mindfulness, and nutrition education groups
                offered throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light">
            Over 20 Years of Experience
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#5F665F]">
            Justine Roth, MS, RD, CEDS-S is a Registered Dietitian and Certified
            Eating Disorders Specialist with more than two decades of experience
            helping individuals and families navigate recovery with compassion,
            collaboration, and evidence-based care.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block rounded-full border border-[#536857] px-8 py-4 text-[#536857] transition hover:bg-white"
          >
            Meet Justine
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#536857] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-light">
            Ready to get started?
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Reach out to schedule an appointment or learn more about current
            services and group offerings.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-medium text-[#536857] transition hover:bg-[#F8F5F0]"
          >
            Contact Justine
          </Link>
        </div>
      </section>
    </main>
  );
}
