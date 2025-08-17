"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Phone",
      details: ["+13478411426"],
      action: "tel:+13478411426",
      isClickable: true,
    },
    {
      icon: <Mail className="h-6 w-6 text-red-600" />,
      title: "Email",
      details: ["libertyprinting1098@gmail.com", "lpsny1098@gmail.com"],
      action: "mailto:libertyprinting1098@gmail.com",
      isClickable: true,
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Address",
      details: ["1098 Liberty Ave, Brooklyn", "NY 11208, United States"],
      action: "https://maps.app.goo.gl/SujFSZEmbUeRzZ9r6",
      isClickable: true,
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: "#",
      isClickable: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your custom order? Have questions about our services? We're here to help and would love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, or questions..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help with all your custom sports gear needs. Reach out to us through any of the
                  following channels, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">
                              {info.isClickable && info.action !== "#" ? (
                                <a
                                  href={info.action}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-red-600 cursor-pointer transition-colors"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61577837999855"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
            <p className="text-lg text-gray-600">
              Come visit us at our location in Brooklyn. We'd love to show you our products and discuss your project in
              person.
            </p>
          </div>

          {/* Interactive Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Liberty Printing & Sports</h3>
              <a
                href="https://maps.app.goo.gl/SujFSZEmbUeRzZ9r6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-red-600 hover:text-red-700 transition-colors cursor-pointer"
              >
                1098 Liberty Ave, Brooklyn, NY 11208, United States
              </a>
            </div>

            {/* Embedded Google Maps */}
            <div className="flex justify-center mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.8045879674173!2d-73.86869240000001!3d40.6782744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d884b9d8113%3A0x422ef2ee0597a9e6!2sLiberty%20Printing%20%26%20Sports!5e0!3m2!1sen!2sbd!4v1755451637121!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md w-full max-w-4xl"
              />
            </div>

            <div className="text-center">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <a href="https://maps.app.goo.gl/SujFSZEmbUeRzZ9r6" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
