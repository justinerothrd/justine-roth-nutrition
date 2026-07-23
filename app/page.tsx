import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#2F332F]">
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="max-w-4xl text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Helping individuals and families build a healthier relationship
            with food.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[350px_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/justine-roth-headshot.jpg"
              alt="Justine Roth, registered dietitian and eating disorder specialist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-light">
              Justine Roth, MS, RD, CEDS-S
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#5F665F]">
              <p>
                I am a registered dietitian and Certified Eating Disorders
                Specialist dedicated to helping adolescents, adults, and
                families navigate eating disorders, recovery, and
                nutrition-related concerns with compassion and practical
                support.
              </p>

              <p>
                For more than two decades, I have worked in eating disorders
                and mental health nutrition, supporting individuals across
                all stages of recovery and collaborating closely with
                multidisciplinary treatment teams.
              </p>

              <p>
                My approach is rooted in evidence-based care while recognizing
                that every person&apos;s experience with food, body image, and
                recovery is unique. I strive to create a supportive space where
                clients feel heard, understood, and empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFDF8] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-light sm:text-4xl">
            Credentials &amp; Experience
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#E8E1D8] p-8">
              <h3 className="text-xl font-medium">Education &amp; Credentials</h3>

              <ul className="mt-5 space-y-3 text-[#5F665F]">
                <li>Master of Science</li>
                <li>Registered Dietitian</li>
                <li>Certified Eating Disorders Specialist and Supervisor</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#E8E1D8] p-8">
              <h3 className="text-xl font-medium">Areas of Expertise</h3>

              <ul className="mt-5 space-y-3 text-[#5F665F]">
                <li>Eating disorders and disordered eating</li>
                <li>ARFID and selective eating</li>
                <li>Adolescent and family support</li>
                <li>Nutrition counseling</li>
                <li>Professional consultation and supervision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light sm:text-4xl">My Philosophy</h2>

          <p className="mt-8 text-lg leading-8 text-[#5F665F] sm:text-xl sm:leading-9">
            Recovery is not about perfection. It is about building trust,
            flexibility, and confidence around food while creating a life that
            feels meaningful and sustainable.
          </p>
        </div>
      </section>
    </main>
  );
}
