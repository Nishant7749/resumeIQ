const extractText = require('../services/extractText')
const AIAnalysis = require('../services/prompt')
const validate = require('../middleware/validation')
const fileInfo = require('../utils/fileInfo')

const analyze = async (req, res) => {
    try {
        const text = await extractText(req.file.path)

        const validation = await validate(text)

        const role = req.body.targetRole
        const AIAnalyze = await AIAnalysis(text, role)

        const file = {...fileInfo(req.file), targetRole: role}

        res.status(200).json({ validation, file, Analysis: AIAnalyze })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = analyze