import Link from "next/link";

const groupSchedule = [
  {
    day: "Monday",
    time: "6:00–7:00 PM",
    className: "Gentle Yoga",
    instructor: "Nicole",
    location: "Virtual",
  },
  {
    day: "Wednesday",
    time: "9:00–10:00 AM",
    className: "Breakfast Meal Support & Mindfulness",
    instructor: "Justine",
    location: "Virtual",
  },
  {
    day: "Saturday",
    time: "10:00–11:00 AM",
    className: "Mindful Eating & Movement",
    instructor: "Justine",
    location: "In Person",
  },
];

export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-white text-[#34414E]">
      {/* Mobile introduction */}
      <section className="border-b border-[#E4EBF0] px-6 py-10 sm:hidden">
        <div className="mx-auto max-w-md">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1]">
            Current Groups
          </p>

          <h1 className="font-heading mt-4 max-w-[13ch] text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em]">
            Yoga, meal support, and mindfulness.
          </h1>

          <p className="mt-6 text-base leading-7 text-[#687785]">
            Explore current groups designed to support recovery, connection,
            and overall well-being.
          </p>
        </div>
      </section>

      {/* Tablet and desktop introduction */}
      <section className="hidden border-b border-[#E4EBF0] px-8 py-12 sm:block lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#829CB1]">
            Current Groups
          </p>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.05fr_auto_0.95fr] lg:gap-10 xl:gap-12">
            <div>
              <h1 className="font-heading max-w-[15ch] text-[2.75rem] font-normal leading-[1.04] tracking-[-0.04em] md:text-[3.15rem] lg:text-[3.6rem]">
                Yoga, meal support, and mindfulness.
              </h1>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-full w-px bg-gradient-to-b from-transparent via-[#D7E4EC] to-transparent lg:block"
            />

            <div className="max-w-xl text-[1.05rem] leading-8 text-[#687785]">
              <p>
                Explore current groups designed to support recovery,
                connection, and overall well-being.
              </p>

              <p className="mt-4">
                Offerings may include meal support, yoga, mindfulness, mindful
                eating, and movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-b border-[#E4EBF0] bg-white">
        {/* Blue heading band */}
        <div className="bg-[#EAF1F5] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="mx-auto max-w-6xl sm:flex sm:items-end sm:justify-between sm:gap-10">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#718CA2] sm:text-xs sm:tracking-[0.26em]">
                Schedule
              </p>

              <h2 className="font-heading mt-3 text-[1.8rem] font-normal leading-[1.08] tracking-[-0.03em] sm:text-3xl">
                Current group offerings
              </h2>
            </div>

            <p className="mt-6 max-w-md text-base leading-7 text-[#607586] sm:mt-0 sm:text-right sm:text-lg sm:leading-8">
  Contact Justine for registration information and current
  availability.
</p>
          </div>
        </div>

        {/* Mobile schedule */}
        <div className="px-6 sm:hidden">
          <div className="mx-auto max-w-md">
            {groupSchedule.map((item) => (
              <article
                key={`${item.day}-${item.time}-${item.className}`}
                className="border-b border-[#E4EBF0] py-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#829CB1]">
                      {item.day}
                    </p>

                    <h3 className="font-heading mt-3 text-[1.45rem] font-normal leading-tight tracking-[-0.025em]">
                      {item.className}
                    </h3>
                  </div>

                  <p className="shrink-0 text-right text-sm leading-6 text-[#687785]">
                    {item.time}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm leading-6">
                  <div>
                    <p className="text-[#8A98A3]">Instructor</p>
                    <p className="mt-1 text-[#34414E]">{item.instructor}</p>
                  </div>

                  <div>
                    <p className="text-[#8A98A3]">Location</p>
                    <p className="mt-1 text-[#34414E]">{item.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet and desktop schedule */}
        <div className="hidden px-8 sm:block lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-[0.75fr_1fr_1.8fr_0.9fr_0.9fr] gap-6 border-b border-[#DCE6ED] py-5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#829CB1]">
              <p>Day</p>
              <p>Time</p>
              <p>Group</p>
              <p>Instructor</p>
              <p>Location</p>
            </div>

            {groupSchedule.map((item) => (
              <article
                key={`${item.day}-${item.time}-${item.className}`}
                className="grid grid-cols-[0.75fr_1fr_1.8fr_0.9fr_0.9fr] items-center gap-6 border-b border-[#E4EBF0] py-8"
              >
                <p className="font-medium text-[#34414E]">{item.day}</p>

                <p className="text-[#687785]">{item.time}</p>

                <h3 className="font-heading text-xl font-normal leading-tight tracking-[-0.02em] text-[#34414E]">
                  {item.className}
                </h3>

                <p className="text-[#687785]">{item.instructor}</p>

                <p className="text-[#687785]">{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Group information */}
      <section className="border-b border-[#E4EBF0] bg-white px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Before Joining
            </p>

            <h2 className="font-heading mt-4 max-w-[16ch] text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.15rem]">
              Find the group that feels right for you.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
            <p>
              Group availability may change throughout the year. Some groups
              are offered virtually, while others meet in person.
            </p>

            <p>
              Please reach out before attending to confirm availability,
              registration details, and whether the group is an appropriate
              fit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-[#DCE6ED] bg-[#F6F9FB] px-6 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#829CB1] sm:text-xs sm:tracking-[0.26em]">
              Get Started
            </p>

            <h2 className="font-heading mt-3 text-[1.8rem] font-normal leading-[1.1] tracking-[-0.03em] sm:text-3xl">
              Interested in joining a group?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#687785] sm:text-lg sm:leading-8">
              Reach out to learn more about current offerings, availability,
              and the registration process.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#829CB1] pb-1 text-sm font-medium text-[#718CA2] transition-colors hover:text-[#526D83]"
          >
            Contact Justine
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
