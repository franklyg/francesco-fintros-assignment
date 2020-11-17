import Head from 'next/head';
import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Nav from './Nav';
import Hero from './Hero';
import PostFilter from './PostFilter';
import { GlobalStyles } from "./Globalstyles";
import { lightTheme, darkTheme } from "./Theme";

const Container = styled.div`
    width: 100%;
    margin: auto;
    padding: 0 1rem;
    @media(min-width: 1440px){
        width: 1357px;
        padding: 0;
    }
`;

const Layout = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <Head>
                    <title>Fintros - Articles</title>
                    <link rel="icon" href="/favicon.ico" />
                    'Content-Type' = 'application/json`
                </Head>
                <GlobalStyles />
                <section>
                    <Nav theme={theme} toggleTheme={themeToggle} />
                    <Hero />
                    <PostFilter />
                    <Container>
                        {children}
                    </Container>
                </section>
            </>
        </ThemeProvider>
    )
}


export default Layout;