
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Heart, User, Sparkles, Target, Zap } from "lucide-react"

const services = [
  {
    title: "Executive Empowerment",
    description: "For high-level leaders seeking to lead with authenticity and advocate for change.",
    icon: Briefcase,
    features: ["Strategic Leadership", "Organizational Advocacy", "Conflict Resolution", "Phased Retirement Planning"],
    price: "Custom Packages Available"
  },
  {
    title: "Career Strategy",
    description: "Navigate transitions, promotions, or mid-to-late career shifts with confidence.",
    icon: User,
    features: ["Personal Branding", "Interview Advocacy", "Negotiation Skills", "Career Pivoting"],
    price: "Starting at $250 / Session"
  },
  {
    title: "Life Empowerment",
    description: "Reclaim your personal power, improve relationships, and find holistic balance.",
    icon: Heart,
    features: ["Personal Boundaries", "Voice Discovery", "Wellness Integration", "Purpose Finding"],
    price: "Flexible Tiered Pricing"
  }
]

export default function Services() {
  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl lg:text-6xl font-headline font-bold">Tailored Strategies</h1>
          <p className="text-xl text-muted-foreground">
            We don't believe in one-size-fits-all coaching. Every partnership is as unique as the path you steer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <Card key={i} className="relative overflow-hidden group border-2 border-transparent hover:border-primary/20 transition-all duration-300">
              <CardHeader className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-8">
                <ul className="space-y-3">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Pricing</p>
                  <p className="text-xl font-bold text-primary">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold">The Empowerment Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Discovery Call</h4>
                    <p className="text-primary-foreground/80">A 30-minute deep dive to understand your current landscape and see if our tandem is a match.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Strategic Roadmap</h4>
                    <p className="text-primary-foreground/80">We map out your destinations and define the metrics of success for our journey together.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">The Pedal Sessions</h4>
                    <p className="text-primary-foreground/80">Regular sessions focused on action, accountability, and advocacy to move you forward.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background/10 border-none text-primary-foreground p-6 text-center space-y-4">
                <Sparkles className="w-8 h-8 mx-auto text-accent" />
                <p className="font-bold">Clarity</p>
              </Card>
              <Card className="bg-background/10 border-none text-primary-foreground p-6 text-center space-y-4">
                <Target className="w-8 h-8 mx-auto text-accent" />
                <p className="font-bold">Results</p>
              </Card>
              <Card className="bg-background/10 border-none text-primary-foreground p-6 text-center space-y-4">
                <Zap className="w-8 h-8 mx-auto text-accent" />
                <p className="font-bold">Action</p>
              </Card>
              <Card className="bg-background/10 border-none text-primary-foreground p-6 text-center space-y-4">
                <Heart className="w-8 h-8 mx-auto text-accent" />
                <p className="font-bold">Empowerment</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center space-y-8">
          <h2 className="text-3xl font-headline font-bold">Ready to start pedaling?</h2>
          <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-bold bg-accent hover:bg-accent/90">
            <Link href="/connect">Book Your Strategy Session</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
