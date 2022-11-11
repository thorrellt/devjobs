const CompanyLogo = (props) => {
  const { logo, logoBackground } = props
  const logoPath = `../public/logos/${logo}`

  return (
    <div
      className="company-logo flex-container"
      style={{ backgroundColor: logoBackground }}
    >
      <img src={logoPath} alt="" />
    </div>
  )
}

export default CompanyLogo
