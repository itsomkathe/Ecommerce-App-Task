const TokenService = require("../services/tokenService");
const UserService = require("../services/userService");

module.exports = async (req,res,next)=>{
    try{
        const { accessToken } = req.cookies;
        if(!accessToken){
            throw new Error("Login again, session expired");
        }
        const data = await TokenService.verifyAccessToken(accessToken);
        if(!data){
            throw new Error("Invalid access token");
        }
        const { id } = data;
        const user = await UserService.getUser({_id: id});
        if(!user){
            throw new Error("No User Exists");
        }
        req.user = data;
        next();
    }catch(err){
        res.status(401).json({error: err.message ? err.message : "Internal Server Error"});
    }
}