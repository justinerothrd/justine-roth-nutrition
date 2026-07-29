import Link from "next/link";

const services = [
  {
    title: "Eating Disorder Recovery",
    description:
      "Support for anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and disordered eating.",
  },
  {
    title: "Individual Nutrition Counseling",
    description:
      "Personalized care for adolescents and adults using a mindful, non-diet approach.",
  },
  {
    title: "Families & Groups",
    description:
      "Support for parents and caregivers, meal support, mindfulness, and current group offerings.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-[#34414E]">
      <section className="border-b border-[#DDE4E9]">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#718CA2]">
              Nutrition counseling for adolescents, adults, and families
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.045em] text-[#34414E] sm:text-6xl lg:text-7xl">
              What does healthy mean to you?
            </h1>

            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[#5E6A74]">
              <p>Healthy means something different for everyone.</p>
              <p>
                Health often becomes defined by the number on the scale,
                yesterday&apos;s workout, or the foods we believe we should or
                shouldn&apos;t eat.
              </p>
              <p>
                Nutrition counseling can help reduce stress around food and
                support a more flexible, confident, and sustainable
                relationship with eating.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#718CA2] px-7 text-sm font-semibold tracking-wide text-white transition hover:bg-[#637D92]"
              >
                Schedule a Consultation
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center px-3 text-sm font-semibold tracking-wide text-[#526D82] transition hover:text-[#34414E]"
              >
                About Justine <span aria-hidden="true">&nbsp;→</span>
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[440px] lg:block">
            <div className="absolute inset-x-8 top-8 h-[330px] rounded-[3rem] bg-[#EDF2F5]" />
            <div className="absolute bottom-6 left-0 max-w-sm rounded-[2.25rem] border border-[#D6E0E7] bg-white p-8 shadow-[0_24px_70px_rgba(52,65,78,0.10)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#829CB1]">
                A different kind of care
              </p>
              <p className="mt-5 text-2xl font-medium leading-snug tracking-[-0.025em] text-[#34414E]">
                Practical, evidence-based nutrition care that feels
                collaborative—not overwhelming.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full border-[18px] border-[#B8C8D3]" />
            <div className="absolute bottom-20 right-8 h-16 w-16 rounded-full bg-[#829CB1]" />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FA]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718CA2]">
                Services
              </p>
              <h2 className="mt-5 max-w-md text-4xl font-medium leading-tight tracking-[-0.035em] text-[#34414E] sm:text-5xl">
                Support built around the person—not a set of rigid rules.
              </h2>
            </div>

            <div className="divide-y divide-[#D7E0E6] border-y border-[#D7E0E6]">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="grid gap-4 py-8 sm:grid-cols-[48px_1fr]"
                >
                  <span className="pt-1 text-sm font-medium text-[#829CB1]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#34414E]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7 text-[#66737D]">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}

              <div className="py-7">
                <Link
                  href="/services"
                  className="text-sm font-semibold tracking-wide text-[#526D82] transition hover:text-[#34414E]"
                >
                  Explore all services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-12 lg:py-28">
          <div className="relative min-h-[390px] overflow-hidden rounded-[2.5rem] bg-[#E9EFF3]">
            <div className="absolute -left-12 top-12 h-56 w-56 rounded-full border-[34px] border-white/70" />
            <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-20 translate-y-20 rounded-full bg-[#B8C8D3]" />
            <div className="absolute bottom-10 left-10 right-10 rounded-[2rem] bg-white/90 p-7 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.17em] text-[#718CA2]">
                20+ Years
              </p>
              <p className="mt-2 text-xl font-medium text-[#34414E]">
                Of specialized experience
              </p>
            </div>
          </div>

          <div className="max-w-xl lg:pl-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718CA2]">
              Meet Justine
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.035em] text-[#34414E] sm:text-5xl">
              Experienced nutrition care without judgment or rigid rules.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#66737D]">
              Justine Roth, MS, RD, CEDS-C is a registered dietitian
              specializing in eating disorders, ARFID, and nutrition
              counseling. She works with adolescents, adults, and families
              using a practical, evidence-based, non-diet approach.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-semibold tracking-wide text-[#526D82] transition hover:text-[#34414E]"
            >
              Learn more about Justine <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#9EB2C1] bg-[#F5F8FA] px-7 py-14 sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-14 lg:py-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718CA2]">
              Get started
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] text-[#34414E] sm:text-4xl">
              Ready to feel more confident and less overwhelmed around food?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#66737D]">
              Together, we&apos;ll work to define what healthy looks
              like—for you.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#718CA2] px-7 text-sm font-semibold tracking-wide text-white transition hover:bg-[#637D92] lg:mt-0"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
