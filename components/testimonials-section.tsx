"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"

const testimonials = [
  {
    quote:
      "An exceptional developer who combines technical excellence with creativity. Always delivers quality and stays current with emerging technologies.",
    author: "Sarah Chen",
    role: "Tech Lead at Innovate Labs",
    initials: "SC",
  },
  {
    quote:
      "One of the best full-stack engineers I've worked with. Problem solver, mentor, and constant learner. Highly recommended.",
    author: "Marcus Johnson",
    role: "CTO at StartupXYZ",
    initials: "MJ",
  },
  {
    quote:
      "Brings both technical depth and creative solutions to every project. A joy to collaborate with and always raising the bar.",
    author: "Elena Rodriguez",
    role: "Product Manager at TechCorp",
    initials: "ER",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <MessageSquare className="w-5 h-5 text-accent" />
        <h3 className="text-2xl font-bold">What Others Say</h3>
      </div>
      <div className="relative bg-card rounded-xl p-6 border border-border min-h-48 flex flex-col justify-between">
        <p className="text-base text-foreground leading-relaxed italic mb-4">"{testimonials[current].quote}"</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm text-foreground">{testimonials[current].author}</p>
            <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
          </div>
          <div className="flex gap-1">
            <button
              onClick={prev}
              className="p-1.5 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-1.5 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-accent"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
