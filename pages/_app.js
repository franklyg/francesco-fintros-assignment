import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../lib/withData';
import './style.css'

const myApp = ({ Component, pageProps, apollo }) => {
  return(

      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    
  )
};

export default withData(myApp)