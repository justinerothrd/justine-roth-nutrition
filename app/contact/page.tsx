export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Heading */}
      <section className="border-b border-[#E4EBF0] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Contact
          </p>

          <h1 className="font-heading mt-5 text-3xl font-normal leading-tight tracking-[-0.035em] sm:text-4xl md:text-[3rem]">
            Get in touch.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#687785]">
            In-person appointments in New York City and virtual appointments
            are available.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="border-b border-[#E4EBF0] px-6 py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <form className="space-y-7">
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
                  className="w-full border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors focus:border-[#829CB1]"
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
                  className="w-full border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors focus:border-[#829CB1]"
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
                  className="w-full border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors focus:border-[#829CB1]"
                />
              </div>

              <fieldset>
                <legend className="mb-4 text-sm font-medium text-[#34414E]">
                  Appointment preference
                </legend>

                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#687785]">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="in-person"
                      className="h-4 w-4 accent-[#829CB1]"
                    />
                    In person
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="virtual"
                      className="h-4 w-4 accent-[#829CB1]"
                    />
                    Virtual
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="either"
                      className="h-4 w-4 accent-[#829CB1]"
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
                  How can I help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-y border-0 border-b border-[#C9D6DF] bg-transparent px-0 py-3 text-[#34414E] outline-none transition-colors focus:border-[#829CB1]"
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
        </div>
      </section>
    </main>
  );
}
