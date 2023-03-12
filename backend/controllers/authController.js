const HashingService = require("../services/hashService");
const UserService = require("../services/userService");
const TokenService = require("../services/tokenService");

class AuthController {
    async logIn(req, res) {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                throw new Error("All fields are required");
            }

            let user = await UserService.findForLogin(email);
            if (!user) {
                throw new Error("Incorrect Email");
            }

            const hashedPassword = await HashingService.hashPassword(password);
            
            if (user.password !== hashedPassword) {
                throw new Error("Incorrect Password");
            }

            user.password = undefined;

            const accessToken = await TokenService.createAccessToken({
                email,
                id: user._id,
            });

            res.cookie("accessToken", accessToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
            });

            res.json(user);
        } catch (err) {
            return res.status(401).json({error: err.message ? err.message : "Internal Server Error"});
        }
    }
}

module.exports = new AuthController();