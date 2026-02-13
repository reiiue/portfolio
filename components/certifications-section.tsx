import { Award } from "lucide-react"

const certifications = [
  { name: "Huawei Developer Expert", issuer: "Huawei", year: 2024 },
  { name: "Generative AI Leader", issuer: "Google", year: 2024 },
  { name: "Software Engineering", issuer: "TestDome", year: 2023 },
  { name: "Generative AI Professional", issuer: "Oracle", year: 2023 },
]

export default function CertificationsSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-accent" />
          <h3 className="text-2xl font-bold">Certifications</h3>
        </div>
        <a href="#" className="text-accent hover:text-accent/80 transition-colors text-xs font-medium">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-card rounded-lg p-4 border border-border hover:border-accent/50 transition-all hover:bg-secondary group"
          >
            <h4 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
              {cert.name}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground/60 mt-2">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
