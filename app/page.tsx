import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import OnboardingModal from "@/components/onboarding-modal"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                ClienxDev
              </h1>
              <p className="mt-4 text-xl text-white md:text-2xl">Connect with Top Developers</p>
            </div>
            <p className="mx-auto max-w-[700px] text-lg text-white md:text-xl">
              Find Skilled Freelancers or Post Projects Seamlessly with ClienxDev
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/freelancer/projects">Find Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/client/post-project">Post a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Clients and Freelancers Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>For Clients</CardTitle>
                <CardDescription>Find the perfect developer for your project</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Post projects easily</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Browse skilled freelancers</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Manage projects efficiently</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For Freelancers</CardTitle>
                <CardDescription>Discover exciting projects and showcase your skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Find high-paying projects</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Build your portfolio</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Connect with global clients</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Easy Project Posting</CardTitle>
              </CardHeader>
              <CardContent>
                Post your project in minutes with our intuitive interface.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skilled Freelancers</CardTitle>
              </CardHeader>
              <CardContent>
                Access a pool of talented developers from around the world.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                Enjoy safe and secure transactions for all your projects.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started (Onboarding CTA) */}
      <section className="w-full py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Get Started with ClienxDev
            </h2>
            <p className="mx-auto max-w-[600px] text-black/80">
              Join our community of clients and freelancers to start your journey with ClienxDev.
            </p>
            <OnboardingModal />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Create Your Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sign up and create a detailed profile showcasing your skills or project needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Browse projects or freelancers, and connect with the perfect match for your needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Work together seamlessly using our platform's tools and communication features.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Client</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"ClienxDev made it incredibly easy to find the perfect developer for my project. The quality of work exceeded my expectations!"</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Jane Smith</CardTitle>
                <CardDescription>Freelancer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"As a freelancer, ClienxDev has been a game-changer. I've found high-quality projects and built long-lasting client relationships."</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[600px]">
              Join ClienxDev today and experience the future of freelancing and project management.
            </p>
            <Button size="lg" variant="secondary">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

