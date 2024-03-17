import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
query Query($email: String) {
  user(email: $email) {
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
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
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
  
`;