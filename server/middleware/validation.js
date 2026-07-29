
const validate = (text)=> {
    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    const phoneRegex = /(\+91[\s-]?)?[6-9]\d{9}/

    return {
        email: emailRegex.test(text),
        phone: phoneRegex.test(text),
        skills: /skills/i.test(text),
        education: /education/i.test(text),
        experience: /experience/i.test(text),
        projects: /projects/i.test(text)
    }
}

module.exports = validate