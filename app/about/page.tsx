import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Award, Users } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Quality First",
      description: "We never compromise on quality. Every product meets our high standards before reaching you.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Passion for Sports",
      description: "Our love for sports drives everything we do. We understand what athletes and teams need.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from design to delivery.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Community Focus",
      description: "Supporting local teams and athletes is at the heart of our mission.",
    },
  ]

  const stats = [
    { number: "500+", label: "Teams Served" },
    { number: "10,000+", label: "Jerseys Printed" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Liberty Printing & Sports</h1>
              <p className="text-xl text-gray-200">
                Empowering local teams and athletes with premium quality sports gear and custom printing solutions since
                2019.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Liberty Printing & Sports team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our workshop"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Liberty Printing & Sports was born from a simple observation: local teams and athletes deserved better
                  access to high-quality, affordable custom sports gear. What started as a small printing shop has grown
                  into Bangladesh's trusted partner for sports merchandise.
                </p>
                <p>
                  Our founder, passionate about both sports and craftsmanship, recognized the gap between what teams
                  needed and what was available locally. We set out to change that by combining international quality
                  standards with local understanding and competitive pricing.
                </p>
                <p>
                  Today, we're proud to have served over 500 teams across Bangladesh, from school sports clubs to
                  professional teams. Every jersey we print, every uniform we create, carries our commitment to
                  excellence and our passion for empowering athletes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  To empower local teams and athletes by providing premium quality, affordable custom sports gear and
                  merchandise. We believe every team deserves to look and feel professional, regardless of their budget
                  or size.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To become Bangladesh's leading sports merchandise provider, known for quality, innovation, and
                  exceptional customer service. We envision a future where every athlete has access to gear that
                  enhances their performance and pride.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to serving the sports community in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Growing Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience the Liberty Printing & Sports difference? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Get Started Today
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
