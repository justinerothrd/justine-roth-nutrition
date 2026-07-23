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
    <main className="min-h-screen bg-[#F8F5F0] text-[#2F332F]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#536857]">
            Current Groups
          </p>

          <h1 className="max-w-4xl text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Yoga & Supportive Group Programs
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F665F]">
            Explore current nutrition, meal support, mindfulness, and yoga
            groups designed to support recovery and overall well-being.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-[#FFFDF8] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-light sm:text-4xl">
              Current Group Schedule
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#5F665F]">
              Groups are offered throughout the year. Please contact us for
              registration information and current availability.
            </p>
          </div>

          {/* Table Header */}
          <div className="hidden rounded-t-3xl bg-[#536857] px-6 py-4 text-sm font-medium uppercase tracking-wide text-white md:grid md:grid-cols-[1fr_1fr_2fr_1fr_1fr]">
            <p>Day</p>
            <p>Time</p>
            <p>Group</p>
            <p>Instructor</p>
            <p>Location</p>
          </div>

          {/* Schedule */}
          <div className="overflow-hidden rounded-b-3xl border border-[#E8E1D8]">
            {groupSchedule.map((item) => (
              <div
                key={`${item.day}-${item.time}-${item.className}`}
                className="grid gap-2 border-b border-[#E8E1D8] bg-[#F8F5F0] p-6 last:border-b-0 md:grid-cols-[1fr_1fr_2fr_1fr_1fr] md:items-center"
              >
                <p className="font-medium">{item.day}</p>

                <p className="text-[#5F665F]">{item.time}</p>

                <p>{item.className}</p>

                <p className="text-[#5F665F]">{item.instructor}</p>

                <p className="text-[#5F665F]">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#9BAF9B]/20 px-8 py-14 text-center">
          <h2 className="text-3xl font-light">
            Interested in joining a group?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5F665F]">
            Contact Justine to learn more about current groups, availability,
            and the registration process.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#536857] px-8 py-4 text-white transition hover:bg-[#435646]"
          >
            Contact Justine
          </Link>
        </div>
      </section>
    </main>
  );
}
