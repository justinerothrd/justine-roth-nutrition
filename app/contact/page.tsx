export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Intro */}
      <section className="border-b border-[#E4EBF0] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Contact
            </p>

            <h1 className="font-heading mt-5 text-3xl font-normal leading-tight tracking-[-0.035em] sm:text-4xl md:text-[3rem]">
              Get in touch.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#687785]">
              Reach out to learn more about eating disorder nutrition
              counseling, ARFID support, family support, or professional
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Form and information */}
      <section className="border-b border-[#E4EBF0] px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Send a Message
            </p>

            <form className="mt-7 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#34414E]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors placeholder:text-[#9AA6B1] focus:border-[#829CB1]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#34414E]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors placeholder:text-[#9AA6B1] focus:border-[#829CB1]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#34414E]"
                >
                  Phone
                  <span className="ml-1 font-normal text-[#82909C]">
                    Optional
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors placeholder:text-[#9AA6B1] focus:border-[#829CB1]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#34414E]"
                >
                  How can I help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full resize-y border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors placeholder:text-[#9AA6B1] focus:border-[#829CB1]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 border-b border-[#829CB1] pb-1 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
              >
                Send Message
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>

          <aside className="border-t border-[#DCE6ED] pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Information
            </p>

            <div className="mt-7 divide-y divide-[#E4EBF0] border-y border-[#E4EBF0]">
              <div className="py-6">
                <h2 className="font-heading text-xl font-normal tracking-[-0.025em]">
                  Virtual Appointments
                </h2>

                <p className="mt-3 leading-7 text-[#687785]">
                  Available for adolescents, adults, and families.
                </p>
              </div>

              <div className="py-6">
                <h2 className="font-heading text-xl font-normal tracking-[-0.025em]">
                  Areas of Focus
                </h2>

                <p className="mt-3 leading-7 text-[#687785]">
                  Eating disorders, ARFID, nutrition counseling, family
                  support, and professional consultation.
                </p>
              </div>

              <div className="py-6">
                <h2 className="font-heading text-xl font-normal tracking-[-0.025em]">
                  Getting Started
                </h2>

                <p className="mt-3 leading-7 text-[#687785]">
                  Complete the form with a brief description of what you are
                  looking for and the best way to reach you.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Closing */}
      <section className="border-b border-[#DCE6ED] bg-[#F3F7FA] px-6 py-12 md:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Next Steps
          </p>

          <h2 className="font-heading mt-3 max-w-2xl text-3xl font-normal leading-tight tracking-[-0.03em]">
            Share a little about what you are looking for.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#687785]">
            Your message can include the type of support you are seeking,
            whether care is for you or a family member, and any questions you
            have about services.
          </p>
        </div>
      </section>
    </main>
  );
}
