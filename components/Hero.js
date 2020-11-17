import styled from 'styled-components'

const HeroParent = styled.section`
    padding: 2rem 0;
    background: rgb(183 199 201);
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
    @media(min-width: 768px){
        text-align: left;
    }
    @media(min-width: 1440px){
        height: 39vw;
    }
`
const HeroCopy = styled.div`
    padding: 0 2rem;
    @media(min-width: 1024px){
        margin-left: 5rem;
        width: 44%;
    }
`;
const HeroTitle = styled.h1`
    font-size: calc(5.5rem + (8 * (100vw - 1440px)) / 1119);
    line-height: 1.4;
`;

const HeroSubText = styled.p`
    font-size: calc(1.5rem + (8 * (100vw - 1440px)) / 1119);
    font-weight: 400;
`;

const Hero = () => (
    <HeroParent>
        <HeroCopy>
            <HeroTitle>Ciao, Come Stai?</HeroTitle>
            <HeroSubText>It's not as fun as saying, "Savior Faire," but it'll do.</HeroSubText>
        </HeroCopy>
    </HeroParent>
)

export default Hero;