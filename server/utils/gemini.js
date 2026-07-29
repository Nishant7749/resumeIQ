const { GoogleGenAI} = require('@google/genai')

const AI = new GoogleGenAI({
    apikey : process.env.GOOGLE_API_KEY
})

module.exports = AI