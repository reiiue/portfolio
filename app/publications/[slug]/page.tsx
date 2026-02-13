import { ChevronLeft, FileText, Download } from "lucide-react"
import Link from "next/link"

export default async function PublicationDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // ✅ Correct way in Next 15
  const { slug } = await params

  const publicationsData: Record<string, any> = {
    "the-pillar-publication": {
      title: "Pillar Publication",
      publication: "Head Layout Designer & Graphic Artist",
      date: "2025-2026",
      description:
        "The official student publication of Biliran Province State University (BiPSU), Member: CEGP & RTSPA. Covers a wide range of topics including campus news, student achievements, and community events.",
      graphics: [
        {
          id: 1,
          title: "Cover Photos",
          description: "Pillar Publication Cover Photos",
          image: "/COVER PHOTOS.png",
        },
        {
          id: 2,
          title: "Magazine and Newsletters",
          description: "Magazine and newsletter design for the publication",
          image: "/MAGAZINES & NEWSLETTERS.png",
        },
        {
          id: 3,
          title: "Social Media Promo",
          description: "Promotional graphics for social platforms",
          image: "/SOCIAL MEDIA.png",
        },
        {
          id: 4,
          title: "Feature Spreads",
          description: "Two-page spread design",
          image: "/theweight.pdf",
        },
      ],
    },

    "well-of-the-messiah": {
      title: "Well of the Messiah International Ministries",
      publication: "Graphc Designer",
      date: "2021-2023",
      description:
        "WMIM is a HOME that is full of JESUS, sharing together ALL the favors of GOD. I created visual content for their social media platforms, including video and graphics for events, sermons, and promotional materials.",
      graphics: [
        {
          id: 1,
          title: "Youth Camp",
          description: "Promotional graphics for youth camp events",
          image: "/363475583_869780214503650_1635888194115186752_n.jpg",
        },
        {
          id: 2,
          title: "Anniversaries",
          description: "Graphics for church anniversary celebrations",
          image: "/363503222_835096191563719_6229464077796162213_n.jpg",
        },
        // {
        //   id: 3,
        //   title: "Timeline Design",
        //   description: "Visual timeline of web evolution",
        //   image: "/timeline-infographic-web-development.jpg",
        // },
        // {
        //   id: 4,
        //   title: "Social Graphics",
        //   description: "Multiple social media sized graphics",
        //   image: "/social-media-graphics-web-design.jpg",
        // },
      ],
    },

    "ai-journal": {
      title: "Machine Learning Best Practices",
      publication: "AI Journal",
      date: "2023",
      description:
        "Essential best practices for implementing machine learning solutions in production. Covers model selection, deployment, and monitoring.",
      graphics: [
        {
          id: 1,
          title: "Journal Cover",
          description: "Professional journal cover design",
          image: "/machine-learning-journal-cover.jpg",
        },
        {
          id: 2,
          title: "ML Pipeline Diagram",
          description: "Technical diagram of ML pipeline",
          image: "/machine-learning-pipeline-diagram.jpg",
        },
        {
          id: 3,
          title: "Data Visualization",
          description: "Complex data visualization graphic",
          image: "/data-visualization-ml-metrics.jpg",
        },
        {
          id: 4,
          title: "Abstract Illustration",
          description: "Abstract AI-themed illustration",
          image: "/abstract-artificial-intelligence-illustration.jpg",
        },
      ],
    },

    "modern-dev": {
      title: "Full-Stack Development Guide",
      publication: "Modern Dev",
      date: "2023",
      description:
        "Complete guide to modern full-stack development practices. Covers frontend, backend, databases, and DevOps considerations.",
      graphics: [
        {
          id: 1,
          title: "Title Page Design",
          description: "Publication title page",
          image: "/full-stack-development-guide-cover.jpg",
        },
        {
          id: 2,
          title: "Architecture Diagram",
          description: "Full-stack architecture visualization",
          image: "/full-stack-architecture-diagram.jpg",
        },
        {
          id: 3,
          title: "Code Showcase Graphics",
          description: "Stylized code examples",
          image: "/code-examples-design-graphics.jpg",
        },
        {
          id: 4,
          title: "Promotional Poster",
          description: "Guide promotional poster",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  }

  const publication = publicationsData[slug]

  if (!publication) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Still in development</h1>
          <Link href="/" className="text-accent hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="flex items-start gap-4 mb-4">
            <FileText className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl font-bold mb-2">{publication.title}</h1>
              <p className="text-muted-foreground">
                {publication.publication} • {publication.date}
              </p>
            </div>
          </div>

          <p className="text-foreground/80 max-w-2xl">
            {publication.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Design & Graphics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publication.graphics.map((graphic: any) => (
            <div
              key={graphic.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="relative h-64 md:h-80 bg-secondary">
                <img
                  src={graphic.image}
                  alt={graphic.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {graphic.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {graphic.description}
                </p>

                <button className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent/80">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
