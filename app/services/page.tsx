"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: "Receipt Book-Two Part",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Receipt+Book",
      description: "Professional two-part receipt books with auto carbon copy technology",
    },
    {
      id: 2,
      name: "Spiral Binding",
      category: "binding",
      image: "/placeholder.svg?height=300&width=300&text=Spiral+Binding",
      description: "Professional spiral binding services for documents and presentations",
    },
    {
      id: 3,
      name: "Roll Up Banner",
      category: "banners",
      image: "/placeholder.svg?height=300&width=300&text=Roll+Up+Banner",
      description: "One-sided roll up banners with stand included for events and promotions",
    },
    {
      id: 4,
      name: "Digital Banner",
      category: "banners",
      image: "/placeholder.svg?height=300&width=300&text=Digital+Banner",
      description: "Custom digital banners with flexible sizing options",
    },
    {
      id: 5,
      name: "Sticker/Label",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Stickers",
      description: "High-quality custom stickers and labels for various applications",
    },
    {
      id: 6,
      name: "Envelope Print",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Envelope+Print",
      description: "Professional envelope printing services with multiple size options",
    },
    {
      id: 7,
      name: "Sidewalk Sign",
      category: "signage",
      image: "/placeholder.svg?height=300&width=300&text=Sidewalk+Sign",
      description: "Double-sided sidewalk signs for outdoor advertising and promotions",
    },
    {
      id: 8,
      name: "Regular Photo",
      category: "photo",
      image: "/placeholder.svg?height=300&width=300&text=Photo+Print",
      description: "High-quality photo printing in various standard sizes",
    },
    {
      id: 9,
      name: "Lamination",
      category: "services",
      image: "/placeholder.svg?height=300&width=300&text=Lamination",
      description: "Document lamination services for protection and durability",
    },
    {
      id: 10,
      name: "Office Services",
      category: "services",
      image: "/placeholder.svg?height=300&width=300&text=Office+Services",
      description: "Scan & Email, Computer Print, FAX, and Bangla Typing services",
    },
    {
      id: 11,
      name: "Copy Services",
      category: "services",
      image: "/placeholder.svg?height=300&width=300&text=Copy+Services",
      description: "Color and black & white copying with bulk pricing options",
    },
    {
      id: 12,
      name: "Passport Photo",
      category: "photo",
      image: "/placeholder.svg?height=300&width=300&text=Passport+Photo",
      description: "Professional passport photos with multiple copy options",
    },
    {
      id: 13,
      name: "T-shirt/Cap/Mug",
      category: "merchandise",
      image: "/placeholder.svg?height=300&width=300&text=Custom+Merchandise",
      description: "Custom printed t-shirts, caps, and mugs with bulk discounts",
    },
    {
      id: 14,
      name: "Event Ticket",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Event+Tickets",
      description: "Professional event tickets with custom designs and bulk pricing",
    },
    {
      id: 15,
      name: "Calendar",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Calendar",
      description: "Custom calendars in various sizes and page counts",
    },
    {
      id: 16,
      name: "Waterproof Sticker",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Waterproof+Sticker",
      description: "Durable waterproof stickers sold per square foot",
    },
    {
      id: 17,
      name: "Coroplast Board",
      category: "signage",
      image: "/placeholder.svg?height=300&width=300&text=Coroplast+Board",
      description: "Lightweight corrugated plastic boards for signage and displays",
    },
    {
      id: 18,
      name: "Business Card",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Business+Cards",
      description: "Professional business cards with one-side and two-side printing options",
    },
    {
      id: 19,
      name: "Restaurant Menu",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Restaurant+Menu",
      description: "High-quality restaurant menus with various quantity options",
    },
    {
      id: 20,
      name: "Flyer & Post Card",
      category: "printing",
      image: "/placeholder.svg?height=300&width=300&text=Flyers",
      description: "Professional flyers and postcards for marketing and promotions",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Browse our complete collection of printing services and custom merchandise. Click on any product to view
            details and pricing.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      {hoveredProduct === product.id && (
                        <Button
                          variant="secondary"
                          className="opacity-100 transition-opacity duration-300 bg-red-600 text-white hover:bg-red-700 border-0"
                        >
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect products for your business or event needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contact Us
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
      </section>
    </div>
  )
}
