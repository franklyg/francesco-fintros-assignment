import styled from 'styled-components';
import axios from 'axios'
import PostImage from './PostImage';

const Post = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 0 2rem;
    border-bottom: 1px solid rgb(238, 226, 215); 
`;
const Content = styled.div`
    width: 100%;
    @media(min-width: 1440px){
        margin-left: 4.16667%;
        width: 62.5%;
    }
`;
const Image = styled.div`
    width: 100%;
    overflow: hidden;
    padding-bottom: 2rem;
    @media(min-width: 736px){
        width: 33.33333%;
        height: 28.75rem;
    }
`;
const PostTage = styled.p`
    margin-bottom: 2rem;
    color: rgb(204, 131, 92);
`;
const PostHeader = styled.h2`
    font-size: calc(2rem + (16 * (100vw - 1440px)) / 1119);
    margin-bottom: 1rem;    
`;
const PostCopy = styled.p`
    font-size: calc(1rem + (2 * (100vw - 1440px)) / 1119);
    margin-bottom: 2rem;
`;
const PostLink = styled.a`
    border-bottom: 0.125rem solid currentcolor;
    color: rgba(0, 0, 0, 0.88);
    font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.125em;
    line-height: 1;
    margin: 0px;
    padding-bottom: 0.25rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 100ms ease-in 0s;
    font-size: 0.75rem; 
`;

export async function getStaticProps({params}) {
    console.log(params)
    const metadata = 'hello'
    return {
      props: {
        metadata
      },
    }
  }
  
const Page = ({ item, targetUrl }) => {
    return(
        
        <Post>
            <Image>
                <PostImage url={ item.url } targetUrl={ targetUrl } />
            </Image>
            <Content>
                <PostTage>{item.type}</PostTage>
                <PostHeader>{item.title}</PostHeader>
                <PostCopy>{item.text}</PostCopy>
                <PostLink href={item.url}>Read More</PostLink>
            </Content>
        </Post> 
        
    )
}

export default Page;