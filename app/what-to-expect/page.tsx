import Link from "next/link";

const firstAppointmentTopics = [
  "Medical and nutrition history",
  "Current eating patterns",
  "Relationship with food",
  "Goals and concerns",
  "Treatment recommendations",
  "Questions you may have",
];

const questions = [
  {
    question: "Do I need a referral?",
    answer:
      "A referral is not typically required to schedule an appointment. Depending on your insurance plan, you may want to confirm whether a referral is needed for reimbursement.",
  },
  {
    question: "Do you work with adolescents and adults?",
    answer:
      "Yes. Nutrition counseling is available for adolescents and adults, with family involvement included when appropriate.",
  },
  {
    question: "Can parents or caregivers participate?",
    answer:
      "Yes. Parents and caregivers may participate in appointments when their involvement would be helpful, particularly when supporting an adolescent or a loved one in recovery.",
  },
  {
    question: "Are virtual appointments available?",
    answer:
      "Yes. In-person appointments are available in New York City, and virtual appointments are also offered.",
  },
  {
    question: "How long will I need nutrition counseling?",
    answer:
      "The length of treatment varies based on your goals, current needs, and stage of recovery. We will regularly review your progress and adjust the plan together.",
  },
];

export default function WhatToExpectPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Mobile introduction */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:hidden">
        <div className="mx-auto max-w-md">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1]">
            What to Expect
          </p>

          <h1 className="font-heading mt-4 max-w-[14ch] text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em]">
            Nutrition counseling should feel supportive, practical, and
            individualized.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#687785]">
            Every person&apos;s relationship with food is different.
            Appointments are tailored to your goals, concerns, and stage of
            recovery.
          </p>
        </div>
      </section>

      {/* Tablet and desktop introduction */}
      <section className="hidden border-b border-[#E4EBF0] px-8 py-12 sm:block lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            What to Expect
          </p>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.15fr_auto_0.85fr] lg:gap-10 xl:gap-12">
            <div>
              <h1 className="font-heading max-w-[16ch] text-[2.75rem] font-normal leading-[1.04] tracking-[-0.04em] md:text-[3.15rem] lg:text-[3.6rem]">
                Nutrition counseling should feel supportive, practical, and
                individualized.
              </h1>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#D7E4EC] to-transparent lg:block"
            />

            <div className="max-w-xl text-[1.05rem] leading-8 text-[#687785]">
              <p>
                Every person&apos;s relationship with food is different.
                Appointments are tailored to your goals, concerns, and stage of
                recovery.
              </p>

              <p className="mt-4 font-medium text-[#34414E]">
                There is no one-size-fits-all approach to nutrition counseling.
                Treatment should reflect your individual history and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First appointment */}
      <section className="border-b border-[#E4EBF0] bg-white">
        <div className="bg-[#EAF1F5] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#718CA2] sm:text-xs sm:tracking-[0.26em]">
              Your First Appointment
            </p>

            <h2 className="font-heading mt-3 max-w-4xl text-[1.8rem] font-normal leading-[1.08] tracking-[-0.03em] sm:text-3xl">
              A chance to understand your history, goals, and current needs.
            </h2>
          </div>
        </div>

        <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
            <div>
              <p className="text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
                Our first session is an opportunity to get to know one another
                and begin developing a plan that feels realistic, supportive,
                and individualized.
              </p>
            </div>

            <div className="grid border-t border-[#E4EBF0] sm:grid-cols-2">
              {firstAppointmentTopics.map((topic, index) => (
                <div
                  key={topic}
                  className={`border-b border-[#E4EBF0] py-5 sm:px-5 ${
                    index % 2 === 1 ? "sm:border-l" : "sm:pl-0"
                  }`}
                >
                  <p className="text-base leading-7 text-[#34414E]">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing sessions */}
      <section className="border-b border-[#DCE6ED] bg-[#F6F9FB] px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Ongoing Sessions
            </p>

            <h2 className="font-heading mt-3 max-w-[17ch] text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
              Building confidence and flexibility over time.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
            <p>
              Follow-up appointments are collaborative and evolve as your needs
              change. We will review progress, address challenges, and adjust
              recommendations together.
            </p>

            <p>
              Sessions may focus on meal planning, food flexibility,
              challenging food rules, exposure work, grocery shopping, social
              situations, recovery support, family concerns, or other goals
              related to your relationship with food and your body.
            </p>
          </div>
        </div>
      </section>

      {/* Frequency */}
      <section className="border-b border-[#E4EBF0] bg-white px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Meeting Frequency
            </p>

            <h2 className="font-heading mt-3 max-w-[16ch] text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
              The schedule should fit your level of support.
            </h2>
          </div>

          <div className="text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
            <p>
              Some clients benefit from weekly appointments, while others meet
              every other week, monthly, or as needed. Together, we will
              determine a schedule based on your goals, current needs, and
              stage of recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance and appointments */}
      <section className="border-b border-[#E4EBF0] bg-white px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
            Practical Information
          </p>

          <div className="mt-7 grid border-t border-[#E4EBF0] md:grid-cols-2">
            <div className="border-b border-[#E4EBF0] py-8 md:border-b-0 md:border-r md:pr-12">
              <h2 className="font-heading text-[1.65rem] font-normal leading-tight tracking-[-0.03em] sm:text-2xl">
                Insurance
              </h2>

              <ul className="mt-5 space-y-4 text-base leading-7 text-[#687785]">
                <li>In-network with Cigna</li>
                <li>
                  Superbills are available for possible out-of-network
                  reimbursement
                </li>
                <li>
                  Coverage and reimbursement vary by plan and should be
                  confirmed directly with your insurer
                </li>
              </ul>
            </div>

            <div className="py-8 md:pl-12">
              <h2 className="font-heading text-[1.65rem] font-normal leading-tight tracking-[-0.03em] sm:text-2xl">
                Appointments
              </h2>

              <ul className="mt-5 space-y-4 text-base leading-7 text-[#687785]">
                <li>In-person and virtual appointments are available</li>
                <li>Payment is due at the time of service</li>
                <li>Fees are discussed before scheduling</li>
                <li>A 24-hour cancellation policy applies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="border-b border-[#E4EBF0] bg-white px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
                Common Questions
              </p>

              <h2 className="font-heading mt-3 max-w-[16ch] text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
                A few things you may be wondering.
              </h2>
            </div>

            <div className="border-t border-[#E4EBF0]">
              {questions.map((item) => (
                <details
                  key={item.question}
                  className="group border-b border-[#E4EBF0]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-medium text-[#34414E] sm:text-lg">
                    {item.question}

                    <span
                      aria-hidden="true"
                      className="text-xl font-normal text-[#829CB1] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <p className="max-w-2xl pb-6 text-base leading-7 text-[#687785]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#F6F9FB] px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
              Ready to learn more about working together?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
              Whether you are ready to schedule or simply have questions,
              I&apos;d be happy to hear from you.
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
