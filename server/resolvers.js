import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {JWT_SECRET_kEY} from "./config.js"

import User from './models/user.model.js';
import Quote from './models/quote.model.js';

export const resolvers = {
    Query : {
        users : async () => await User.find({}),
        user : async (_, {_id}) => await User.findById(_id),
        quotes : async () => await Quote.find({}).populate('id', '_id firstName'),
        userCreatedQuote : async (_, {_id}) => await Quote.find({id : _id}),
        myProfile : async (_, args, {userId}) => {
            if (!userId) throw new Error('you must to loggedin');
            return await User.findOne({_id : userId});
        }
    },

    User : {
        qoutes : async (ur) => await Quote.find({id:ur._id})
    },

    Mutation : {
        signUpUser : async (_, {newUser}) => {
            const user = await User.findOne({email : newUser.email});

            if (user) {
                throw new Error("User already exists");
            }

            const hashedPassword = await bcrypt.hash(newUser.password, 12);

            const addUser = await User.create({...newUser, password : hashedPassword});

            return addUser;
        },

        signInUser : async (_, {loginData}) => {
            const user = await User.findOne({email : loginData.email});
            if (user) {
                const validUser = await bcrypt.compare(loginData.password, user.password);

                if (validUser) {
                    const token = jwt.sign({userId : user._id, email : user.email}, JWT_SECRET_kEY, {expiresIn : '15h'});
                    return {token};
                }
                else {
                    throw new Error("invalid email And password");
                }
            }
            else{
                throw new Error("User not exist");
            }
        },

        createQuote : async (_, {title}, {userId}) => {
            if (!userId) {
                throw new Error('you must be loggedin');
            }

            const quote = await Quote.create({
                title : title,
                id : userId
            })

            return "Quote is saved";
        },

        updateUser : async (_, {updateData}, {userId}) => {
            if (!userId) {
                throw new Error("you must be loggedin")
            }
            console.log(updateData);
            const hashedPassword = await bcrypt.hash(updateData.password, 11);

            const user = await User.findByIdAndUpdate(userId, {...updateData, password : hashedPassword}, {new : true});

            return user;
        },

        deleteUser : async (_, {id}, {userId}) => {
            if(!userId){
                throw new Error("you must to loggedin");
            }

            await User.findByIdAndDelete(id);

            return 'user deleted'
        },

        deleteQuote : async (_, {id}, {userId}) => {
            if (!userId) {
                throw new Error('you must to loggedin');
            }

            await Quote.findByIdAndDelete(id);

            return 'Quote is deleted successfully'
        }
    }
}