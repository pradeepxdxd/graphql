import {gql} from '@apollo/client'

export const SIGNUP_USER = gql`
    mutation createUser($newUser : userInput!){
        user:signUpUser(newUser:$newUser){
            firstName
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($loginData : loginDataInput){
        user:signInUser(loginData:$loginData){
            token
        }
    }
`

export const CREATE_QUOTE = gql`
    mutation createQuotes($title:String!){
        createQuote(title:$title)
    }
`

export const DELETE_QUOTE = gql`
    mutation deleteQuote($id:ID!){
        deleteQuote(id:$id)
    }
`