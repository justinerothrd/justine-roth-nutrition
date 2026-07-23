import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#2F332F]">
      {/* About Intro */}
      <section className="px-6 pt-16 pb-20">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-[350px_1fr] md:items-start">

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E8E1D8]">
            <Image
              src="/justine-roth-headshot.jpg"
              alt="Justine Roth"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#536857]">
              About
            </p>

            <h1 className="text-4xl font-light md:text-5xl">
              Justine Roth, MS, RD, CEDS-S
            </h1>

            <p className="mt-8 text-lg leading-8 text-[#5F665F]">
              I am a Registered Dietitian and Certified Eating Disorders
              Specialist dedicated to helping adolescents, adults, and
              families navigate eating disorders, recovery, and
              nutrition-related concerns with compassion and practical
              support.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5F665F]">
              For more than two decades, I have worked in eating disorders,
              mental health nutrition, and multidisciplinary treatment,
              supporting individuals and families through every stage of
              recovery.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#5F665F]">
              My goal is to provide evidence-based nutrition care in a warm,
              collaborative environment where clients feel supported,
              understood, and empowered.
            </p>
          </div>

        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#FFFDF8] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-light">
            Credentials & Experience
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-[#E8E1D8] p-8">
              <h3 className="text-xl font-medium">
                Education & Credentials
              </h3>

              <ul className="mt-5 space-y-3 text-[#5F665F]">
                <li>Master of Science</li>
                <li>Registered Dietitian (RD)</li>
                <li>Certified Eating Disorders Specialist & Supervisor (CEDS-S)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#E8E1D8] p-8">
              <h3 className="text-xl font-medium">
                Areas of Expertise
              </h3>

              <ul className="mt-5 space-y-3 text-[#5F665F]">
                <li>Eating Disorders</li>
                <li>ARFID</li>
                <li>Family-Based Treatment Support</li>
                <li>Medical Nutrition Therapy</li>
                <li>Professional Consultation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light">
            My Philosophy
          </h2>

          <p className="mt-8 text-xl leading-9 text-[#5F665F]">
            Recovery is not about perfection. It is about building trust,
            flexibility, and confidence around food while creating a life
            that feels meaningful and sustainable.
          </p>
        </div>
      </section>
    </main>
  );
}
