// component
import Tredy from "components/Tredy"

export default function Home() {
  return (
    <div className="main-content">
      <div className="title">
        <div className="small-title">Component Project</div>
        <div className="big-title">Circular Text Scroll Effect</div>
      </div>
      <Tredy/>
      <Link target="_blank" href="https://www.youtube.com/watch?v=dqzZ0SbSgHY"><div className="credits">Credits: <span>Online Tutorials</span> <FiExternalLink/></div></Link>
    </div>
  )
}