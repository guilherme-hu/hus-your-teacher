"use client";

import { Download } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
  filePath: string;
  className?: string;
}

export function DownloadButton({ filePath, className }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleDownload = () => {
    // Cria um link temporário e clica nele programaticamente
    const link = document.createElement('a');
    link.href = safeFilePath;
    link.download = safeFilePath.split('/').pop() || '';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDownloading(true);
    setHasInteracted(true);
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  // Garantir que o caminho comece com / se não começar
  const safeFilePath = filePath.startsWith('/') ? filePath : `/${filePath}`;

  return (
    <a 
      href={safeFilePath}
      download
      onClick={handleDownload}
      onMouseEnter={() => setHasInteracted(true)}
      target="_blank" // Tenta abrir em nova aba
      rel="noopener noreferrer"
      role="button" // Para acessibilidade
      className={`
        w-full inline-flex items-center justify-center px-4 py-2 rounded
        bg-primary text-primary-foreground hover:bg-primary/90
        vintage-btn retro-text ${className || ""}
        relative overflow-hidden
        transform hover:scale-105 active:scale-95
        transition-all duration-300 ease-in-out
        hover:shadow-lg cursor-pointer
      `}
      style={{ pointerEvents: 'auto' }} // Força pointer-events como auto
    >
      {/* Resto do código permanece o mesmo */}
      {hasInteracted && (
        <span className="absolute inset-0 pointer-events-none">
          <span className={`
            absolute inset-0 rounded-full bg-white/30
            transform scale-0 opacity-100
            ${isDownloading ? 'animate-ripple' : ''}
          `} />
        </span>
      )}

      {isDownloading ? (
        <>
          <span className="animate-bounce mr-2">📥</span>
          <span className="animate-pulse">Baixando...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Baixar PDF 📥
        </>
      )}
    </a>
  );
}