import { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Footer.css'

const Footer = () => {
  const { screenSize } = useContext(DisplayContext)
  return (
    <footer className="bg-violet-500 flex-container font-white">
      <h3>Thorrell Turner</h3>
      <div className="contacts flex-container">
        <div className="contact-container">
          <a
            href="https://www.linkedin.com/in/thorrellt/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin.com/in/thorrellt"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
        <div className="contact-container">
          <a
            href="https://www.thorrellt.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="www.thorrellt.com"
          >
            <i className="bi bi-globe" />
          </a>
        </div>
        <div className="contact-container">
          <a
            href="https://github.com/thorrellt"
            target="_blank"
            rel="noopener noreferrer"
            title="github.com/thorrellt"
          >
            <i className="bi bi-github" />
          </a>
        </div>
        <div className="contact-container">
          <a
            href="mailto:thorrellt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="thorrellt@gmail.com"
          >
            <i className="bi bi-envelope" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
