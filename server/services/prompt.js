const AI = require('../utils/gemini')

const AIAnalysis = async (text, role) => {
    try {
        const prompt = `You are an experienced ATS resume reviewer and technical recruiter.

Analyze the following resume based on target role and return ONLY valid JSON.

Rules:
- Return ONLY valid JSON.
- Do not include markdown, explanations, or code fences.
- Do not invent information that is not present in the resume.
- If a field cannot be determined, return null or an empty array.
- All scores must be integers between 0 and 100.
- Suggestions should be short, clear, and actionable.

Return the response in exactly this format:

{
  "overallScore": 0,
  "atsScore": 0,

  "candidate": {
    "name": "",
    "email": "",
    "phone": "",
    "targetRole": ${role}
  },

  "summary": {
    "strengths": [],
    "weaknesses": [],
    "feedback": ""
  },

  "skills": {
    "technical": [],
    "soft": []
  },

  "missingSections": [],

  "keywordAnalysis": {
    "matched": [],
    "missing": []
  },

  "suggestions": [
    {
      "title": "",
      "description": ""
    }
  ],

  "finalVerdict": {
    "readyForATS": true,
    "comment": ""
  }
}

Resume:

${text}`

        const result = await AI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        })

        const response = result.text
               .replace(/```json/g, "")
                .replace(/```/g, "")
               .trim()
        return JSON.parse(response)

    } catch (error) {
        // res.status(500).json({ error: error.message })
        console.log(error.message)
        throw error
    }
}

module.exports = AIAnalysis