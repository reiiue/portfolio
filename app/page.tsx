import { Github, Linkedin, Mail, Twitter, ArrowRight, Code2, Briefcase, Sparkles, Facebook } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import TechStackSection from "@/components/tech-stack-section"
import ProjectsSection from "@/components/projects-section"
import BeyondCodingSection from "@/components/beyond-coding-section"
import CertificationsSection from "@/components/certifications-section"
import TestimonialsSection from "@/components/testimonials-section"
import MembershipsSection from "@/components/memberships-section"
import SocialLinksSection from "@/components/social-links-section"
import GallerySection from "@/components/gallery-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-8 flex flex-col justify-between z-40 hidden lg:flex">
        <div>
          <h2 className="text-2xl font-bold text-accent mb-12 tracking-tight">CHAN</h2>
          <ul className="space-y-6">
            <li>
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
                About
              </a>
            </li>
            {/* <li>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Experience
              </a>
            </li> */}
            <li>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Featured Work
              </a>
            </li> */}
            {/* <li>
              <a href="#beyond" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Beyond Coding
              </a>
            </li> */}
            <li>
              <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors" title="GitHub">
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors" title="LinkedIn">
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors" title="Twitter">
            <Facebook className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between lg:hidden">
            <h2 className="text-xl font-bold text-accent">ALEX</h2>
            <Mail className="w-5 h-5 text-foreground" />
          </div>
        </header>

        {/* Hero Section */}
        <HeroSection />

{/* Content Sections */}
<div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
  {/* About */}
  <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    <div className="space-y-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-balance">
        IS <span className="text-accent">Student</span> & Creative Problem Solver
      </h2>

      <p className="text-base text-muted-foreground leading-relaxed">
        I build intelligent systems, design clean digital experiences, and create visual content for publications. Passionate about technology, storytelling, and solving real-world problems.
      </p>

      <div className="flex gap-3 pt-2">
        <button className="px-5 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm flex items-center gap-2">
          Get in Touch <ArrowRight className="w-4 h-4" />
        </button>

        <button className="px-5 py-2 border border-border rounded-lg hover:bg-secondary transition-colors font-medium text-sm">
          View Work
        </button>
      </div>
    </div>

    <AboutSection />
  </section>



<div className="flex flex-col md:flex-row gap-8">
  {/* Experience Timeline
  <section id="experience" className="flex-1">
    <div className="flex items-center gap-3 mb-6">
      <Briefcase className="w-5 h-5 text-accent" />
      <h2 className="text-3xl font-bold">Professional Journey</h2>
    </div>
    <ExperienceSection />
  </section> */}

  {/* Tech Stack */}
  <section id="tech" className="flex-1">
    <div className="flex items-center gap-3 mb-6">
      <Code2 className="w-5 h-5 text-accent" />
      <h2 className="text-3xl font-bold">Tech Arsenal</h2>
    </div>
    <TechStackSection />
  </section>
</div>


          {/* Projects */}
          <section id="projects" className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold">Featured Work</h2>
            </div>
            <ProjectsSection />
          </section>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
            {/* Beyond Coding - Left column */}
            {/* <section id="beyond">
              <BeyondCodingSection />
            </section> */}



            {/* Certifications & Memberships - Right column */}
            {/* <div className="space-y-12">
              <section id="certifications">
                <CertificationsSection />
              </section>

              <section id="memberships">
                <MembershipsSection />
              </section>
            </div> */}
          {/* </div>  */}


          {/* Testimonials - Full width */}
          {/* <section id="testimonials">
            <TestimonialsSection />
          </section> */}

          {/* Social Links & Contact - Full width */}
          <section id="contact">
            <SocialLinksSection />
          </section>

          {/* Gallery */}
          <section id="gallery">
            <GallerySection />
          </section>

          <section className="py-12 border-t border-border text-center space-y-4">
            <h2 className="text-3xl font-bold">
              Let's Create Something <span className="text-accent">Amazing</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and build something extraordinary together.
            </p>
            <a
              href="mailto:christian.gonzales.bipsu.edu.ph"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm"
            >
              Start a Conversation
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
