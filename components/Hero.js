import styled from 'styled-components'

const HeroParent = styled.section`
    height: 39vw;
    background: rgb(183 199 201);
    display: flex;
    flex-flow: column;
    justify-content: center;
`
const HeroCopy = styled.div`
    width: 44%;
    margin-left: 5rem;
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