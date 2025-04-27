'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronRight, 
  Rocket, 
  Zap, 
  Shield, 
  ArrowRight, 
  Star,
  Code,
  Smartphone,
  Globe
} from "lucide-react"

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Welcome!",
      description: "Thanks for checking out our awesome website!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-none">
              Welcome to the future
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl mb-6 drop-shadow-sm">
              Next-Level Digital Experience
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-[600px] mx-auto">
              Elevate your online presence with our cutting-edge design and powerful features.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 bg-white text-purple-700 hover:bg-white/90">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/20" onClick={showToast}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section with Icons */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Everything you need to create an exceptional digital experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized performance ensures your website loads quickly and runs smoothly on any device.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beautiful, responsive layouts that look amazing on desktop, tablet, and mobile devices.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with security in mind, ensuring your data and users are always protected.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Showcase Section with Tabs */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Explore what our platform can do for you.
            </p>
          </div>
          
          <Tabs defaultValue="web" className="max-w-[1000px] mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="web" className="text-sm sm:text-base">
                <Globe className="mr-2 h-4 w-4 hidden sm:inline" /> Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="text-sm sm:text-base">
                <Smartphone className="mr-2 h-4 w-4 hidden sm:inline" /> Mobile
              </TabsTrigger>
              <TabsTrigger value="development" className="text-sm sm:text-base">
                <Code className="mr-2 h-4 w-4 hidden sm:inline" /> Development
              </TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="p-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Web Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Our web platform provides everything you need to create stunning websites with minimal effort. From responsive layouts to interactive elements, we've got you covered.
                  </p>
                  <ul className="space-y-2">
                    {["Responsive design", "SEO optimization", "Fast loading times", "Interactive elements"].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="h-4 w-4 text-amber-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 aspect-video flex items-center justify-center">
                  <img 
                    src="/images/web-showcase.jpg" 
                    alt="Web showcase" 
                    className="rounded-md max-h-full"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="p-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Mobile Experience</h3>
                  <p className="text-muted-foreground mb-6">
                    Create seamless mobile experiences that users love. Our platform ensures your content looks and works perfectly on any device size.
                  </p>
                  <ul className="space-y-2">
                    {["Touch-friendly interfaces", "Native-like performance", "Offline capabilities", "Push notifications"].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="h-4 w-4 text-amber-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 aspect-video flex items-center justify-center">
                  <img 
                    src="/images/mobile-showcase.jpg" 
                    alt="Mobile showcase" 
                    className="rounded-md max-h-full"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="development" className="p-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Developer Tools</h3>
                  <p className="text-muted-foreground mb-6">
                    Powerful development tools that make building complex applications simple. Our platform provides everything developers need to create amazing experiences.
                  </p>
                  <ul className="space-y-2">
                    {["Modern tech stack", "Extensive API", "Developer documentation", "Custom extensions"].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="h-4 w-4 text-amber-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 aspect-video flex items-center justify-center">
                  <img 
                    src="/images/dev-showcase.jpg" 
                    alt="Development showcase" 
                    className="rounded-md max-h-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[900px] mx-auto text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-[600px] mx-auto">
            Join thousands of satisfied customers who have transformed their digital presence with our platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="px-8 bg-white text-purple-700 hover:bg-white/90">
              Start Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white/20">
              Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
