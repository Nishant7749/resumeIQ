
const fileInfo = (file)=> {

    return {
        name: file.originalname,
        size: file.size,
        uploadedAt: new Date()
    }
}

module.exports = fileInfo