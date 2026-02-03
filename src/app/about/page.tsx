
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Dr. Elena Vasquez",
    text: "Sybil's approach is unlike any coaching I've experienced. She doesn't just guide; she advocates. I found my voice in my career when I thought I was nearing the end of it.",
    title: "Senior Executive"
  },
  {
    name: "Marcus Thorne",
    text: "As a man entering retirement, I felt lost. Sybil helped me realize that empowerment isn't just for the workplace—it's for the life you build after it.",
    title: "Former Director"
  },
  {
    name: "Sarah Jenkins",
    text: "The Tandem Bike philosophy truly resonates. Sybil was right there with me, pedaling through the hardest parts of my career transition.",
    title: "Entrepreneur"
  }
]

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "about-sybil")

  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary rounded-full px-4 py-1">Meet Sybil Ramsey</Badge>
              <h1 className="text-4xl lg:text-6xl font-headline font-bold">Empowerment Strategist</h1>
            </div>
            <div className="prose prose-lg text-muted-foreground space-y-6 max-w-none">
              <p className="text-xl font-medium text-foreground">
                I am not a traditional executive coach. I am an Empowerment Strategist.
              </p>
              <p>
                With decades of professional experience and a deep commitment to the growth of others, 
                I established Ramsey Empowerment Collective, LLC in 2025. My mission is simple but profound: 
                to create a safe haven for those seeking to reclaim their agency.
              </p>
              <p>
                At 62, as I navigate my own phased retirement, I bring a unique perspective to my clients—especially 
                women 55+ and women of color. I understand the nuances of career transitions, the weight of 
                unspoken expectations, and the incredible power of a voice rediscovered.
              </p>
              <p>
                My philosophy, "You steer as we pedal," reflects our partnership. You decide the direction; 
                we provide the combined effort and strategy to get you there.
              </p>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Certification</span>
                <span className="font-bold text-lg">Certified Empowerment Coach</span>
              </div>
              <div className="space-y-1">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Expertise</span>
                <span className="font-bold text-lg">30+ Years Leadership Experience</span>
              </div>
              <div className="space-y-1">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Advocacy</span>
                <span className="font-bold text-lg">DEI Advocacy Specialist</span>
              </div>
              <div className="space-y-1">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Strategy</span>
                <span className="font-bold text-lg">Strategic Planning Graduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-secondary/20 rounded-3xl p-8 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold">Voices of Transformation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-background/50 border-none shadow-sm">
                <CardContent className="p-8 space-y-6">
                  <p className="text-lg italic text-muted-foreground">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-primary">{t.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
