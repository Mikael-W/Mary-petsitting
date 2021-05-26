const contentful = require('contentful');

module.exports = contentful.createClient({  
    space: process.env.CTF_SPACED_ID || "3ebrnmrqf4zh",  
    accessToken: process.env.CTF_CDA_TOKEN || "1GNIi5-aHf5NVovX1HoI-G_7IYHRwuupH-V1Uma2ARs" 
  });
