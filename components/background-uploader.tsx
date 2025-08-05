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
}
