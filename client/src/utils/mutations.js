import { gql } from '@apollo/client';

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
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    AddUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SaveBook = gql`
mutation Mutation($bookId: String!, $authors: [String], $description: String!, $image: String, $link: String, $title: String!) {
  saveBook(bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link, title: $title) {
    user {
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
}




`;
