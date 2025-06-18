"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

export function BackgroundUploader() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setBackgroundImage(result)
        setIsUploading(false)
        // Apply background to hero section
        const heroSection = document.querySelector(".hero-section") as HTMLElement
        if (heroSection) {
          heroSection.style.backgroundImage = `url(${result})`
          heroSection.style.backgroundSize = "cover"
          heroSection.style.backgroundPosition = "center"
          heroSection.style.backgroundRepeat = "no-repeat"
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeBackground = () => {
    setBackgroundImage(null)
    const heroSection = document.querySelector(".hero-section") as HTMLElement
    if (heroSection) {
      heroSection.style.backgroundImage = ""
    }
  }

  return (
    <div className="fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border-2 border-pink-300">
      <div className="flex items-center gap-2">
        <label htmlFor="background-upload" className="cursor-pointer">
          <Button
            size="sm"
            variant="outline"
            className="border-pink-400 text-pink-700 hover:bg-pink-50"
            disabled={isUploading}
          >
            <Upload className="w-4 h-4 mr-1" />
            {isUploading ? "Uploading..." : "Upload BG"}
          </Button>
          <input id="background-upload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        </label>
        {backgroundImage && (
          <Button
            size="sm"
            variant="outline"
            onClick={removeBackground}
            className="border-red-400 text-red-700 hover:bg-red-50"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
