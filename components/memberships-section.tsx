import { Users, ExternalLink } from "lucide-react"

const memberships = [
  { name: "Analytics & Artificial Intelligence Association of the Philippines", abbr: "AAP" },
  { name: "Philippine Software Industry Association", abbr: "PSIA" },
]

export default function MembershipsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-6 h-6 text-accent" />
        <h3 className="text-2xl font-bold">Member Of</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {memberships.map((org, idx) => (
          <a
            key={idx}
            href="#"
            className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all hover:bg-secondary group flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{org.name}</p>
              <p className="text-xs text-accent mt-2">{org.abbr}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        ))}
      </div>
    </section>
  )
}
