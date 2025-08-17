"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Upload, Eye, ShoppingCart } from "lucide-react"

// Product data with all the products and pricing
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Receipt Book-Two Part",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Receipt+Book",
        "/placeholder.svg?height=400&width=400&text=Receipt+Book+Sample",
        "/placeholder.svg?height=400&width=400&text=Receipt+Book+Pages",
      ],
      description:
        "Professional two-part receipt books with auto carbon copy technology. Perfect for businesses that need instant duplicate receipts. Each book contains numbered pages for easy tracking and organization.",
      features: [
        "Two-part auto carbon copy",
        "Numbered pages",
        "Professional quality paper",
        "Bulk pricing available",
        "Custom header printing available",
      ],
      sizeOptions: [{ value: "5.5x8.5", label: '5.5" x 8.5"' }],
      materialOptions: [{ value: "auto-carbon", label: "Auto Carbon", price: 0 }],
      quantityOptions: [
        { value: "10", label: "10 Books", price: 140 },
        { value: "20", label: "20 Books", price: 250 },
      ],
    },
    "2": {
      id: 2,
      name: "Spiral Binding",
      category: "binding",
      images: [
        "/placeholder.svg?height=400&width=400&text=Spiral+Binding",
        "/placeholder.svg?height=400&width=400&text=Bound+Document",
        "/placeholder.svg?height=400&width=400&text=Binding+Options",
      ],
      description:
        "Professional spiral binding services for documents, presentations, reports, and manuals. Durable and professional finish.",
      features: [
        "Professional appearance",
        "Durable binding",
        "Lay-flat design",
        "Various cover options",
        "Quick turnaround",
      ],
      sizeOptions: [{ value: "any", label: "Any Size" }],
      materialOptions: [{ value: "standard", label: "Standard Spiral", price: 0 }],
      quantityOptions: [{ value: "1", label: "Per Book", price: 7 }],
    },
    "3": {
      id: 3,
      name: "Roll Up Banner",
      category: "banners",
      images: [
        "/placeholder.svg?height=400&width=400&text=Roll+Up+Banner",
        "/placeholder.svg?height=400&width=400&text=Banner+Stand",
        "/placeholder.svg?height=400&width=400&text=Banner+Display",
      ],
      description:
        "One-sided roll up banners with stand included. Perfect for trade shows, events, and retail displays. Portable and easy to set up.",
      features: ["Includes stand", "One-sided printing", "Portable design", "Easy setup", "Professional quality"],
      sizeOptions: [{ value: "33x80", label: '33" x 80"' }],
      materialOptions: [{ value: "vinyl", label: "Vinyl Banner Material", price: 0 }],
      quantityOptions: [{ value: "1", label: "1 Banner with Stand", price: 210 }],
    },
    "4": {
      id: 4,
      name: "Digital Banner",
      category: "banners",
      images: [
        "/placeholder.svg?height=400&width=400&text=Digital+Banner",
        "/placeholder.svg?height=400&width=400&text=Custom+Banner",
        "/placeholder.svg?height=400&width=400&text=Banner+Print",
      ],
      description:
        "Custom digital banners with flexible sizing options. High-quality printing for indoor and outdoor use.",
      features: [
        "Custom sizing",
        "High-resolution printing",
        "Weather resistant",
        "Vibrant colors",
        "Quick production",
      ],
      sizeOptions: [{ value: "custom", label: "Custom Size (specify dimensions)" }],
      materialOptions: [{ value: "vinyl", label: "Vinyl Banner Material", price: 0 }],
      quantityOptions: [{ value: "sqft", label: "Per Square Foot", price: 4 }],
    },
    "5": {
      id: 5,
      name: "Sticker/Label",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Custom+Stickers",
        "/placeholder.svg?height=400&width=400&text=Label+Sheets",
        "/placeholder.svg?height=400&width=400&text=Sticker+Samples",
      ],
      description:
        "High-quality custom stickers and labels for various applications. Perfect for branding, promotions, and product labeling.",
      features: ["Custom designs", "Durable adhesive", "Various finishes", "Bulk pricing", "Quick turnaround"],
      sizeOptions: [{ value: "3.5x2.5", label: '3.5" x 2.5"' }],
      materialOptions: [{ value: "vinyl", label: "Vinyl Sticker", price: 0 }],
      quantityOptions: [
        { value: "100", label: "100 pieces", price: 50 },
        { value: "500", label: "500 pieces", price: 160 },
        { value: "1000", label: "1000 pieces", price: 250 },
        { value: "5000", label: "5000 pieces", price: 450 },
      ],
    },
    "6": {
      id: 6,
      name: "Envelope Print",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Envelope+Print",
        "/placeholder.svg?height=400&width=400&text=Custom+Envelopes",
        "/placeholder.svg?height=400&width=400&text=Business+Envelopes",
      ],
      description:
        "Professional envelope printing services with multiple size options. Perfect for business correspondence and mailing.",
      features: ["Professional printing", "Multiple sizes", "Custom designs", "Bulk quantities", "Quick delivery"],
      sizeOptions: [
        { value: "4x10", label: '4" x 10"', price: 160 },
        { value: "9x12", label: '9" x 12"', price: 425 },
      ],
      materialOptions: [{ value: "standard", label: "Standard Envelope Paper", price: 0 }],
      quantityOptions: [{ value: "bulk", label: "Bulk Order (contact for quantity)", price: 0 }],
    },
    "7": {
      id: 7,
      name: "Sidewalk Sign",
      category: "signage",
      images: [
        "/placeholder.svg?height=400&width=400&text=Sidewalk+Sign",
        "/placeholder.svg?height=400&width=400&text=A-Frame+Sign",
        "/placeholder.svg?height=400&width=400&text=Outdoor+Sign",
      ],
      description:
        "Double-sided sidewalk signs for outdoor advertising and promotions. Weather-resistant and highly visible.",
      features: ["Double-sided", "Weather resistant", "Portable", "High visibility", "Durable construction"],
      sizeOptions: [{ value: "24x36", label: '24" x 36"' }],
      materialOptions: [{ value: "coroplast", label: "Coroplast Board", price: 0 }],
      quantityOptions: [{ value: "1", label: "1 Double-Sided Sign", price: 210 }],
    },
    "8": {
      id: 8,
      name: "Regular Photo",
      category: "photo",
      images: [
        "/placeholder.svg?height=400&width=400&text=Photo+Print",
        "/placeholder.svg?height=400&width=400&text=Photo+Sizes",
        "/placeholder.svg?height=400&width=400&text=Quality+Photos",
      ],
      description: "High-quality photo printing in various standard sizes. Perfect for personal and professional use.",
      features: [
        "High-quality printing",
        "Multiple sizes",
        "Quick processing",
        "Professional finish",
        "Competitive pricing",
      ],
      sizeOptions: [
        { value: "4x6", label: '4" x 6"', price: 2 },
        { value: "5x7", label: '5" x 7"', price: 4 },
        { value: "8.5x11", label: '8.5" x 11"', price: 7 },
      ],
      materialOptions: [{ value: "photo-paper", label: "Photo Paper", price: 0 }],
      quantityOptions: [{ value: "1", label: "Per Photo", price: 0 }],
    },
    "9": {
      id: 9,
      name: "Lamination",
      category: "services",
      images: [
        "/placeholder.svg?height=400&width=400&text=Lamination",
        "/placeholder.svg?height=400&width=400&text=Laminated+Documents",
        "/placeholder.svg?height=400&width=400&text=Protection+Service",
      ],
      description:
        "Document lamination services for protection and durability. Various sizes available for different document types.",
      features: ["Document protection", "Multiple sizes", "Clear finish", "Durable", "Quick service"],
      sizeOptions: [
        { value: "id", label: "ID Size", price: 3 },
        { value: "8.5x11", label: '8.5" x 11"', price: 6 },
        { value: "12x18", label: '12" x 18"', price: 12 },
      ],
      materialOptions: [{ value: "lamination-film", label: "Lamination Film", price: 0 }],
      quantityOptions: [{ value: "1", label: "Per Page", price: 0 }],
    },
    "10": {
      id: 10,
      name: "Office Services",
      category: "services",
      images: [
        "/placeholder.svg?height=400&width=400&text=Office+Services",
        "/placeholder.svg?height=400&width=400&text=Scan+Email",
        "/placeholder.svg?height=400&width=400&text=Digital+Services",
      ],
      description:
        "Complete office services including scanning, email, computer printing, fax, and Bangla typing services.",
      features: ["Scan & Email", "Computer Print", "FAX Service", "Bangla Typing", "Quick turnaround"],
      sizeOptions: [{ value: "standard", label: "Standard Service" }],
      materialOptions: [{ value: "digital", label: "Digital Service", price: 0 }],
      quantityOptions: [
        { value: "scan", label: "Scan & Email (per page)", price: 1 },
        { value: "print", label: "Computer Print (per page)", price: 1 },
        { value: "fax", label: "FAX", price: 1 },
        { value: "bangla", label: "Bangla Type (per page)", price: 10 },
      ],
    },
    "11": {
      id: 11,
      name: "Copy Services",
      category: "services",
      images: [
        "/placeholder.svg?height=400&width=400&text=Copy+Services",
        "/placeholder.svg?height=400&width=400&text=Color+Copy",
        "/placeholder.svg?height=400&width=400&text=BW+Copy",
      ],
      description: "Color and black & white copying services with bulk pricing options. Various page sizes available.",
      features: ["Color copying", "Black & white copying", "Bulk discounts", "Legal size available", "Quick service"],
      sizeOptions: [
        { value: "standard", label: "Standard (8.5x11)" },
        { value: "legal", label: "Legal Size" },
      ],
      materialOptions: [{ value: "copy-paper", label: "Copy Paper", price: 0 }],
      quantityOptions: [
        { value: "color", label: "Color Copy", price: 1 },
        { value: "bw-1-5", label: "B&W Copy (1-5 pages)", price: 0.5 },
        { value: "bw-6-100", label: "B&W Copy (6-100 pages)", price: 0.2 },
        { value: "bw-101-999", label: "B&W Copy (101-999 pages)", price: 0.15 },
        { value: "bw-1000+", label: "B&W Copy (1000+ pages)", price: 0.1 },
        { value: "legal", label: "Legal Page Copy", price: 1 },
      ],
    },
    "12": {
      id: 12,
      name: "Passport Photo",
      category: "photo",
      images: [
        "/placeholder.svg?height=400&width=400&text=Passport+Photo",
        "/placeholder.svg?height=400&width=400&text=ID+Photos",
        "/placeholder.svg?height=400&width=400&text=Professional+Photos",
      ],
      description:
        "Professional passport photos with multiple copy options. Meets all official requirements for passport and ID applications.",
      features: [
        "Official requirements",
        "Professional quality",
        "Multiple copies",
        "Quick service",
        "Guaranteed acceptance",
      ],
      sizeOptions: [{ value: "passport", label: "Passport Size (2x2)" }],
      materialOptions: [{ value: "photo-paper", label: "Photo Paper", price: 0 }],
      quantityOptions: [
        { value: "4", label: "4 Copies", price: 10 },
        { value: "6", label: "6 Copies", price: 15 },
        { value: "8", label: "8 Copies", price: 20 },
      ],
    },
    "13": {
      id: 13,
      name: "T-shirt/Cap/Mug",
      category: "merchandise",
      images: [
        "/placeholder.svg?height=400&width=400&text=Custom+Tshirt",
        "/placeholder.svg?height=400&width=400&text=Custom+Cap",
        "/placeholder.svg?height=400&width=400&text=Custom+Mug",
      ],
      description:
        "Custom printed t-shirts, caps, and mugs with bulk discounts. Perfect for promotional items, events, and gifts.",
      features: ["Custom designs", "Bulk discounts", "High-quality printing", "Various colors", "Quick turnaround"],
      sizeOptions: [{ value: "standard", label: "Standard Sizes Available" }],
      materialOptions: [{ value: "standard", label: "Standard Materials", price: 0 }],
      quantityOptions: [
        { value: "1", label: "1 Piece", price: 15 },
        { value: "2-5", label: "2-5 Pieces", price: 10 },
        { value: "6-12", label: "6-12 Pieces", price: 8 },
        { value: "13+", label: "13+ Pieces", price: 6 },
      ],
    },
    "14": {
      id: 14,
      name: "Event Ticket",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Event+Tickets",
        "/placeholder.svg?height=400&width=400&text=Custom+Tickets",
        "/placeholder.svg?height=400&width=400&text=Ticket+Design",
      ],
      description:
        "Professional event tickets with custom designs and bulk pricing. Perfect for concerts, events, and fundraisers.",
      features: ["Custom designs", "Perforated edges", "Numbering available", "Bulk pricing", "Professional quality"],
      sizeOptions: [{ value: "2x5", label: '2" x 5"' }],
      materialOptions: [{ value: "ticket-stock", label: "Ticket Stock Paper", price: 0 }],
      quantityOptions: [
        { value: "100", label: "100 Copies", price: 75 },
        { value: "200", label: "200 Copies", price: 120 },
        { value: "500", label: "500 Copies", price: 160 },
        { value: "1000", label: "1000 Copies", price: 280 },
      ],
    },
    "15": {
      id: 15,
      name: "Calendar",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Custom+Calendar",
        "/placeholder.svg?height=400&width=400&text=Wall+Calendar",
        "/placeholder.svg?height=400&width=400&text=Desk+Calendar",
      ],
      description:
        "Custom calendars in various sizes and page counts. Perfect for promotional items and business gifts.",
      features: ["Custom designs", "Multiple sizes", "Various page counts", "High-quality printing", "Bulk pricing"],
      sizeOptions: [
        { value: "11x17-12", label: '11" x 17" (12 Pages)' },
        { value: "9x12-6", label: '9" x 12" (6 Pages)' },
      ],
      materialOptions: [{ value: "calendar-paper", label: "Calendar Paper", price: 0 }],
      quantityOptions: [
        { value: "100-11x17", label: "100 Pieces (11x17, 12 pages)", price: 220 },
        { value: "500-9x12", label: "500 Pieces (9x12, 6 pages)", price: 2400 },
        { value: "1000-9x12", label: "1000 Pieces (9x12, 6 pages)", price: 3600 },
      ],
    },
    "16": {
      id: 16,
      name: "Waterproof Sticker",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Waterproof+Sticker",
        "/placeholder.svg?height=400&width=400&text=Durable+Stickers",
        "/placeholder.svg?height=400&width=400&text=Weather+Resistant",
      ],
      description:
        "Durable waterproof stickers sold per square foot. Perfect for outdoor applications and harsh environments.",
      features: ["Waterproof", "UV resistant", "Durable adhesive", "Custom sizing", "Weather resistant"],
      sizeOptions: [{ value: "custom", label: "Custom Size (per sq ft)" }],
      materialOptions: [{ value: "waterproof-vinyl", label: "Waterproof Vinyl", price: 0 }],
      quantityOptions: [{ value: "sqft", label: "Per Square Foot", price: 5 }],
    },
    "17": {
      id: 17,
      name: "Coroplast Board",
      category: "signage",
      images: [
        "/placeholder.svg?height=400&width=400&text=Coroplast+Board",
        "/placeholder.svg?height=400&width=400&text=Corrugated+Plastic",
        "/placeholder.svg?height=400&width=400&text=Sign+Board",
      ],
      description: "Lightweight corrugated plastic boards for signage and displays. Durable and weather-resistant.",
      features: ["Lightweight", "Weather resistant", "Easy to cut", "Printable surface", "Reusable"],
      sizeOptions: [{ value: "custom", label: "Custom Size (per sq ft)" }],
      materialOptions: [{ value: "coroplast", label: "Coroplast Material", price: 0 }],
      quantityOptions: [{ value: "sqft", label: "Per Square Foot", price: 8 }],
    },
    "18": {
      id: 18,
      name: "Business Card",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Business+Cards",
        "/placeholder.svg?height=400&width=400&text=Professional+Cards",
        "/placeholder.svg?height=400&width=400&text=Custom+Design",
      ],
      description:
        "Professional business cards with one-side and two-side printing options. High-quality cardstock and printing.",
      features: ["Professional quality", "One or two-sided", "Custom designs", "Bulk pricing", "Quick turnaround"],
      sizeOptions: [{ value: "standard", label: "Standard (3.5x2)" }],
      materialOptions: [{ value: "cardstock", label: "Premium Cardstock", price: 0 }],
      quantityOptions: [
        { value: "100-one", label: "100 Pieces (One Side)", price: 25 },
        { value: "200-one", label: "200 Pieces (One Side)", price: 35 },
        { value: "500-two", label: "500 Pieces (Two Side)", price: 50 },
        { value: "1000-two", label: "1000 Pieces (Two Side)", price: 75 },
        { value: "5000-two", label: "5000 Pieces (Two Side)", price: 110 },
      ],
    },
    "19": {
      id: 19,
      name: "Restaurant Menu",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Restaurant+Menu",
        "/placeholder.svg?height=400&width=400&text=Menu+Design",
        "/placeholder.svg?height=400&width=400&text=Food+Menu",
      ],
      description:
        "High-quality restaurant menus with various quantity options. Professional printing for food service businesses.",
      features: ["Food-safe materials", "Durable finish", "Custom designs", "Various sizes", "Bulk pricing"],
      sizeOptions: [{ value: "standard", label: "Standard Menu Size" }],
      materialOptions: [{ value: "menu-paper", label: "Menu Paper/Cardstock", price: 0 }],
      quantityOptions: [
        { value: "500", label: "500 Pieces", price: 300 },
        { value: "1000", label: "1000 Pieces", price: 400 },
        { value: "2500", label: "2500 Pieces", price: 450 },
        { value: "5000", label: "5000 Pieces", price: 800 },
        { value: "10000", label: "10000 Pieces", price: 1500 },
      ],
    },
    "20": {
      id: 20,
      name: "Flyer & Post Card",
      category: "printing",
      images: [
        "/placeholder.svg?height=400&width=400&text=Flyers",
        "/placeholder.svg?height=400&width=400&text=Postcards",
        "/placeholder.svg?height=400&width=400&text=Marketing+Materials",
      ],
      description:
        "Professional flyers and postcards for marketing and promotions. High-quality printing with bulk pricing options.",
      features: ["High-quality printing", "Custom designs", "Bulk pricing", "Quick turnaround", "Various finishes"],
      sizeOptions: [{ value: "11x17", label: '11" x 17"' }],
      materialOptions: [{ value: "flyer-paper", label: "Flyer Paper", price: 0 }],
      quantityOptions: [
        { value: "100", label: "100 Pieces", price: 50 },
        { value: "500", label: "500 Pieces", price: 75 },
        { value: "1000", label: "1000 Pieces", price: 115 },
        { value: "2500", label: "2500 Pieces", price: 175 },
        { value: "5000", label: "5000 Pieces", price: 225 },
      ],
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [selectedQuantity, setSelectedQuantity] = useState("")
  const [customDescription, setCustomDescription] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [customDimensions, setCustomDimensions] = useState("")

  const product = getProduct(params.id)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const calculatePrice = () => {
    const selectedSizeOption = product.sizeOptions.find((s) => s.value === selectedSize)
    const selectedMaterialOption = product.materialOptions.find((m) => m.value === selectedMaterial)
    const selectedQuantityOption = product.quantityOptions.find((q) => q.value === selectedQuantity)

    let price = 0

    if (selectedSizeOption && "price" in selectedSizeOption) {
      price = selectedSizeOption.price
    }

    if (selectedQuantityOption) {
      price = selectedQuantityOption.price
    }

    if (selectedMaterialOption && "price" in selectedMaterialOption) {
      price += selectedMaterialOption.price
    }

    return price
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/services" className="inline-flex items-center text-red-600 hover:text-red-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-md">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-red-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details & Options */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Customization Options */}
            <Card>
              <CardHeader>
                <CardTitle>Customize Your Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Size Selection */}
                <div className="space-y-2">
                  <Label htmlFor="size">Size Options</Label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizeOptions.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedSize === "custom" && (
                    <Input
                      placeholder="Enter custom dimensions (e.g., 12x18)"
                      value={customDimensions}
                      onChange={(e) => setCustomDimensions(e.target.value)}
                    />
                  )}
                </div>

                {/* Material Selection */}
                <div className="space-y-2">
                  <Label htmlFor="material">Material</Label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.materialOptions.map((material) => (
                        <SelectItem key={material.value} value={material.value}>
                          {material.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity Selection */}
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity & Pricing</Label>
                  <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.quantityOptions.map((qty) => (
                        <SelectItem key={qty.value} value={qty.value}>
                          {qty.label} - ${qty.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Special Instructions (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Any special requirements or instructions for your order..."
                    value={customDescription}
                    onChange={(e) => setCustomDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Design Options */}
                <div className="space-y-4">
                  <Label>Design Options</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/designs">
                      <Button variant="outline" className="w-full h-12 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Browse Designs
                      </Button>
                    </Link>
                    <div className="relative">
                      <Input
                        type="file"
                        accept="image/*,.pdf,.ai,.psd"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Button variant="outline" className="w-full h-12 pointer-events-none bg-transparent">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Design
                      </Button>
                    </div>
                  </div>
                  {uploadedFile && <p className="text-sm text-green-600">Uploaded: {uploadedFile.name}</p>}
                </div>

                {/* Price Display */}
                {selectedQuantity && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Price:</span>
                      <span className="text-2xl font-bold text-red-600">${calculatePrice()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">*Final price may vary based on design complexity</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700"
                    disabled={!selectedSize || !selectedMaterial || !selectedQuantity}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
