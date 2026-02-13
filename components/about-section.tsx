export default function AboutSection() {
  return (
    <div className="space-y-8">
      
      {/* About Card */}
      <div
        className="relative rgb-glow overflow-hidden bg-white/70 backdrop-blur-xl border border-accent/50 rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(245,245,245,0.85))",
        }}
      >
        <h3 className="text-lg font-semibold text-accent">About Me</h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          I'm a 4th-year Information Systems student focusing on building solutions
          with Laravel and Next.js, and currently learning React. I work on
          projects including web applications, system development, and visual
          content for publications.
        </p>

        <p className="text-muted-foreground leading-relaxed text-sm">
          Currently exploring modern web technologies, learning full-stack
          development, and taking on projects that solve real-world problems.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Projects */}
        <div
          className="relative rgb-glow overflow-hidden bg-white/70 backdrop-blur-lg border border-accent/40 rounded-lg p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
          }}
        >
          <p className="text-2xl font-bold text-accent">3+</p>
          <p className="text-xs text-muted-foreground mt-1">
            Projects Completed
          </p>
        </div>

        {/* Experience */}
        <div
          className="relative rgb-glow overflow-hidden bg-white/70 backdrop-blur-lg border border-accent/40 rounded-lg p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
          }}
        >
          <p className="text-2xl font-bold text-accent">4</p>
          <p className="text-xs text-muted-foreground mt-1">
            Years in the Making
          </p>
        </div>
      </div>
    </div>
  )
}
