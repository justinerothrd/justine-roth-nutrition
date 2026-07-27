import Link from "next/link";

function IndividualIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M11 39c1.2-8 6.2-12 13-12s11.8 4 13 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <circle cx="24" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12.5" cy="18" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="35.5" cy="18" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15 39c.8-7 4.2-10.5 9-10.5S32.2 32 33 39"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4.5 38c.6-5.8 3.2-8.8 7.3-8.8 2.2 0 4 .9 5.3 2.5M43.5 38c-.6-5.8-3.2-8.8-7.3-8.8-2.2 0-4 .9-5.3 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArfidIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path
        d="M12 34c11 0 18-7 19-20-11 1-18 8-19 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M17 29c5-5 10-9 18-12M24 27c4 1 8 4 10 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultationIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect
        x="12"
        y="9"
        width="24"
        height="31"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M19 9V6h10v3M18 18h12M18 24h12M18 30h8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Individual Counseling",
    description:
      "Personalized nutrition counseling for adolescents and adults.",
    icon: <IndividualIcon />,
  },
  {
    title: "Family Support",
    description:
      "Guidance and support for parents, caregivers, and loved ones.",
    icon: <FamilyIcon />,
  },
  {
    title: "ARFID Support",
    description:
      "Specialized care for selective eating, sensory concerns, and ARFID.",
    icon: <ArfidIcon />,
  },
  {
    title: "Professional Consultation",
    description:
      "Consultation for clinicians, schools, programs, and treatment teams.",
    icon: <ConsultationIcon />,
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#33404D]">
      {/* Hero */}
      <section className="border-b border-[#E4EBF0]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex items-center px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">
            <div className="max-w-xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                Eating Disorder Nutrition Counseling
              </p>

              <h1 className="mt-7 text-[2.9rem] font-normal leading-[1.12] tracking-[-0.045em] text-[#34414E] sm:text-5xl md:text-[3.7rem]">
                Compassionate nutrition care for lasting change.
              </h1>

              <div className="mt-8 h-px w-10 bg-[#AFC0CD]" />

              <p className="mt-7 max-w-lg text-base leading-8 text-[#667482] sm:text-lg">
                Evidence-based nutrition counseling for adolescents, adults,
                and families navigating eating disorders, ARFID, recovery, and
                nutrition-related concerns.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#829CB1] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#708A9F]"
                >
                  Schedule a Consultation
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 px-2 py-3 text-sm font-medium text-[#718CA2] transition hover:text-[#526D83]"
                >
                  Learn About Justine
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative image area — replace later with a real photo */}
          <div className="relative hidden min-h-[600px] overflow-hidden bg-[#F5F7F8] lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F3F6F8] to-[#E8EEF2]" />

            <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-[#E5E8E9]" />

            <div className="absolute bottom-[22%] left-[18%] h-72 w-44 rounded-[50%_50%_42%_42%] bg-[#FDFDFD] shadow-[0_20px_50px_rgba(79,94,105,0.12)]">
              <div className="absolute left-1/2 top-[-150px] h-48 w-px -translate-x-1/2 bg-[#879A8D]" />

              <div className="absolute left-[45%] top-[-135px] h-28 w-20 rotate-[-18deg] rounded-[100%_0_100%_0] border border-[#9BAEA0] bg-[#D6DFD8]" />
              <div className="absolute right-[28%] top-[-105px] h-24 w-16 rotate-[28deg] rounded-[100%_0_100%_0] border border-[#9BAEA0] bg-[#CAD6CD]" />
              <div className="absolute left-[18%] top-[-80px] h-20 w-14 rotate-[-35deg] rounded-[100%_0_100%_0] border border-[#9BAEA0] bg-[#DCE4DE]" />
            </div>

            <div className="absolute bottom-[14%] right-[10%] h-3 w-40 rounded-full bg-[#D1D5D8]" />
            <div className="absolute bottom-[11%] right-[8%] h-3 w-44 rounded-full bg-[#C4C9CD]" />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#F2F7FA] px-6 py-12 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3 md:gap-0">
          <div className="md:border-r md:border-[#D8E2E9] md:px-10">
            <p className="text-3xl font-normal tracking-[-0.04em] text-[#7793AA]">
              20+
            </p>
            <p className="mt-2 text-sm font-medium text-[#34414E]">
              Years of Experience
            </p>
            <div className="mx-auto mt-5 h-px w-8 bg-[#91A8BA]" />
            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#697887]">
              Specialized nutrition care grounded in decades of clinical
              experience.
            </p>
          </div>

          <div className="md:border-r md:border-[#D8E2E9] md:px-10">
            <p className="text-3xl font-normal tracking-[-0.04em] text-[#7793AA]">
              RD, CEDS-S
            </p>
            <p className="mt-2 text-sm font-medium text-[#34414E]">
              Registered Dietitian
            </p>
            <div className="mx-auto mt-5 h-px w-8 bg-[#91A8BA]" />
            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#697887]">
              Certified Eating Disorders Specialist and Supervisor.
            </p>
          </div>

          <div className="md:px-10">
            <p className="text-3xl font-normal tracking-[-0.04em] text-[#7793AA]">
              Collaborative
            </p>
            <p className="mt-2 text-sm font-medium text-[#34414E]">
              Individualized Care
            </p>
            <div className="mx-auto mt-5 h-px w-8 bg-[#91A8BA]" />
            <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-[#697887]">
              Practical support coordinated with families and treatment teams.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Services
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-[-0.04em] text-[#34414E] sm:text-4xl">
              Care tailored to you.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#697887]">
              Whether you are seeking support for yourself or a loved one,
              services are individualized and collaborative.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`text-center lg:px-8 ${
                  index < services.length - 1
                    ? "lg:border-r lg:border-[#E0E7EC]"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4F7] text-[#7690A6]">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-base font-medium text-[#34414E]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#697887]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#94AABD] px-8 py-3 text-sm font-medium text-[#6D879D] transition hover:bg-[#F2F7FA]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t border-[#E4EBF0] bg-[#F8FBFD]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          {/* Decorative room image placeholder */}
          <div className="relative min-h-[380px] overflow-hidden bg-[#E9ECEE] md:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#EEECEA] via-[#E4E4E2] to-[#D9DDDF]" />

            <div className="absolute bottom-0 left-0 h-[44%] w-[58%] rounded-tr-[5rem] bg-[#D1D0CD]" />

            <div className="absolute bottom-[13%] right-[22%] h-24 w-24 rounded-full bg-[#C3B9A9] shadow-lg" />
            <div className="absolute bottom-[13%] right-[18%] h-3 w-32 rounded-full bg-[#AFA89F]" />

            <div className="absolute bottom-[25%] right-[28%] h-36 w-20 rounded-[45%] bg-[#F7F7F6]" />
            <div className="absolute bottom-[49%] right-[34%] h-24 w-px bg-[#839487]" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-xl">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
                About Justine
              </p>

              <h2 className="mt-5 text-3xl font-normal leading-[1.25] tracking-[-0.04em] text-[#34414E] sm:text-4xl">
                Nutrition is more than food. It is connection, healing, and
                hope.
              </h2>

              <div className="mt-7 h-px w-10 bg-[#AFC0CD]" />

              <p className="mt-7 text-base leading-8 text-[#697887]">
                With more than 20 years of experience, I provide warm,
                nonjudgmental care that meets clients where they are and helps
                them move toward a more flexible relationship with food.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#718CA2] transition hover:text-[#526D83]"
              >
                Learn more about my approach
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Groups */}
      <section className="border-t border-[#E4EBF0] bg-white px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#829CB1]">
              Current Offerings
            </p>

            <h2 className="mt-3 text-2xl font-normal tracking-[-0.035em] text-[#34414E]">
              Group schedule now available
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#697887]">
              View current meal-support, mindfulness, movement, and yoga
              offerings.
            </p>
          </div>

          <Link
            href="/groups"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#94AABD] px-7 py-3 text-sm font-medium text-[#6D879D] transition hover:bg-[#F2F7FA]"
          >
            View Group Schedule
          </Link>
        </div>
      </section>
    </main>
  );
}
