const UserModel = require("../models/User");
class UserService{
    async createUser(data){
        try{
            const user = UserModel.create(data);
            return user;
        }catch(err){
            return new Error(err.message);
        }
    }
    
    async getUser(condition){
        try{
            const user = await UserModel.findOne(condition).select('name email _id cart orders address');
            return user;
        }catch(err){
            return new Error(err.message);
        }
    }

    async getAllUsers(){
        try{
            const users = await UserModel.find({}).select('name email _id cart orders address');
            return users;
        }catch(err){
            return new Error(err.message);
        }
    }

    async findForLogin(email){
        try{
            const user = await UserModel.findOne({email}).select('name email _id password');
            return user;
        }catch(err){
            return new Error(err.message);
        }
    }
}

module.exports = new UserService();