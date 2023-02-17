import Link from "next/link"

// icons
import { FiExternalLink } from "react-icons/fi"

// component
import Tredy from "components/Tredy"

export default function Home() {
  return (
    <div className="main-content">
      <Tredy/>
      <Link target="_blank" href="https://www.youtube.com/watch?v=XQ3LqVyQgLM"><div className="credits">Credits: <span>Codegrid</span> <FiExternalLink/></div></Link>
    </div>
  )
}