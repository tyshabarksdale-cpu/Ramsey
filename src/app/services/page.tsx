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
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <Badge variant="outline" className="text-accent border-accent/20 mb-4 px-4 py-1 rounded-full">Our Offerings</Badge>
          <h1 className="text-5xl lg:text-7xl font-headline">Tailored Strategies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't believe in one-size-fits-all coaching. Every partnership is as unique as the path you steer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {services.map((service, i) => (
            <Card key={i} className="relative overflow-hidden group border-none shadow-sm hover:shadow-2xl transition-all duration-500 bg-white">
              <CardHeader className="p-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-8">
                <ul className="space-y-4">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-secondary">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Invesment</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section - Ombre Dark */}
        <div className="bg-ombre-dark text-primary-foreground rounded-[2.5rem] p-8 lg:p-24 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-12">
              <div className="space-y-4">
                <Badge variant="outline" className="border-accent/30 text-accent">The Methodology</Badge>
                <h2 className="text-4xl lg:text-5xl font-headline">The Empowerment Process</h2>
              </div>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center font-headline font-bold text-xl text-accent">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Discovery Call</h4>
                    <p className="text-primary-foreground/70 leading-relaxed">A 30-minute deep dive to understand your current landscape and see if our tandem is a match.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center font-headline font-bold text-xl text-accent">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Strategic Roadmap</h4>
                    <p className="text-primary-foreground/70 leading-relaxed">We map out your destinations and define the metrics of success for our journey together.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center font-headline font-bold text-xl text-accent">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">The Pedal Sessions</h4>
                    <p className="text-primary-foreground/70 leading-relaxed">Regular sessions focused on action, accountability, and advocacy to move you forward.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Sparkles, label: "Clarity" },
                { icon: Target, label: "Results" },
                { icon: Zap, label: "Action" },
                { icon: Heart, label: "Empowerment" }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 text-primary-foreground p-8 text-center flex flex-col items-center gap-4 group hover:bg-white/10 transition-all">
                  <item.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
                  <p className="font-bold tracking-widest uppercase text-xs">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 text-center space-y-8">
          <h2 className="text-4xl font-headline">Ready to start pedaling?</h2>
          <Button asChild size="lg" className="rounded-full px-16 h-20 text-xl font-bold bg-accent hover:bg-accent/90 shadow-xl">
            <Link href="/connect">Book Your Strategy Session</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}