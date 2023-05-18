import { gql } from '@apollo/client'

// export const GET_ALL_QUOTES = gql`
//     query getAllQuotes{
//         quotes{
//             title
//         }
//     }
// `

export const GET_ALL_QUOTES = gql`
    query getAllQuotes{
        quotes{
            title
            id{
                _id
                firstName
            }
        }
    }
`

export const GET_MY_PROFILE = gql`
    query myProfile{
        myProfile{
            firstName
            lastName
            email
            phone
            qoutes{
                title
            }
        }
    }
`

export const GET_OTHERS_PROFILE = gql`
    query findUserById($userID:ID!){
        user(_id:$userID){
            firstName
            lastName
            email
            qoutes{
                title
            }
        }
    }
`