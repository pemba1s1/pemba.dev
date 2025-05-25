import { Link } from "react-router-dom"

interface SocialProps {
  href: string
  icon: React.ElementType
}

function SocialLinks({href, icon: Icon}: SocialProps) {
  return (
    <Link
        to={href}
        target="_blank"
        className="group flex text-sm font-medium transition"
      >
      <Icon className="group-hover:fill-primary h-10 w-10 flex-none fill-zinc-500 hover:fill-zinc-200 transition " />
    </Link>
  )
}

export default SocialLinks