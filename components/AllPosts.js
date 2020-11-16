import { useQuery } from '@apollo/react-hooks';
import  { gql } from 'apollo-boost';
import Post from './Post';
import InfiniteScroll from 'react-infinite-scroller';

/*
  firstPageArticle Queries
*/ 
const GET_POSTS = gql`query($page: Int!){
  retrievePageArticles(page: $page) {
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

const AllPosts = ({ page }) => {

  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { 
      page: 0
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const { retrievePageArticles } = data;
  const hasMoreData = retrievePageArticles === 'undefined' ? false : true;

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  function handleLoadMore() {
    fetchMore({
      variables: {
        page: 0
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        console.log(fetchMoreResult, previousResult)
        const connection = fetchMoreResult.retrievePageArticles;
        return {
          retrievePageArticles: [...previousResult.retrievePageArticles, ...connection ],
          __typename: previousResult.retrievePageArticles.__typename
        };
      },
    });
  }
  return (
      <>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={ hasMoreData }
        loader={<div className="loader" key={0}>Loading ...</div>}
        initialLoad={false}
        threshold={1000}
      >
        {
          retrievePageArticles.map((item, i)=>(
            <Post key={i} item={item}/>
          ))
        }
      </InfiniteScroll>
      </>
  );
};

export default AllPosts;