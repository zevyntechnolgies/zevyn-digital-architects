import { createFileRoute, Link } from "@tanstack/react-router";
import { team } from "../../data/team";

export const Route = createFileRoute("/team/")({
  component: TeamPage,
});

function TeamPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold">Meet Our Team</h1>

        <p className="mt-4 text-gray-600 text-lg">The people behind Zevyn Technologies.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {team.map((member) => (
          <Link
            key={member.id}
            to="/team/$memberId"
            params={{ memberId: member.id }}
            className="group"
          >
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />

              <h2 className="text-2xl font-semibold text-center mt-5">{member.name}</h2>

              <p className="text-center text-gray-500">{member.role}</p>

              <div className="mt-6 text-center">
                <span className="inline-flex rounded-full bg-black text-white px-4 py-2 text-sm">
                  View Profile →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
