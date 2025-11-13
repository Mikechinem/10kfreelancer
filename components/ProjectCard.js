
// ./components/ProjectCard.js
export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-white text-black rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
