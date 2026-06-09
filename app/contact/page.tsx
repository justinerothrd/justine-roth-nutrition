export default function ContactPage() {
  return (
    <main className="bg-[#F8F5F0] text-[#2F332F]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#536857]">
            Contact
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-6xl">
            Let's connect.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5F665F]">
            Reach out to learn more about nutrition counseling,
            eating disorder support, or consultation services.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_420px]">
          
          <div className="rounded-[2rem] bg-[#FFFDF8] p-10 shadow-sm">
            <h2 className="text-3xl font-light">
              Send a Message
            </h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-[#E8E1D8] bg-white px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-[#E8E1D8] bg-white px-5 py-4 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full rounded-xl border border-[#E8E1D8] bg-white px-5 py-4 outline-none"
              />

              <textarea
                rows={6}
                placeholder="How can I help?"
                className="w-full rounded-xl border border-[#E8E1D8] bg-white px-5 py-4 outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-[#536857] px-8 py-4 text-white transition hover:bg-[#435646]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] bg-[#FFFDF8] p-10 shadow-sm">
            <h2 className="text-3xl font-light">
              Information
            </h2>

            <div className="mt-8 space-y-6 text-[#5F665F]">
              <div>
                <p className="font-medium text-[#2F332F]">
                  Virtual Appointments
                </p>
                <p className="mt-2">
                  Available for adolescents, adults, and families.
                </p>
              </div>

              <div>
                <p className="font-medium text-[#2F332F]">
                  Areas of Focus
                </p>
                <p className="mt-2">
                  Eating Disorders, ARFID, Nutrition Counseling,
                  Family Support, and Medical Nutrition Therapy.
                </p>
              </div>

              <div>
                <p className="font-medium text-[#2F332F]">
                  Getting Started
                </p>
                <p className="mt-2">
                  Complete the form and I will respond as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
