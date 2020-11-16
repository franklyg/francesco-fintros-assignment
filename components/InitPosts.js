import { useQuery } from '@apollo/react-hooks';
import  { gql } from 'apollo-boost';

import Post from './Post';

/*
  firstPageArticle Queries
*/ 
const GET_POSTS = gql`query {
  firstPageArticles {
    id
    author
    createdAt
    score
    updatedAt
    title
    text
    type
    url
  }
}`;

const InitPosts = ({ targetUrl }) => {

  const { data, loading, error } = useQuery(GET_POSTS); // Create a query hook
  
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  
  return (
      <>
          {
            data.firstPageArticles.map((item, i)=>(
              <Post key={i} item={item} targetUrl={ targetUrl } />
            ))
          }
      </>
  );
};

export default InitPosts;