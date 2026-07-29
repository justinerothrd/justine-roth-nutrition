export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Mobile introduction */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:hidden">
        <div className="mx-auto max-w-md">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1]">
            Contact
          </p>

          <h1 className="font-heading mt-4 text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em]">
            Get in touch.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#687785]">
            In-person appointments in New York City as well as virtual meetings
            are available.
          </p>
        </div>
      </section>

      {/* Tablet and desktop introduction */}
      <section className="hidden border-b border-[#E4EBF0] px-8 py-12 sm:block lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Contact
          </p>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[0.9fr_auto_1.1fr] lg:gap-10">
            <div>
              <h1 className="font-heading text-[2.75rem] font-normal leading-[1.04] tracking-[-0.04em] md:text-[3.15rem] lg:text-[3.6rem]">
                Get in touch.
              </h1>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#D7E4EC] to-transparent lg:block"
            />

            <div className="max-w-xl text-[1.05rem] leading-8 text-[#687785]">
              <p>
                In-person appointments in New York City as well as virtual
                meetings are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="border-b border-[#E4EBF0] bg-white">
        {/* Blue heading band */}
        <div className="bg-[#EAF1F5] px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          <div className="mx-auto max-w-6xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#718CA2] sm:text-xs sm:tracking-[0.26em]">
              Send a Message
            </p>

            <h2 className="font-heading mt-3 max-w-2xl text-[1.8rem] font-normal leading-[1.08] tracking-[-0.03em] sm:text-3xl">
              Tell me a little about what you are looking for.
            </h2>
          </div>
        </div>

        {/* Form area */}
        <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <aside className="max-w-sm">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
                What Happens Next
              </p>

              <p className="mt-4 text-base leading-7 text-[#687785]">
                After you submit the form, I&apos;ll follow up to learn more
                about your needs, answer questions, and discuss whether working
                together may be a good fit.
              </p>
            </aside>

            <form className="space-y-8">
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
                  required
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base text-[#34414E] outline-none transition-colors focus:border-[#718CA2]"
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
                  required
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base text-[#34414E] outline-none transition-colors focus:border-[#718CA2]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#34414E]"
                >
                  Phone
                  <span className="ml-1 font-normal text-[#7F8A94]">
                    (optional)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base text-[#34414E] outline-none transition-colors focus:border-[#718CA2]"
                />
              </div>

              <fieldset>
                <legend className="mb-4 text-sm font-medium text-[#34414E]">
                  Appointment Preference
                </legend>

                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#687785]">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="in-person"
                      className="h-4 w-4 accent-[#718CA2]"
                    />
                    In Person
                  </label>

                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="virtual"
                      className="h-4 w-4 accent-[#718CA2]"
                    />
                    Virtual
                  </label>

                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="either"
                      className="h-4 w-4 accent-[#718CA2]"
                    />
                    Either
                  </label>
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#34414E]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base leading-7 text-[#34414E] outline-none transition-colors focus:border-[#718CA2]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#718CA2] px-6 text-sm font-medium text-white transition-colors hover:bg-[#607D93]"
              >
                Send Message
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
