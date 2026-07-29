const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../uploads')
    },

    filename: function(req, file, cb) {
        const prefix = Date.now()+'-'+file.originalname
        cb(null, prefix)
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 5*1024*1024},
    fileFilter(req, file, cb) {
        if(file.mimetype !== 'application/pdf') return 

        cb(null, true)
    }
})

module.exports = upload