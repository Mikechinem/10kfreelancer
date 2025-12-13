// ./components/ProjectsSection.js
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Facebook & Instagram Ads",
      description:
        "Click here to see how i can help.",
    },
    {
      title: "Chatbot AI",
      description: "Interactive AI chatbot built with modern web technologies.",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "A dynamic, responsive dashboard to track projects and earnings.",
    },
    {
      title: "E-commerce App",
      description:
        "Stylish and fast online store interface with smooth UX.",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto grid gap-6 md:grid-cols-3 py-8 px-4 md:px-6"
    >
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.title === "Chatbot AI" ? "/chatbot" : "#"}
          className="glow-card bg-zinc-900 rounded-2xl p-6 shadow-md text-center transition-transform duration-500 hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-zinc-400">{project.description}</p>
        </Link>
      ))}
    </section>
  );
}
