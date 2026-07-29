const fs = require('fs')
const {PDFParse} = require('pdf-parse')

const extractText = async(path)=> {
    try {
        const buffer = fs.readFileSync(path)

        const parser = new PDFParse({data: buffer})
        
        const result = await parser.getText()
        await parser.destroy()

        return result.text
    } catch (error) {
        // res.status(500).json({error: error.message})
        console.log(error.message)
    }
}

module.exports = extractText