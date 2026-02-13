"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
const galleryImages = [
  { id: 1, title: "Asia-Pacific Summer Program", url: "/images/IMG_0042.JPG" },
  { id: 2, title: "Tech Workshop", url: "/images/31CFFFE7-103A-4769-8EAA-064F11378CF1.png"},
  { id: 3, title: "Community Discussion on Machine Learning", url: "/images/592314874_122285566112223069_7006043681754732844_n.jpg" },
  { id: 4, title: "Certificate for Completing the AI & Business Analytics: From Data to Action in Bangladesh, Dhaka", url: "/images/DSC05588.JPG" },
  { id: 5, title: "Report of Analytics of the AI & Business Analytics Program", url: "/images/Unknown-3.jpg" },
]

export default function GallerySection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % galleryImages.length)
  const prev = () => setCurrent((current - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <ImageIcon className="w-5 h-5 text-accent" />
        <h3 className="text-2xl font-bold">Gallery</h3>
      </div>
      <div className="relative bg-gradient-to-br from-secondary to-card rounded-xl overflow-hidden border border-border h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={galleryImages[current].url}
            alt={galleryImages[current].title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white px-3 py-1 rounded-md text-sm">
            {galleryImages[current].title}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 bg-accent/20 hover:bg-accent/40 rounded-lg transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5 text-accent" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 bg-accent/20 hover:bg-accent/40 rounded-lg transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5 text-accent" />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === current ? "bg-accent w-5" : "bg-muted-foreground/30 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
