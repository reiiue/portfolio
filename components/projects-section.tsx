import Link from "next/link"


export default function ProjectsSection() {
  const projects = [
    {
      title: "The Pillar Publication",
      description: "Design & graphics for The Pillar Publication, BiPSU's official student publication",
      tags: ["Design", "Editorial"],
      slug: "the-pillar-publication",
    },
    {
      title: "Well of the Messiah International Ministries",
      description: "Visual content for Well of the Messiah International Ministries, including video and social media graphics",
      tags: ["Graphics"],
      slug: "well-of-the-messiah",
    },
    {
      title: "Human Resource Management System: SALN & PDS",
      description: "A full-stack HRMIS project focused on managing employee PDS and SALN forms efficiently.",
      tags: ["HRIS", "Laravel"],
      // slug: "ai-journal",
    },
    // {
    //   title: "Full-Stack Development Guide",
    //   description: "Publication & design system for Modern Dev",
    //   tags: ["Full-Stack", "DevOps", "Design"],
    //   slug: "modern-dev",
    // },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Link key={project.slug} href={`/publications/${project.slug}`}>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 h-full flex flex-col cursor-pointer">
            <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-secondary border border-border rounded text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
    
  )
}
