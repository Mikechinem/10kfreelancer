import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Facebook  & Instagram Ads",
      description: "Click here to get your free funnel audit for facebook and instagram ads",
      href: "/Meta-ads", // link to page
    },
    {
      title: "Google  & Youtube Ads",
      description: "Click here to get your free funnel audit for google ads.",
      href: "/Google-ads", // link to page
    },
    {
      title: "TikTok Ads",
      description: "Click here to get your free funnel audit for tiktok ads.",
      href: "/Tiktok-ads", // link to page
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto grid gap-6 md:grid-cols-3 py-8 px-4 md:px-6">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.href} // <-- use the href from your project object
          className="glow-card bg-zinc-900 rounded-2xl p-6 shadow-md text-center transition-transform duration-500 hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-zinc-400">{project.description}</p>
        </Link>
      ))}
    </section>
  );
}
