import { getImage, getImgPath } from '../../data/api'

function imageExist(url) {
  var img = new Image()
  img.src = url
  return img.height != 0
}

function getImg(imgName) {
  const devPath = `/logos/${imgName}`
  const livePath = `/devjobs/logos/${imgName}`
  return imageExist(livePath) ? livePath : devPath
}

const imgAddr = getImgPath() + ''
const CompanyLogo = (props) => {
  const { logo, logoBackground } = props
  const logoPath = getImg(logo)
  const imgAddr = getImgPath(logo)
  return (
    <div
      className="company-logo flex-container"
      style={{ backgroundColor: logoBackground }}
    >
      <img crossOrigin="anonymous" src={imgAddr}></img>
    </div>
  )
}

export default CompanyLogo
