"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "jerseys", name: "Custom Jerseys" },
    { id: "teamwear", name: "Team Uniforms" },
    { id: "accessories", name: "Accessories" },
    { id: "events", name: "Event Gear" },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Football Team Jersey - Eagles FC",
      category: "jerseys",
      image: "/placeholder.svg?height=400&width=400",
      description: "Custom sublimation printed football jerseys with team logo and player numbers",
    },
    {
      id: 2,
      title: "Cricket Team Uniform Set",
      category: "teamwear",
      image: "/placeholder.svg?height=400&width=400",
      description: "Complete cricket uniform with matching jersey, pants, and caps",
    },
    {
      id: 3,
      title: "Basketball Jersey - Thunder",
      category: "jerseys",
      image: "/placeholder.svg?height=400&width=400",
      description: "Breathable basketball jerseys with vibrant team colors",
    },
    {
      id: 4,
      title: "Custom Sports Caps",
      category: "accessories",
      image: "/placeholder.svg?height=400&width=400",
      description: "Embroidered team caps with custom logos",
    },
    {
      id: 5,
      title: "Marathon Event T-Shirts",
      category: "events",
      image: "/placeholder.svg?height=400&width=400",
      description: "Event t-shirts for Dhaka Marathon 2023",
    },
    {
      id: 6,
      title: "Volleyball Team Kit",
      category: "teamwear",
      image: "/placeholder.svg?height=400&width=400",
      description: "Complete volleyball team uniform with matching accessories",
    },
    {
      id: 7,
      title: "Custom Water Bottles",
      category: "accessories",
      image: "/placeholder.svg?height=400&width=400",
      description: "Branded water bottles for sports teams",
    },
    {
      id: 8,
      title: "Hockey Jersey Design",
      category: "jerseys",
      image: "/placeholder.svg?height=400&width=400",
      description: "Professional hockey jerseys with heat-pressed numbers",
    },
    {
      id: 9,
      title: "School Sports Day Kit",
      category: "events",
      image: "/placeholder.svg?height=400&width=400",
      description: "Complete sports day kit for ABC School",
    },
    {
      id: 10,
      title: "Tennis Team Polo Shirts",
      category: "teamwear",
      image: "/placeholder.svg?height=400&width=400",
      description: "Elegant polo shirts for tennis team",
    },
    {
      id: 11,
      title: "Custom Sports Mugs",
      category: "accessories",
      image: "/placeholder.svg?height=400&width=400",
      description: "Personalized mugs for team appreciation",
    },
    {
      id: 12,
      title: "Badminton Tournament Jerseys",
      category: "events",
      image: "/placeholder.svg?height=400&width=400",
      description: "Tournament jerseys for National Badminton Championship",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of custom sports gear, team uniforms, and personalized merchandise. See the quality
            and craftsmanship that sets us apart.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-300">
              Numbers that showcase our commitment to quality and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">10,000+</div>
              <div className="text-gray-300">Items Printed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">300+</div>
              <div className="text-gray-300">Happy Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Create Your Custom Gear?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied teams and athletes. Let's bring your vision to life with our premium printing
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-red-600 text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-600 hover:text-white transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
