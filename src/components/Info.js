// picture, email
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Info() {
  return (
    <div className="info">
      <img className="info--img" src="../images/headshot.png" alt="Naomi's Headshot"></img>
      <img className="info--img" src="./images/headshot.png" alt="Naomi's Headshot"></img>
      <h1 className="info--fullname">Naomi Yocum</h1>
      <h3 className="info--title">Software Developer</h3>
      <a className="info--email" href="mailto:naomiyocum24@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="lg"></FontAwesomeIcon>
      </a>
    </div>
  )
}