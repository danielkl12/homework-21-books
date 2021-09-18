import gql from 'graphql-tag';

export const LOGIN_USER = gql`

    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }

`;

export const ADD_USER = gql`
    mutation newUser($username: String!, $email:String!, $password:String!){
        newUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
                username
            }
        }
    }



`;

export const SAVE_BOOK = gql`

    mutation saveBookInfo($authors: [String], $description: String, $title: String, $bookID: String, $image: String, $link: String){
            saveBookInfo(authors:$authors, descbription: $description, title: $title, bookId: $bookId, image: $image, link: $link){
                _id
                username
                savedBooks{
                    authors
                    description
                    title
                    bookId
                    image
                    link
                }
            }

            
    }



`;

export const REMOVE_BOOK = gql`

    mutation removeBookInfo($bookId: String!) {
        removeBookInfo(bookId: $bookId) {
            username
            savedBooks {
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }


`;