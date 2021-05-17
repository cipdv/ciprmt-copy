module.exports = (req, res, next) => {
    const {email, password} = req.body

    function validEmail (userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    
    if (req.path === '/api/1/clientprofiles') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json(`Missing credentials`)
        } else if (!validEmail(email)) {
            return res.status(401).json(`Invalid email format`)
        } 
    } else if (req.path === '/api/1/login') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json(`Missing credentials`)
        } else if (!validEmail(email)) {
            return res.status(401).json(`Invalid email format`)
        }
    }

    next()
}