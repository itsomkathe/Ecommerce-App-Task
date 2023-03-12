const jwt = require('jsonwebtoken');
class TokenService{
    createAccessToken(payload){
        const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET);
        return accessToken;
    }

    async verifyAccessToken(token){
        const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
        return jwt.verify(token, JWT_ACCESS_SECRET);
    }
}

module.exports = new TokenService();