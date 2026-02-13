export default function TechStackSection() {
  const techCategories = [
    {
      category: "Frontend",
      skills: ["React", "HTML", "Next.js", "Tailwind CSS"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "MySQL", "Laravel"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    // {
    //   category: "DevOps & Cloud",
    //   skills: ["AWS", "Docker",],
    //   color: "from-orange-500/20 to-red-500/20",
    // },
    // {
    //   category: "AI & Tools",
    //   skills: ["OpenAI", "LangChain", "RAG", "Prompt Engineering", "Vector DB"],
    //   color: "from-emerald-500/20 to-teal-500/20",
    // },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {techCategories.map((cat) => (
        <div
          key={cat.category}
          className={`bg-gradient-to-br ${cat.color} border border-border rounded-xl p-6 backdrop-blur-sm`}
        >
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-background/60 border border-border text-xs rounded-full text-foreground hover:border-accent/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
