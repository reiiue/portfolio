import { Mail, MapPin, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfileHeader() {
  return (
    <div className="flex gap-6 items-start">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="w-32 h-40 rounded-lg overflow-hidden bg-gradient-to-br from-gray-400 to-gray-500">
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600">
            AB
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex-grow space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-1">Your Name</h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span>Metro City, Country</span>
          </div>
          <p className="text-foreground font-medium">Software Engineer • Designer</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a Call
          </Button>
          <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 bg-transparent">
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 bg-transparent">
            Join Community
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          {/* Additional Button */}
          <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 bg-transparent">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
