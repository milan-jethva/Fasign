"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MouseWaveEffect } from "@/components/mouse-wave-effect"
import { ArrowLeft, Zap, Users, Target, Heart } from "lucide-react"
import { useEffect } from "react"

export default function AboutPage() {
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
              <Link href="/about" className="text-white font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Fasign</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We're revolutionizing design creation with AI-powered tools that make professional content accessible to
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Fasign, we believe great design shouldn't be limited by technical skills or expensive software. Our
                  AI-powered platform democratizes design creation, enabling anyone to produce stunning,
                  professional-quality content in seconds.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-gray-400">Generate professional designs in seconds, not hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">For Everyone</h3>
                    <p className="text-gray-400">No design experience needed. Perfect for creators of all levels.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Focused</h3>
                    <p className="text-gray-400">Maintain consistency with your brand identity across all designs.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800/30 border-gray-700 p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Built with Passion</h3>
                  <p className="text-gray-300">
                    Founded in 2024, Fasign was born from the frustration of spending hours on simple design tasks.
                    We're a team of designers and engineers who believe technology should amplify creativity, not
                    complicate it.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">Trusted by thousands of creators worldwide</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Designs?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of creators who are already using Fasign to bring their ideas to life.
          </p>
          <Link href="/#generator">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Creating Now
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
