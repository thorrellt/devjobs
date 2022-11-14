import { useContext } from 'react'
import { DisplayContext } from '../App'

const JobFooter = (props) => {
  const { darkMode, windowWidth, data } = useContext(DisplayContext)

  return (
    <footer
      className={`job-footer flex-container
        ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
    >
      <form action="http://thorrellt.com/" method="get" target="_blank">
        <button className="prim-btn" type="submit">
          Apply Now
        </button>
      </form>
    </footer>
  )
}

export default JobFooter
