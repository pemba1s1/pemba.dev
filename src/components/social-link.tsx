import { Link } from "react-router-dom"
import { cn } from "../lib/utils"

interface SocialProps {
  href: string
  icon: React.ElementType
  className?: string
  iconClassName?: string
}

function SocialLinks({href, icon: Icon, className, iconClassName}: SocialProps) {
  return (
    <div className={cn(className, "flex")}>
      <Link
          to={href}
          target="_blank"
          className="group flex text-sm font-medium transition"
        >
        <Icon className={cn(iconClassName, "group-hover:fill-primary flex-none fill-zinc-500 hover:fill-zinc-200 transition ")} />
      </Link>
    </div>
  )
}

export default SocialLinks