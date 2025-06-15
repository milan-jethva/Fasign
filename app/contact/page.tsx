"use client"

import type React from "react"
import { useEffect } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MouseWaveEffect } from "@/components/mouse-wave-effect"
import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      <MouseWaveEffect />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fasign
              </h1>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white font-medium">
                Contact Us
              </Link>
              <Link href="/#generator">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Have questions about Fasign? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-gray-800/30 border-gray-700 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      type="text"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      type="text"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-32"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-800/30 border-gray-700 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <p className="text-gray-400 mb-2">Send us an email anytime!</p>
                      <a href="mailto:hello@fasign.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        hello@fasign.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gray-800/30 border-gray-700 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Live Chat</h3>
                      <p className="text-gray-400 mb-2">Chat with our team</p>
                      <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gray-800/30 border-gray-700 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-gray-400 mb-2">We typically respond within</p>
                      <p className="text-blue-400 font-medium">24 hours</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Q: How does Fasign work?</span>
                    <br />
                    A: Simply upload your image, describe your vision, and our AI generates stunning designs instantly.
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Q: What file formats do you support?</span>
                    <br />
                    A: We currently support PNG images for the best quality results.
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Q: Is there a free trial?</span>
                    <br />
                    A: Yes! You can try Fasign with limited generations to see how it works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 Fasign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
