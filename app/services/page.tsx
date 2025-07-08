import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Users, Coffee, ShoppingBag, Clock, Star, Palette, Truck } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Shirt className="h-12 w-12 text-red-600" />,
      title: "Custom Jersey Printing",
      description:
        "Professional jersey printing for teams and individuals with premium quality materials and vibrant colors.",
      features: ["Sublimation printing", "Screen printing", "Heat transfer", "Embroidery options"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "Bulk Teamwear Packages",
      description: "Complete team packages with matching uniforms, accessories, and gear at competitive bulk pricing.",
      features: ["Team uniforms", "Training gear", "Warm-up suits", "Bulk discounts"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Coffee className="h-12 w-12 text-red-600" />,
      title: "Sports Accessories",
      description:
        "Custom printed caps, mugs, water bottles, and other sports accessories to complete your team's look.",
      features: ["Custom caps", "Water bottles", "Sports mugs", "Keychains & badges"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-red-600" />,
      title: "Premium Sportswear",
      description: "High-quality sports gear and equipment for athletes and sports enthusiasts of all levels.",
      features: ["Athletic wear", "Sports equipment", "Footwear", "Performance gear"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const processSteps = [
    {
      icon: <Palette className="h-8 w-8 text-red-600" />,
      title: "Design Consultation",
      description: "Work with our design team to create your perfect custom design.",
    },
    {
      icon: <Star className="h-8 w-8 text-red-600" />,
      title: "Quality Production",
      description: "We use premium materials and advanced printing techniques.",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality.",
    },
    {
      icon: <Truck className="h-8 w-8 text-red-600" />,
      title: "Reliable Delivery",
      description: "Safe and timely delivery to your location across Bangladesh.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive sports merchandise solutions tailored to your team's needs. From custom jersey printing to
            complete team packages.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-4 mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700">Get Quote</Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient, and transparent process to bring your custom sports gear to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Custom Order?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's create something amazing for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contact Us Now
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
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
