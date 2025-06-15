"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MouseWaveEffect } from "@/components/mouse-wave-effect"
import { Upload, Download, Twitter, Instagram, Linkedin, Github, ArrowRight } from "lucide-react"
// Replace with your FastAPI URL

export default function LandingPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const demoImages = [
    { src: "/images/cosmetics-original.png", title: "Original Image" },
    { src: "/images/cosmetics-mountain.png", title: "Mountain Background" },
    { src: "/images/cosmetics-teal.png", title: "Teal Gradient" },
    { src: "/images/cosmetics-gray.png", title: "Gray Studio" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % demoImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

 const handleGenerate = async () => {
  if (!uploadedImage || !prompt) return

  setIsGenerating(true)
  setError(null)

  try {
    // Convert base64 image to Blob
    const base64 = uploadedImage.split(',')[1]
    const mime = uploadedImage.split(',')[0].split(':')[1].split(';')[0]
    const byteString = atob(base64)
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    const blob = new Blob([ab], { type: mime })

    const formData = new FormData()
    formData.append("image", blob, "image.png")
    formData.append("user_prompt", prompt)  // 👈 MUST MATCH FASTAPI KEY

    const apiResponse = await fetch("https://imageapi-backend.onrender.com/inpaint/", {
      method: "POST",
      body: formData,
    })

    if (!apiResponse.ok) {
      const errText = await apiResponse.text()
      console.error("API Error:", errText)
      throw new Error("API request failed")
    }

    const result = await apiResponse.blob()
    const imageUrl = URL.createObjectURL(result)
    setGeneratedImage(imageUrl)

  } catch (err) {
    console.error("Error generating image:", err)
    setError("Failed to generate image. Please try again.")
  } finally {
    setIsGenerating(false)
  }
}


  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      <MouseWaveEffect />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fasign
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Button
                onClick={scrollToGenerator}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Design Eye-Catching Posts —{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                AI-powered tool that turns your image and prompt into stunning content, effortlessly.
              </p>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                Save time, stay on-brand, and post with confidence.
              </p>
            </div>
            <Button
              onClick={scrollToGenerator}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See Fasign in Action</h2>
            <p className="text-gray-400 text-lg">Watch how AI transforms your images into stunning designs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Images */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                {demoImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}

                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-white font-medium text-center">{demoImages[currentImageIndex].title}</p>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {demoImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-blue-500" : "bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Upload Your Image</h3>
                    <p className="text-gray-400">Start with any PNG image from Pngtree or your own design</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Describe Your Vision</h3>
                    <p className="text-gray-400">Tell our AI what style, background, or mood you want</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Get Multiple Variations</h3>
                    <p className="text-gray-400">Receive stunning designs ready for social media</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={scrollToGenerator}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Try It Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Create Your Design</h2>
            <p className="text-gray-400 text-lg">Upload your image and describe what you want to create</p>
          </div>

          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Image</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Uploaded"
                        className="max-w-full h-48 object-contain mx-auto rounded"
                      />
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-gray-400">Drop your PNG image here or</p>
                          <label className="text-blue-400 hover:text-blue-300 cursor-pointer">
                            browse files
                            <input type="file" accept="image/png" onChange={handleImageUpload} className="hidden" />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Describe Your Vision</label>
                  <Textarea
                    placeholder="e.g., Make this a vibrant social media post with modern typography and bright colors..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-32"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!uploadedImage || !prompt || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? "Generating..." : "Generate Design"}
                </Button>
              </div>

              {/* Result Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Generated Result</label>
                  <div className="border border-gray-600 rounded-lg p-8 min-h-80 flex items-center justify-center bg-gray-700/30">
                    {error && <div className="text-red-400 text-center p-4 bg-red-900/20 rounded-lg mb-4">{error}</div>}
                    {isGenerating ? (
                      <div className="text-center space-y-4">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-gray-400">Creating your design...</p>
                      </div>
                    ) : generatedImage ? (
                      <img
                        src={generatedImage || "/placeholder.svg"}
                        alt="Generated"
                        className="max-w-full h-64 object-contain rounded"
                      />
                    ) : (
                      <p className="text-gray-500">Your generated design will appear here</p>
                    )}
                  </div>
                </div>

                {generatedImage && (
                  <a href={generatedImage} download="generated_image.png" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Image
                    </Button>
                  </a>
                )}

              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fasign
              </h3>
              <p className="text-gray-400">AI-powered design tool for modern creators</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">Built with love by Fasign</p>
            <p className="text-gray-400 text-sm">© 2025 Fasign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
