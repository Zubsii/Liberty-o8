import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Users, Award, Zap, ArrowRight } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: <Shirt className="h-8 w-8 text-red-600" />,
      title: "Custom Jersey Printing",
      description: "Professional jersey printing for teams and individuals with premium quality materials.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Bulk Teamwear",
      description: "Complete team packages with matching uniforms, accessories, and gear.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Sports Accessories",
      description: "Custom printed caps, mugs, water bottles, and other sports accessories.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Premium Sportswear",
      description: "High-quality sports gear and equipment for athletes and sports enthusiasts.",
    },
  ]

  const features = [
    "Fast turnaround time",
    "Premium quality materials",
    "Competitive pricing",
    "Local team support",
    "Custom designs",
    "Bulk discounts available",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Power Your Team with
                <span className="text-red-300"> Custom Gear</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Premium custom jersey printing, personalized sports merchandise, and sportswear solutions. Empowering
                local teams and athletes with quality gear that performs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold">
                    Start Customizing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Custom Sports Jersey"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom jersey printing to complete team packages, we provide comprehensive sports merchandise
              solutions for teams, clubs, and individual athletes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Liberty Printing & Sports?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're passionate about empowering local teams and athletes with premium quality gear. Our commitment to
                excellence and customer satisfaction sets us apart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Team wearing custom jerseys"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Gear Up Your Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with your custom jersey order today. Contact us for a free quote and let's bring your team's
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
