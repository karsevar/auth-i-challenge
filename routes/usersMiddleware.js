function validateBody(req, res, next) {
    const {username, password} = req.body;
    if (username && password) {
        next();
    } else {
        res.status(401).json({message: "will need to provide username or password"})
    }
}

module.exports = {
    validateBody
};