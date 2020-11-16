import Head from 'next/head';
import styled from 'styled-components';
import Nav from './Nav'
import Hero from './Hero'
import PostFilter from './PostFilter'

const LayoutStyle = styled.section`
    background: rgb(251, 248, 245);
`;
const Container = styled.div`
    width: 100%;
    margin: auto;
    padding: 0 1rem;
    @media(min-width: 768px){
        width: 1357px;
        padding: 0;
    }
`;

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Fintros - Articles</title>
            <link rel="icon" href="/favicon.ico" />
            'Content-Type' = 'application/json`
        </Head>
        <LayoutStyle>
            <Nav />
            <Hero />
            <PostFilter />
            <Container>
                {children}
            </Container>
        </LayoutStyle>
    </>
)

export default Layout;