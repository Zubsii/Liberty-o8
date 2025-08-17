"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye, Upload } from "lucide-react"

export default function DesignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: "All Designs" },
    { value: "business", label: "Business" },
    { value: "events", label: "Events" },
    { value: "promotional", label: "Promotional" },
    { value: "restaurant", label: "Restaurant" },
    { value: "sports", label: "Sports" },
  ]

  const designs = [
    {
      id: 1,
      name: "Business Card Template 1",
      category: "business",
      image: "/placeholder.svg?height=300&width=400&text=Business+Card+Design",
      description: "Professional business card design with modern layout",
      tags: ["Business", "Professional", "Modern"],
    },
    {
      id: 2,
      name: "Event Flyer Design",
      category: "events",
      image: "/placeholder.svg?height=300&width=400&text=Event+Flyer",
      description: "Eye-catching event flyer with vibrant colors",
      tags: ["Events", "Colorful", "Modern"],
    },
    {
      id: 3,
      name: "Restaurant Menu Layout",
      category: "restaurant",
      image: "/placeholder.svg?height=300&width=400&text=Menu+Design",
      description: "Elegant restaurant menu design with food imagery",
      tags: ["Restaurant", "Food", "Elegant"],
    },
    {
      id: 4,
      name: "Promotional Banner",
      category: "promotional",
      image: "/placeholder.svg?height=300&width=400&text=Promo+Banner",
      description: "Bold promotional banner for sales and offers",
      tags: ["Promotional", "Sale", "Bold"],
    },
    {
      id: 5,
      name: "Sports Team Jersey",
      category: "sports",
      image: "/placeholder.svg?height=300&width=400&text=Sports+Jersey",
      description: "Dynamic sports jersey design with team colors",
      tags: ["Sports", "Team", "Dynamic"],
    },
    {
      id: 6,
      name: "Corporate Letterhead",
      category: "business",
      image: "/placeholder.svg?height=300&width=400&text=Letterhead",
      description: "Professional letterhead design for businesses",
      tags: ["Business", "Corporate", "Professional"],
    },
    {
      id: 7,
      name: "Event Ticket Design",
      category: "events",
      image: "/placeholder.svg?height=300&width=400&text=Event+Ticket",
      description: "Creative event ticket with perforated design",
      tags: ["Events", "Ticket", "Creative"],
    },
    {
      id: 8,
      name: "Sticker Pack Design",
      category: "promotional",
      image: "/placeholder.svg?height=300&width=400&text=Sticker+Pack",
      description: "Fun sticker pack design for branding",
      tags: ["Stickers", "Branding", "Fun"],
    },
    {
      id: 9,
      name: "Receipt Book Header",
      category: "business",
      image: "/placeholder.svg?height=300&width=400&text=Receipt+Header",
      description: "Professional receipt book header design",
      tags: ["Business", "Receipt", "Professional"],
    },
    {
      id: 10,
      name: "Calendar Design",
      category: "promotional",
      image: "/placeholder.svg?height=300&width=400&text=Calendar",
      description: "Monthly calendar design with company branding",
      tags: ["Calendar", "Branding", "Monthly"],
    },
    {
      id: 11,
      name: "Sports Banner",
      category: "sports",
      image: "/placeholder.svg?height=300&width=400&text=Sports+Banner",
      description: "Large sports banner for team events",
      tags: ["Sports", "Banner", "Team"],
    },
    {
      id: 12,
      name: "Business Envelope",
      category: "business",
      image: "/placeholder.svg?height=300&width=400&text=Business+Envelope",
      description: "Professional envelope design with logo placement",
      tags: ["Business", "Envelope", "Logo"],
    },
  ]

  const filteredDesigns =
    selectedCategory === "all" ? designs : designs.filter((design) => design.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/services" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Design Gallery</h1>
          <p className="text-gray-600 mt-2">Browse our collection of professional design templates</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? "bg-red-600 hover:bg-red-700" : "bg-transparent"}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design) => (
            <Card key={design.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={design.image || "/placeholder.svg"}
                  alt={design.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      <Download className="h-4 w-4 mr-1" />
                      Select
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{design.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{design.description}</p>
                <div className="flex flex-wrap gap-1">
                  {design.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Design CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Design?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our design team can create a custom design tailored to your specific
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Request Custom Design
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your Design
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
