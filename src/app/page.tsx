import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import EventCountdown from "@/components/event-countdown"
import SpeakerCard from "@/components/speaker-card"
import ScheduleItem from "@/components/schedule-item"
import FAQAccordion from "@/components/faq-accordion"
import RegistrationForm from "@/components/registration-form"

export default function EventLandingPage() {
  // Event details
  const eventDate = new Date("2025-06-15T09:00:00")
  const eventName = "TechConnect 2025"
  const eventTagline = "Where Innovation Meets Opportunity"
  const eventDescription =
    "Join us for the most anticipated tech conference of the year. Connect with industry leaders, discover cutting-edge technologies, and expand your professional network."

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground">TC</span>
            </div>
            {eventName}
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#speakers" className="text-sm font-medium transition-colors hover:text-primary">
              Speakers
            </Link>
            <Link href="#schedule" className="text-sm font-medium transition-colors hover:text-primary">
              Schedule
            </Link>
            <Link href="#venue" className="text-sm font-medium transition-colors hover:text-primary">
              Venue
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
          </nav>
          <Button asChild>
            <Link href="#register">Register Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background z-10" />
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Event background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-20 py-24 md:py-32 lg:py-40">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  June 15-17, 2025
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {eventName}
                  <span className="block text-primary">{eventTagline}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">{eventDescription}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Button size="lg" asChild>
                    <Link href="#register">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#schedule">View Schedule</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border">
                <EventCountdown targetDate={eventDate} />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">June 15-17, 2025</p>
                      <p className="text-sm text-muted-foreground">3-day event</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Daily schedule</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Tech Convention Center</p>
                      <p className="text-sm text-muted-foreground">123 Innovation Ave, San Francisco</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">1,500+ Attendees</p>
                      <p className="text-sm text-muted-foreground">Industry professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About the Event</h2>
              <div className="h-1 w-20 bg-primary my-6"></div>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                TechConnect brings together the brightest minds in technology for three days of learning, networking,
                and inspiration. Whether you're a developer, designer, entrepreneur, or tech enthusiast, there's
                something for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with industry leaders, potential collaborators, and like-minded professionals.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Discover cutting-edge technologies and innovative solutions shaping the future.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Learning</h3>
                <p className="text-muted-foreground">
                  Attend workshops, keynotes, and sessions led by experts in various tech domains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Speakers</h2>
              <div className="h-1 w-20 bg-primary my-6"></div>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                Learn from industry leaders and innovators who are shaping the future of technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <SpeakerCard
                name="Alex Johnson"
                role="CTO, TechInnovate"
                image="/placeholder.svg?height=400&width=400"
                topic="AI in Enterprise"
              />
              <SpeakerCard
                name="Sarah Chen"
                role="Lead Engineer, CloudScale"
                image="/placeholder.svg?height=400&width=400"
                topic="Serverless Architecture"
              />
              <SpeakerCard
                name="Michael Rodriguez"
                role="Founder, DevSecOps"
                image="/placeholder.svg?height=400&width=400"
                topic="Security in DevOps"
              />
              <SpeakerCard
                name="Priya Patel"
                role="Product Director, UXMasters"
                image="/placeholder.svg?height=400&width=400"
                topic="Future of UX Design"
              />
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg">
                View All Speakers <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Event Schedule</h2>
              <div className="h-1 w-20 bg-primary my-6"></div>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                Three days packed with inspiring keynotes, hands-on workshops, and networking opportunities.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Day 1: June 15, 2025
                </h3>
                <div className="space-y-4">
                  <ScheduleItem
                    time="9:00 AM - 10:00 AM"
                    title="Opening Keynote: The Future of Tech"
                    speaker="Alex Johnson, CTO TechInnovate"
                    location="Main Hall"
                  />
                  <ScheduleItem
                    time="10:30 AM - 12:00 PM"
                    title="Workshop: Building Scalable Applications"
                    speaker="Sarah Chen, CloudScale"
                    location="Workshop Room A"
                  />
                  <ScheduleItem
                    time="1:00 PM - 2:30 PM"
                    title="Panel Discussion: Emerging Technologies"
                    speaker="Various Industry Leaders"
                    location="Panel Room"
                  />
                  <ScheduleItem
                    time="3:00 PM - 4:30 PM"
                    title="Workshop: AI Implementation Strategies"
                    speaker="Michael Rodriguez, DevSecOps"
                    location="Workshop Room B"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg">
                  View Full Schedule <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section id="venue" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Venue</h2>
              <div className="h-1 w-20 bg-primary my-6"></div>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                Join us at the state-of-the-art Tech Convention Center in the heart of San Francisco.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=1200" alt="Venue" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Tech Convention Center</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">123 Innovation Avenue</p>
                      <p className="text-muted-foreground">San Francisco, CA 94103</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    The Tech Convention Center offers state-of-the-art facilities, including multiple presentation
                    halls, workshop spaces, and networking areas. Located in downtown San Francisco, it's easily
                    accessible by public transportation and has ample parking available.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="lg">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Register Now</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Secure your spot at TechConnect 2025. Early bird registration ends April 30, 2025.
                </p>

                <div className="space-y-6">
                  <div className="bg-muted/50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Early Bird Ticket</h3>
                    <p className="text-3xl font-bold text-primary mb-2">$499</p>
                    <p className="text-muted-foreground mb-4">Available until April 30, 2025</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Access to all keynotes and sessions
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Workshop participation
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Networking events
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Lunch and refreshments
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Group Discount</h3>
                    <p className="text-muted-foreground">
                      Register 5 or more attendees and receive a 15% discount. Contact us for corporate packages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg border">
                <h3 className="text-2xl font-bold mb-6">Registration Form</h3>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <div className="h-1 w-20 bg-primary my-6"></div>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                Find answers to common questions about TechConnect 2025.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
              <FAQAccordion />
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild>
                <Link href="mailto:info@techconnect2025.com">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Sponsors</h2>
              <div className="h-1 w-20 bg-primary my-6"></div>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                TechConnect is made possible by the support of our amazing sponsors.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-center">Platinum Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Sponsor 1"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Sponsor 2"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Sponsor 3"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Sponsor 4"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-center">Gold Sponsors</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Sponsor 5"
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Sponsor 6"
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Sponsor 7"
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Sponsor 8"
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Sponsor 9"
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Sponsor 10"
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground">TC</span>
                </div>
                {eventName}
              </div>
              <p className="text-muted-foreground mb-4">
                The premier tech conference bringing together innovators, creators, and leaders.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#speakers" className="text-muted-foreground hover:text-primary">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-muted-foreground hover:text-primary">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#venue" className="text-muted-foreground hover:text-primary">
                    Venue
                  </Link>
                </li>
                <li>
                  <Link href="#register" className="text-muted-foreground hover:text-primary">
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-muted-foreground">info@techconnect2025.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for updates and exclusive content.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border rounded-md text-sm"
                  required
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TechConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

