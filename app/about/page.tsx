import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Mobile introduction */}
      <section className="border-b border-[#E4EBF0] sm:hidden">
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#F3F7FA]">
          <Image
            src="/IMG_2310.jpeg"
            alt="Justine Roth, registered dietitian and eating disorder specialist"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>

        <div className="px-6 py-9">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1]">
            About
          </p>

          <h1 className="font-heading mt-4 text-[2rem] font-normal leading-[1.08] tracking-[-0.035em]">
            Justine Roth, MS, RD, CEDS-C
          </h1>

          <div className="mt-6 space-y-4 text-base leading-7 text-[#687785]">
            <p>
              I am a registered dietitian and Certified Eating Disorders
              Specialist and Supervisor dedicated to helping adolescents,
              adults, and families navigate eating disorders, ARFID, and
              recovery.
            </p>

            <p>
              For more than two decades, I have worked in eating disorders and
              mental health nutrition across all stages of recovery.
            </p>

            <p>
              My approach combines evidence-based care with practical,
              individualized support designed to build greater trust and
              confidence around food.
            </p>
          </div>
        </div>
      </section>

      {/* Tablet and desktop introduction */}
      <section className="hidden border-b border-[#E4EBF0] px-6 py-12 sm:block md:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[300px_1fr] md:items-start md:gap-14">
          <div className="w-full bg-[#F3F7FA]">
  <Image
    src="/IMG_2310.jpeg"
    alt="Justine Roth, registered dietitian and eating disorder specialist"
    width={1200}
    height={1500}
    className="h-auto w-full"
    sizes="100vw"
    priority
  />
</div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              About
            </p>

            <h1 className="font-heading mt-5 text-4xl font-normal leading-tight tracking-[-0.035em] md:text-[3rem]">
              Justine Roth, MS, RD, CEDS-C
            </h1>

            <div className="mt-7 space-y-5 text-lg leading-8 text-[#687785]">
              <p>
                I am a registered dietitian and Certified Eating Disorders
                Specialist and Supervisor dedicated to helping adolescents,
                adults, and families navigate eating disorders, ARFID,
                recovery, and nutrition-related concerns.
              </p>

              <p>
                For more than two decades, I have worked in eating disorders
                and mental health nutrition, supporting individuals across all
                stages of recovery and collaborating closely with
                multidisciplinary treatment teams.
              </p>

              <p>
                My approach combines evidence-based care with practical,
                individualized support. Together, we work toward creating a
                healthier relationship with food by normalizing eating
                behaviors and developing the skills to make mindful decisions
                around food and your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-[#DCE6ED] bg-[#F3F7FA] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl md:grid md:grid-cols-[0.75fr_1.25fr] md:gap-14">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              My Philosophy
            </p>

            <h2 className="font-heading mt-3 max-w-[18ch] text-[1.75rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
              Health does not require dieting or deprivation.
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8 md:mt-0 md:space-y-5">
            <p>
              A healthy relationship with food is built through trust,
              flexibility, and confidence—not rigid rules.
            </p>

            <p>
              Food is an important part of life, but everyday meal choices
              should not feel overwhelming. What you eat does not define your
              worth, and foods do not need to be categorized as good or bad.
            </p>

            <p className="font-medium text-[#34414E]">
              Recovery is not about perfection. It is about creating a
              relationship with food and your body that feels sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
            Career History &amp; Experience
          </p>

          <div className="mt-6 border-t border-[#E4EBF0] sm:mt-8">
            <article className="border-b border-[#E4EBF0] py-7 md:grid md:grid-cols-[0.75fr_1.25fr] md:gap-14 md:py-8">
              <h2 className="font-heading text-[1.45rem] font-normal leading-tight tracking-[-0.025em] sm:text-2xl">
                New York State Psychiatric Institute
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-[#687785] md:mt-0">
                <p>
                  In addition to private practice, I direct the nutrition
                  department at the New York State Psychiatric Institute, an
                  inpatient hospital affiliated with Columbia University
                  Irving Medical Center.
                </p>

                <p>
                  I work as part of a multidisciplinary team caring for
                  individuals with eating disorders, depression, and other
                  psychiatric illnesses.
                </p>
              </div>
            </article>

            <article className="border-b border-[#E4EBF0] py-7 md:grid md:grid-cols-[0.75fr_1.25fr] md:gap-14 md:py-8">
              <h2 className="font-heading text-[1.45rem] font-normal leading-tight tracking-[-0.025em] sm:text-2xl">
                Columbia East Side
              </h2>

              <p className="mt-4 text-base leading-7 text-[#687785] md:mt-0">
                Before opening my private practice, I served as the registered
                dietitian for the Columbia East Side Intensive Outpatient
                Program, where I developed nutrition groups and therapeutic
                meals for individuals with anorexia nervosa, bulimia nervosa,
                and binge eating disorder.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Education and credentials */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl md:grid md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Education
            </p>

            <div className="mt-5 space-y-4 text-base leading-7 text-[#687785] sm:mt-6 sm:space-y-5">
              <p>
                Bachelor&apos;s degree in Nutrition and Dietetics from the
                University of Delaware.
              </p>

              <p>
                Dietetic internship at the College of Saint Elizabeth in New
                Jersey.
              </p>

              <p>
                Master of Science in Nutrition Education from Teachers College,
                Columbia University.
              </p>
            </div>
          </div>

          <div className="mt-9 border-t border-[#E4EBF0] pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Licenses &amp; Certifications
            </p>

            <ul className="mt-5 space-y-4 text-base leading-7 text-[#687785] sm:mt-6">
              <li>Registered Dietitian</li>
              <li>New York State Certified Dietitian-Nutritionist</li>
              <li>Certified Eating Disorders Specialist and Supervisor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional affiliations */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl md:grid md:grid-cols-[0.75fr_1.25fr] md:gap-14">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Professional Affiliations
            </p>

            <h2 className="font-heading mt-3 max-w-[19ch] text-[1.75rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
              Connected to the broader nutrition and eating-disorder community.
            </h2>
          </div>

          <ul className="mt-7 space-y-4 border-t border-[#E4EBF0] pt-6 text-base leading-7 text-[#687785] md:mt-0 md:border-t-0 md:pt-0">
            <li>Academy of Nutrition and Dietetics</li>
            <li>Nutrition Entrepreneurs Dietetic Practice Group</li>
            <li>Behavioral Health Nutrition Dietetic Practice Group</li>
            <li>Greater New York Dietetic Association</li>
            <li>
              International Association of Eating Disorders Professionals
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#F3F7FA] px-6 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-5xl md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 max-w-[18ch] text-[1.75rem] font-normal leading-[1.1] tracking-[-0.03em] sm:max-w-none sm:text-3xl">
              Ready to learn more about working together?
            </h2>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#829CB1] pb-1 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83] md:mt-0"
          >
            Schedule a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
