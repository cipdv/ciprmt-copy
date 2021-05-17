const jwt = require('jsonwebtoken')
require('dotenv').config() 

module.exports = async (req, res, next) => {
    try {
        const token = req.header("token")

        if (!token) {
            return res.status(403).json('Not authorized to view this')
        }

        const payload = jwt.verify(token, process.env.jwtSecret)

        req.client = payload.client.id

        next()

    } catch (error) {
        console.error(error.message)
        return res.status(403).json('Not authorized to view this')
    }
}