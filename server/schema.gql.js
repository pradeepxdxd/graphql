import {gql} from 'apollo-server'

export const schema = gql`
    type Query{
        users : [User]
        quotes : [QuoteWithName]
        user(_id:ID!) : User
        userCreatedQuote(_id:ID!) : [Quote]
        myProfile : User
    }

    type User{
        _id : ID
        firstName : String!
        lastName : String!
        email : String!
        password : String!
        phone : String!
        qoutes : [Quote]
    }

    type QuoteWithName{
        title : String
        id : idName
    }

    type idName{
        _id : String,
        firstName : String
    }

    type Quote{
        _id : ID!
        title : String!
    }

    type Mutation{
        signUpUser(newUser : userInput) : User
        signInUser(loginData : loginDataInput) : Token
        updateUser(updateData : updateDataInput) : User
        deleteUser(id:ID) : String
        createQuote(title : String!) : String
        deleteQuote(id : ID!) : String
    }

    type Token{
        token : String
    }

    input loginDataInput{
        email : String!
        password : String!
    }

    input userInput{
        firstName : String!
        lastName : String!
        email : String!
        password : String!
        phone : String!
    }

    input updateDataInput{
        firstName : String
        lastName : String
        password : String
        phone : String
    }
`