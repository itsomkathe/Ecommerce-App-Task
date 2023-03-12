const crypto = require("crypto")

class HashService{
    async hashPassword(password){
        const hashedPassword = await crypto.createHmac('sha256', process.env.HASH).update(password).digest('hex');
        return hashedPassword;
    }
}

module.exports =  new HashService();