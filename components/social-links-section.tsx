import { Github, Linkedin, Facebook, Mail, Phone } from "lucide-react"

export default function SocialLinksSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Mail className="w-5 h-5 text-accent" />
          Social
        </h3>
        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/christian-gonzales-081716311/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary hover:border-accent/50 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
            <span className="text-sm font-medium group-hover:text-accent transition-colors">LinkedIn</span>
          </a>

          <a
            href="https://github.com/reiiue"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary hover:border-accent/50 transition-all group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
            <span className="text-sm font-medium group-hover:text-accent transition-colors">GitHub</span>
          </a>

          <a
            href="https://www.facebook.com/Littlesoupcan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary hover:border-accent/50 transition-all group"
          >
            <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
            <span className="text-sm font-medium group-hover:text-accent transition-colors">Facebook</span>
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Phone className="w-5 h-5 text-accent" />
          Contact
        </h3>
        <div className="space-y-3">
          <a
            href="mailto:christian_gonzales@bipsu.edu.ph"
            className="block p-3 rounded-lg border border-border hover:bg-secondary hover:border-accent/50 transition-all"
          >
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1">christian_gonzales@bipsu.edu.ph</p>
          </a>

          <button className="w-full p-3 rounded-lg border border-border hover:bg-secondary hover:border-accent/50 transition-all text-left">
            <p className="text-sm font-medium text-foreground">Schedule Call</p>
            <p className="text-xs text-muted-foreground mt-1">Let's Talk</p>
          </button>
        </div>
      </div>


      {/* Speaking
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" />
          Speaking
        </h3>
        <div className="p-4 rounded-lg border border-border">
          <p className="text-sm text-foreground font-medium mb-2">Available for Speaking</p>
          <p className="text-xs text-muted-foreground mb-3">
            Events about software development and emerging technologies
          </p>
          <a href="#" className="text-xs text-accent hover:text-accent/80 font-medium">
            Get in Touch →
          </a>
        </div>
      </div> */}
    </section>
  )
}
