export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-card via-background to-background flex items-center overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 flex items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl -ml-30">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary border border-accent/30 rounded-full text-sm text-accent font-medium">
            Welcome to my portfolio
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
            I'm <span className="text-accent">Christian</span>, crafting systems and creative experiences
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Merging technology, design, and storytelling to create meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-foreground rounded-lg hover:bg-foreground/10 transition-colors font-semibold text-lg">
              Let's Connect
            </button>
          </div>
        </div>

      {/* RIGHT — CONNECTED DOUBLE LANYARD */}
      <div className="relative hidden lg:flex items-start justify-center w-72 group">

        {/* LEFT LANYARD */}
        <div className="absolute -top-64 left-[40%] w-3 h-94.5 bg-red-600 rounded-full rotate-[-6deg] z-30"></div>

        {/* RIGHT LANYARD */}
        <div className="absolute -top-64 left-[55%] w-3 h-94.5 bg-red-600 rounded-full rotate-[6deg] z-30"></div>

        {/* RING (touching lanyards) */}
        <div className="absolute top-[7.25rem] left-1/2 -translate-x-1/2 w-5 h-5 border-[3px] border-gray-400 rounded-full bg-background z-30"></div>

        {/* CONNECTOR (touching ring & ID) */}
        <div className="absolute top-[8.5rem] left-1/2 -translate-x-1/2 w-10 h-3 bg-gray-300 border border-gray-400 rounded-sm z-30"></div>

{/* ID CARD */}
<div
  className="relative mt-36 w-67 h-100 rounded-2xl shadow-2xl p-6 rotate-2 hover:rotate-0 transition-transform duration-300 z-20
             border border-white/40 backdrop-blur-xl
             animate-[swing_8s_ease-in-out_infinite]"
  style={{
    transformOrigin: "top center",
    background: `
      linear-gradient(
        135deg,
        rgba(255,255,255,0.95),
        rgba(240,240,240,0.85)
      )
    `,
  }}
>

  {/* Light reflection */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>

  {/* Soft inner glow */}
  <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>

  <div className="relative flex flex-col items-center text-center gap-4">

    {/* Profile */}
    <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/60 shadow-lg">
      <img
        src="/IMG_0140.JPG"
        alt="Christian"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30"></div>
    </div>

    {/* Name and Role */}
    <div>
      <h3 className="font-semibold text-xl text-gray-900">Christian Gonzales</h3>
      <p className="text-sm text-gray-500">Aspiring System Developer</p>
    </div>

    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2"></div>

    {/* Details */}
    <div className="space-y-2 text-sm text-gray-600">
      <p>📍 Philippines</p>
      <p>💻 Laravel • Next.js • React </p>
      <p>🚀 Open for opportunities</p>
    </div>

  </div>
</div>


      </div>


      </div>
    </section>
  )
}
