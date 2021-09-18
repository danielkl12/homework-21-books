const {User, Book} = require('../models');
const {signToken} = require('../utils/auth');
const {AuthenticationError} = require('apollo-server-express');

const resolvers = {
    
 Query: {
     me: async(parent, args, context) => {
         if(context.user) {
             const userData = await User.findOne({_id: context.user._id})
             .select('-__v -password')

             return userData;
         }

         throw new AuthenticationError('Please log in');


     }
 },



Mutation: {
    login: async (parent, {email, password}) => {
        const user= await User.findOne({email});

        if(!user) {
            throw new AuthenticationError('User not found');
        }

        const passwordCorrect = await user.isCorrectPassword({password});

        if(!passwordCorrect) {
            throw new AuthenticationError('Incorrect Password');
        }
        const token = signToken(user);
        return{token, user};
    },


    saveBookInfo: async(parent, {input},context) =>{

        if (context.user) {
            
        }


    },

    newUser: async(parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return{token, user}
    },

    removeBookInfo: async(parent, args, context) => {
        if (context.user) {
           const updatedUser = await User.findOneAndUpdate(
               {_id: context.user._id},
               {$pull: {savedBooks: {bookId: args.bookId}}},
               {new: true}
           );
           return updatedUser;
        }

        throw new AuthenticationError('Please log in')

    }





}




}

module.exports = resolvers;
