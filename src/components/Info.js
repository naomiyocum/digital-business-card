// picture, email
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--img" src="../images/headshot.png" alt="Naomi's Headshot"></img>
      <img className="info--img" src="./images/headshot.png" alt="Naomi's Headshot"></img>
      <h1 className="info--fullname">Naomi Yocum</h1>
      <h3 className="info--title">Software Developer</h3>
      <div className="info-buttons">
        <button className="info--button">
          <a className="info--link" href="mailto:naomiyocum24@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg"></FontAwesomeIcon>&nbsp;
            Email
          </a>
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="info--button">
          <a className="info--link" href="https://www.linkedin.com/in/naomiyocum/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg"></FontAwesomeIcon>&nbsp;
            Linkedin
          </a>
        </button>
      </div>
    </div>
  )
}