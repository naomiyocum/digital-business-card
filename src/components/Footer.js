import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className="icons">
        <a className="icon--link" href="https://github.com/naomiyocum" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
        </a>
        <a className="icon--link" href="https://twitter.com/6nomi4" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon>
        </a>
    </div>
  )
}