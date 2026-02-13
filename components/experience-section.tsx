export default function ExperienceSection() {
const experiences = [
  {
    title: "Principal AI Engineer",
    company: "Standard Chartered",
    year: "2025",
    current: true,
  },
  {
    title: "AI Ops Engineer",
    company: "Centre of Excellence for GenAI, Cambridge",
    year: "2025",
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Core Technology, Cambridge",
    year: "2024",
  },
  {
    title: "Software Engineering Lead",
    company: "PocketDevs",
    year: "2022",
  },
  {
    title: "Lead Application Developer",
    company: "Bluewind Asia",
    year: "2021",
  },
  {
    title: "Software Engineer",
    company: "GCM",
    year: "2020",
  },
  {
    title: "BS Information Technology",
    company: "University of San Carlos",
    year: "2019",
  },
  {
    title: "Hello World! 👋",
    company: "Wrote my first line of code",
    year: "2015",
  },
];


  return (
    <div className="bg-white/70 backdrop-blur-xl border border-accent/20 rounded-2xl p-6 max-w-md">

      <div className="relative pl-6">
        {/* Vertical Line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-accent/20"></div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center gap-4">
              
              {/* Dot */}
              <div
                className={`flex-shrink-0 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-accent border-accent"
                    : "bg-background border-accent/40"
                }`}
              ></div>

              {/* Content */}
              <div className="flex-1 bg-white/60 border border-accent/20 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-sm">{exp.title}</h4>
                  <span className="text-xs border border-accent/30 px-2 py-0.5 rounded-full text-muted-foreground">
                    {exp.year}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mt-1">
                  {exp.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
