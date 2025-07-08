"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQs() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Custom Orders",
      faqs: [
        {
          question: "What is the minimum order quantity for custom jerseys?",
          answer:
            "Our minimum order quantity is 10 pieces for custom jersey printing. However, we can accommodate smaller orders for individual customers with a slight price adjustment.",
        },
        {
          question: "Can I provide my own design for printing?",
          answer:
            "You can provide your own design in high-resolution format (AI, PSD, PNG, or PDF). Our design team will review it and make any necessary adjustments for optimal printing results.",
        },
        {
          question: "Do you offer design services?",
          answer:
            "Yes, we have an in-house design team that can create custom designs for your team. This service is included in most orders, and we'll work with you to create the perfect design that matches your vision.",
        },
        {
          question: "What file formats do you accept for designs?",
          answer:
            "We accept AI, PSD, PNG, PDF, and JPG files. For best results, we recommend vector formats (AI) or high-resolution images (300 DPI minimum).",
        },
      ],
    },
    {
      title: "Printing Methods",
      faqs: [
        {
          question: "What printing methods do you use?",
          answer:
            "We use several printing methods including sublimation printing, screen printing, heat transfer, and embroidery. The method depends on the fabric type, design complexity, and quantity ordered.",
        },
        {
          question: "Which printing method is best for jerseys?",
          answer:
            "For sports jerseys, we typically recommend sublimation printing as it provides vibrant colors, durability, and breathability. It's perfect for polyester fabrics and complex designs.",
        },
        {
          question: "How durable is the printing?",
          answer:
            "Our printing is designed to last. Sublimation printing becomes part of the fabric and won't crack, peel, or fade with proper care. Screen printing and heat transfer also offer excellent durability when properly maintained.",
        },
      ],
    },
    {
      title: "Delivery & Timeline",
      faqs: [
        {
          question: "What is the typical delivery time?",
          answer:
            "Standard delivery time is 7-10 business days for custom orders. Rush orders can be completed in 3-5 business days with an additional fee. Delivery time may vary during peak seasons.",
        },
        {
          question: "Do you deliver nationwide?",
          answer:
            "Yes, we deliver across Bangladesh. We use reliable courier services and also offer pickup from our Dhaka location. Delivery charges vary based on location and order size.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, once your order is dispatched, we'll provide you with a tracking number so you can monitor your shipment's progress.",
        },
        {
          question: "What if I need my order urgently?",
          answer:
            "We offer rush order services for urgent requirements. Please contact us to discuss your timeline, and we'll do our best to accommodate your needs with appropriate rush charges.",
        },
      ],
    },
    {
      title: "Returns & Quality",
      faqs: [
        {
          question: "What is your return policy?",
          answer:
            "We offer returns within 7 days of delivery if there are manufacturing defects or errors on our part. Custom-made items cannot be returned unless there's a quality issue or mistake in production.",
        },
        {
          question: "What if I'm not satisfied with the print quality?",
          answer:
            "Quality is our top priority. If you're not satisfied with the print quality due to our error, we'll reprint your order at no additional cost. Please contact us within 48 hours of receiving your order.",
        },
        {
          question: "Do you provide samples before bulk orders?",
          answer:
            "Yes, we can provide samples for bulk orders (50+ pieces). Sample costs will be adjusted against your final order. This helps ensure you're completely satisfied before we proceed with the full production.",
        },
      ],
    },
    {
      title: "Pricing & Discounts",
      faqs: [
        {
          question: "Do you offer bulk discounts?",
          answer:
            "Yes, we offer attractive bulk discounts starting from orders of 25+ pieces. The discount percentage increases with quantity. Contact us for a detailed quote based on your requirements.",
        },
        {
          question: "What factors affect the pricing?",
          answer:
            "Pricing depends on quantity, printing method, number of colors, fabric type, and design complexity. We provide transparent pricing with no hidden costs.",
        },
        {
          question: "Do you offer discounts for schools and sports clubs?",
          answer:
            "Yes, we offer special discounts for educational institutions, sports clubs, and non-profit organizations. Please contact us with your organization details for special pricing.",
        },
      ],
    },
    {
      title: "Payment Options",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept Bkash, Nagad, Rocket, bank transfers, Visa/Mastercard, and cash on delivery (for orders within Dhaka). A 50% advance payment is required for custom orders.",
        },
        {
          question: "Is cash on delivery available?",
          answer:
            "Cash on delivery is available for orders within Dhaka city and selected areas. A 30% advance payment is required for custom orders even with COD.",
        },
        {
          question: "When do I need to make payment?",
          answer:
            "We require 50% advance payment to start production, with the remaining 50% due before delivery. For COD orders, 30% advance is required.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common questions about our services, ordering process, and policies. Can't find what you're
            looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">{category.title}</h2>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const itemIndex = categoryIndex * 100 + faqIndex
                  const isOpen = openItems.includes(itemIndex)

                  return (
                    <Card key={faqIndex} className="border-0 shadow-md">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-red-600 flex-shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Contact us directly for personalized assistance with your custom order
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+8801234567890"
              className="inline-flex items-center justify-center px-8 py-3 border border-red-600 text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-600 hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
