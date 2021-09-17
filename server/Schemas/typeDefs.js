const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: String,
        authors: [String],
        description: String,
        title: String,
        images:String,
        link: String
    }

    type User {
        _id: ID!,
        username: String!,
        email:String!,
        bookCount: Int,
        savedBooks: [Book]
    }

    type Query {
        me: User
        users: [User]
    }


    input bookInput {
        bookId: String,
        authors: [String],
        description: String,
        title: String,
        image:String,
        link: String
    }

    type Auth {
        token: ID,
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth,
        newUser(username: String!, email: String!, password: String!): Auth,
        saveBookInfo(input: bookInput): User,
        removeBookInfo(bookId: String!): User
    }

   



`;
module.exports = typeDefs;