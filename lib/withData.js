import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { endpoint } from '../config';

const createPage = (({ initialState, headers }) => {
    return new ApolloClient({
        uri: process.env.NODE_ENV === 'development' ? endpoint : null,
        request: operation => {
        operation.setContext({
            fetchOptions: {
            credentials: 'include',
            },
            headers,
        });
        },
        cache: new InMemoryCache().restore(initialState || {})
    });
    
}); 

export default withApollo(createPage)