import { useState, useContext, useEffect } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Project.css'
import Circle from './Circle'
import profilePic from '../../assets/desktop/profile_pic.png'

export default function Project(props) {
  const { darkMode } = useContext(DisplayContext)
  return (
    <main className="Project flex-container">
      <h2
        className={`
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
      >
        Hi, I'm Thorrell
      </h2>
      <section className="flex-container">
        <div className="img-container flex-container">
          <img src={profilePic} alt="Thorrell's Picture" />
          <Circle />
        </div>

        <div className="portfolio-wrapper flex-container">
          <p>
            I'm a Washington Metropolitan based Software Developer transitioning
            into tech after 15+ years in public relations & customer service.
          </p>
          <p>
            In order to learn more about me, view my work, or contact me, please
            visit my links below.
          </p>
          <a
            href="https://www.thorrellt.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="www.thorrellt.com"
          >
            <button className="prim-btn">My Portfolio</button>
          </a>

          <div className="my-links flex-container">
            <a
              href="https://github.com/thorrellt"
              target="_blank"
              rel="noopener noreferrer"
              title="github.com/thorrellt"
              className={`
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
            >
              <i className="bi bi-github" />
            </a>

            <a
              href="https://www.linkedin.com/in/thorrellt/"
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin.com/in/thorrellt"
              className={`
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
            >
              <i className="bi bi-linkedin" />
            </a>

            <a
              href="mailto:thorrellt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="thorrellt@gmail.com"
              className={`
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
            >
              <i className="bi bi-envelope" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
