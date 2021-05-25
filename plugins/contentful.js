const contentful = require('contentful');

const config = {
    space:process.env.SPACED_ID,
    accesstoken: process.env.CDA_TOKEN
}

module.exports = {
    createClient () {
      return contentful.createClient(config)
    }
  }