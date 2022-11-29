import { useContext } from 'react'
import { DisplayContext } from '../context/DisplayContext'

const JobFooter = (props) => {
  const { darkMode, data, screenSize } = useContext(DisplayContext)
  const { position, company } = props

  return (
    <footer
      className={`job-footer flex-container
        ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
    >
      <div className="container flex-container">
        <div
          className={`company-info flex-container ${
            screenSize === 'mobile' ? 'hidden' : ''
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
