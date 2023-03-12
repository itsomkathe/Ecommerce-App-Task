const HashingService = require("../services/hashService");
const UserService = require("../services/userService");
const CartService = require("../services/cartService");
const TokenService = require("../services/tokenService");

class UserController{
    async createUser(req, res){
        const {email, password, name} = req.body;
        try{
            const existing = await UserService.getUser({email});
            if(existing){
                throw new Error("User already exists");
            }
            const hashedPassword = await HashingService.hashPassword(password);
            const cart = await CartService.createCart();
            const userData = await UserService.createUser({email, password:hashedPassword, name, cart: cart._id});
            userData.password = undefined;
            res.json(userData);
        }catch(err){
            res.status(401).json({error: err.message ? err.message: "Internal Server Error"});
        }
    }

    async getAllUsers(req, res){
        try{
            const users = await UserService.getAllUsers();
            res.json(users);
        }catch(err){
            res.status(401).json({error: err.message ? err.message : "User error"})
        }
    }

    async getProfile(req, res){
        try{
            const { id } = req.user;
            const user = await UserService.getUser({_id: id});
            if(!user){
                throw new Error("No user exists");
            }
            res.json(user);
        }catch(err){
            res.status(401).json({error: err.message ? err.message : "User error"})
        }
    }

    async getUserById(req, res){
        try{
            const id = req.params.id;
            const user = await UserService.getUser({_id: id});
            if(!user){
                throw new Error("No user exists");
            }
            res.json(user);
        }catch(err){
            res.status(401).json({error: err.message ? err.message : "User error"})
        }
    }
}

module.exports = new UserController();