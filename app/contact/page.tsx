"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submission = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      appointmentPreference: formData.get("appointmentPreference"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Your message could not be sent. Please try again."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again."
      );
    }
  }

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
                Contact Information
              </p>

              <div className="mt-5 space-y-4 text-base leading-7">
                <div>
                  <p className="text-sm text-[#8A98A3]">Email</p>

                  <a
                    href="mailto:justinerothrd@gmail.com"
                    className="mt-1 inline-block text-[#607F96] transition-colors hover:text-[#34414E]"
                  >
                    justinerothrd@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-[#8A98A3]">Phone</p>

                  <a
                    href="tel:+19084854995"
                    className="mt-1 inline-block text-[#607F96] transition-colors hover:text-[#34414E]"
                  >
                    (908) 485-4995
                  </a>
                </div>
              </div>

              <div className="mt-9 border-t border-[#E4EBF0] pt-7">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
                  What Happens Next
                </p>

                <p className="mt-4 text-base leading-7 text-[#687785]">
                  After you submit the form, I&apos;ll follow up to learn more
                  about your needs, answer questions, and discuss whether
                  working together may be a good fit.
                </p>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="relative space-y-8">
              {/* Hidden spam-protection field */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Website</label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                  disabled={status === "sending"}
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base text-[#34414E] outline-none transition-colors focus:border-[#718CA2] disabled:cursor-not-allowed disabled:opacity-60"
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
                  disabled={status === "sending"}
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base text-[#34414E] outline-none transition-colors focus:border-[#718CA2] disabled:cursor-not-allowed disabled:opacity-60"
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
                  disabled={status === "sending"}
                  className="w-full border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base text-[#34414E] outline-none transition-colors focus:border-[#718CA2] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <fieldset disabled={status === "sending"}>
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
                  disabled={status === "sending"}
                  className="w-full resize-none border-0 border-b border-[#C5D3DD] bg-transparent px-0 py-3 text-base leading-7 text-[#34414E] outline-none transition-colors focus:border-[#718CA2] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="border-l-2 border-[#829CB1] bg-[#F6F9FB] px-5 py-4 text-sm leading-6 text-[#526D83]"
                >
                  <p className="font-medium text-[#34414E]">
                    Thank you for reaching out.
                  </p>

                  <p className="mt-1">
                    Your message has been sent. I&apos;ll be in touch soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="border-l-2 border-[#A16F6F] bg-[#FBF7F7] px-5 py-4 text-sm leading-6 text-[#7D5555]"
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#718CA2] px-6 text-sm font-medium text-white transition-colors hover:bg-[#607D93] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}

                {status !== "sending" && (
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
