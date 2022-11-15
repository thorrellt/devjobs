import { useContext } from 'react'
import { DisplayContext } from '../App'

const JobFooter = (props) => {
  const { darkMode, windowWidth, data } = useContext(DisplayContext)
  const windowIsMobile = windowWidth < 680
  const { position, company } = props

  return (
    <footer
      className={`job-footer flex-container
        ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
    >
      <div className="footer-container flex-container">
        <div
          className={`company-info flex-container ${
            windowIsMobile ? 'hidden' : ''
          }`}
        >
          <div
            className={`position
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
          >
            <h2>{position}</h2>
          </div>

          <div className="company">
            <h4>{`${company}`}</h4>
          </div>
        </div>

        <form action="http://thorrellt.com/" method="get" target="_blank">
          <button className="prim-btn" type="submit">
            Apply Now
          </button>
        </form>
      </div>
    </footer>
  )
}

export default JobFooter
