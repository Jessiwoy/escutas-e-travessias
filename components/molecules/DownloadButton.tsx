"use client"

import { Download } from "lucide-react"

interface DownloadButtonProps {
  materialName: string
  onDownload?: () => void
}

export const DownloadButton = ({ materialName, onDownload }: DownloadButtonProps) => {
  const handleClick = () => {
    // TODO: Implement modal for email capture
    console.log("[v0] Download requested for:", materialName)
    onDownload?.()
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-primary-orange hover:text-primary-brown transition-colors duration-200 cursor-pointer"
      aria-label={`Baixar ${materialName}`}
    >
      <Download className="w-5 h-5" />
    </button>
  )
}
