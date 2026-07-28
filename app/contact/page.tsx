export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Intro */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Contact
            </p>

            <h1 className="font-heading mt-5 text-3xl font-normal leading-tight tracking-[-0.035em] sm:text-4xl md:text-[3rem]">
              Get in touch.
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#687785]">
              In-person appointments in New York City and virtual appointments
              available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F3F7FA] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
              Send a Message
            </p>

            <form className="mt-8 space-y-8">
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
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-[#34414E] outline-none transition focus:border-[#829CB1]"
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
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-[#34414E] outline-none transition focus:border-[#829CB1]"
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
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-[#34414E] outline-none transition focus:border-[#829CB1]"
                />
              </div>

              <fieldset>
                <legend className="mb-4 text-sm font-medium text-[#34414E]">
                  Appointment Preference
                </legend>

                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#687785]">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="in-person"
                      className="accent-[#829CB1]"
                    />
                    In Person
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="virtual"
                      className="accent-[#829CB1]"
                    />
                    Virtual
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="appointmentPreference"
                      value="either"
                      className="accent-[#829CB1]"
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
                  rows={6}
                  required
                  className="w-full resize-none border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-[#34414E] outline-none transition focus:border-[#829CB1]"
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
