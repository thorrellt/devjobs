const fs = require('fs')
const path = require('path')

const getImage = async (req, res) => {
  let assetsPath = path.dirname(__dirname) + '/assets'
  let img = assetsPath + '/' + req.params.id

  console.log(req.params)
  console.log('images pinged')
  fs.readFile(img, (err, content) => {
    if (err) {
      console.log('error')
      res.status(400).json('Error')
    } else {
      res.sendFile(img)
    }
  })
}

module.exports = {
  getImage,
}
