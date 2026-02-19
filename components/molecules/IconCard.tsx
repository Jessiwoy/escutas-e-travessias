import type { ReactNode } from "react"
import { H3, Body } from "@/components/atoms/Typography"

interface IconCardProps {
  icon: ReactNode
  title: string
  description: string
}

export const IconCard = ({ icon, title, description }: IconCardProps) => {
  return (
    <div className="h-full flex flex-col items-start gap-4 p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
      <div className="flex items-center gap-3 min-w-0">
        <div className="text-primary-orange group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{icon}</div>
        <H3 className="group-hover:text-primary-orange transition-colors duration-300 break-words min-w-0">{title}</H3>
      </div>
      <Body className="text-sm">{description}</Body>
    </div>
  )
}
