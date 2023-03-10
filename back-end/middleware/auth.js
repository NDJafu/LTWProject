const jwt = require("jsonwebtoken")

const authenticationMiddleware = async(req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {user_id, email} = decoded
        req.user = {user_id, email}
        next()
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = authenticationMiddleware