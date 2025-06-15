"use client"
import { useEffect } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MouseWaveEffect } from "@/components/mouse-wave-effect"
import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              Have questions about Fasign? We'd love to hear from you. Reach out to us through any of the channels
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800/30 border-gray-700 p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email Us</h3>
              <p className="text-gray-400 mb-4">Send us an email anytime!</p>
              <a
                href="mailto:milanjethva13@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                milanjethva13@gmail.com
              </a>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Live Chat</h3>
              <p className="text-gray-400 mb-4">Chat with our team</p>
              <p className="text-sm text-gray-500">Available Mon-Sun, 9AM-8PM </p>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Response Time</h3>
              <p className="text-gray-400 mb-4">We typically respond within</p>
              <p className="text-blue-400 font-medium text-lg">24 hours</p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <Card className="bg-gray-800/30 border-gray-700 p-6">
                <h4 className="text-white font-medium mb-2">Q: How does Fasign work?</h4>
                <p className="text-gray-400">
                  Simply upload your image, describe your vision, and our AI generates stunning designs instantly. It's
                  that easy!
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700 p-6">
                <h4 className="text-white font-medium mb-2">Q: What file formats do you support?</h4>
                <p className="text-gray-400">
                  We currently support PNG images for the best quality results. More formats coming soon!
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700 p-6">
                <h4 className="text-white font-medium mb-2">Q: Is there a free trial?</h4>
                <p className="text-gray-400">
                  Yes! You can try Fasign with limited generations to see how it works before committing to a plan.
                </p>
              </Card>

              <Card className="bg-gray-800/30 border-gray-700 p-6">
                <h4 className="text-white font-medium mb-2">Q: How long does it take to generate a design?</h4>
                <p className="text-gray-400">
                  Our AI typically generates designs in just a few seconds, so you can see results almost instantly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Creating?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't wait! Try Fasign now and transform your images into stunning designs.
          </p>
          <Link href="/#generator">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started Now
            </Button>
          </Link>
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
