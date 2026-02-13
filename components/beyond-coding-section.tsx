import { BookOpen } from "lucide-react"

export default function BeyondCodingSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <BookOpen className="w-5 h-5 text-accent" />
        <h3 className="text-2xl font-bold">Beyond Coding</h3>
      </div>
      <div className="bg-card rounded-xl p-5 border border-border hover:border-accent/50 transition-colors">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I share my knowledge through content creation and community building, helping aspiring developers navigate
          their tech journey.
        </p>
      </div>
    </section>
  )
}
