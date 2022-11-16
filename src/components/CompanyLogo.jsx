import AsyncImage from './AsyncImage'

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

const CompanyLogo = (props) => {
  const { logo, logoBackground } = props
  const logoPath = getImg(logo)
  console.log(logoPath)

  return (
    <div
      className="company-logo flex-container"
      style={{ backgroundColor: logoBackground }}
    >
      <AsyncImage src={logoPath} alt="" />
    </div>
  )
}

export default CompanyLogo
