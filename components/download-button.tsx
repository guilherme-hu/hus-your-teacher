"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  filePath: string;
  className?: string;
}

export function DownloadButton({ filePath, className }: DownloadButtonProps) {
  const handleDownload = () => {
    if (filePath) {
      window.open(filePath, '_blank');
    } else {
      console.warn("Caminho do arquivo não especificado");
    }
  };

  return (
    <Button 
      className={`w-full vintage-btn retro-text ${className || ""}`}
      onClick={handleDownload}
    >
      <Download className="w-4 h-4 mr-2" />
      Baixar PDF 📥
    </Button>
  );
}