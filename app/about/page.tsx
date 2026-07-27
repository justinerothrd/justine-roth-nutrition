import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] text-[#2C3138]">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[360px_1fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E7EEF3]">
            <Image
              src="/justine-roth-headshot.jpg"
              alt="Justine Roth, registered dietitian and eating disorder specialist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 360px"
              priority
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
              About
            </p>

            <h1 className="font-display mt-5 text-5xl font-normal leading-[1] tracking-[-0.025em] sm:text-6xl">
              Justine Roth, MS, RD, CEDS-S
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#68727E]">
              <p>
                I am a registered dietitian and Certified Eating Disorders
                Specialist and Supervisor dedicated to helping adolescents,
                adults, and families navigate eating disorders, recovery, and
                nutrition-related concerns.
              </p>

              <p>
                For more than two decades, I have worked in eating disorders
                and mental health nutrition, supporting individuals across all
                stages of recovery and collaborating closely with
                multidisciplinary treatment teams.
              </p>

              <p>
                My approach combines evidence-based care with practical,
                individualized support. We will work towards creating a healthy relationship with food by normalizing eating behaviors and developing the skills to make mindful decisions about food and your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7F9] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
                Experience
              </p>

              <h2 className="font-display mt-5 text-5xl font-normal leading-none sm:text-6xl">
                Specialized care grounded in experience.
              </h2>
            </div>

            <div className="border-t border-[#D9E2E8]">
              <div className="grid gap-4 border-b border-[#D9E2E8] py-8 md:grid-cols-[0.9fr_1.1fr]">
                <h3 className="font-display text-3xl">
                  Education & Credentials
                </h3>

                <ul className="space-y-3 text-[#68727E]">
                  <li>Master of Science</li>
                  <li>Registered Dietitian</li>
                  <li>Certified Eating Disorders Specialist and Supervisor</li>
                </ul>
              </div>

              <div className="grid gap-4 border-b border-[#D9E2E8] py-8 md:grid-cols-[0.9fr_1.1fr]">
                <h3 className="font-display text-3xl">Areas of Expertise</h3>

                <ul className="space-y-3 text-[#68727E]">
                  <li>Eating disorders and disordered eating</li>
                  <li>ARFID and selective eating</li>
                  <li>Adolescent and family support</li>
                  <li>Nutrition counseling</li>
                  <li>Professional consultation and supervision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7F96A8]">
            Philosophy
          </p>

          <h2 className="font-display mt-5 text-5xl font-normal leading-[1.02] sm:text-6xl">
            Recovery is not about perfection.
          </h2>

          <p className="mt-8 text-xl leading-9 text-[#68727E]">
            It is about building trust, flexibility, and confidence around food
            and your body that feels sustainable.
          </p>
        </div>
      </section>
    </main>
  );
}
