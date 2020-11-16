import styled from 'styled-components';

const NavParent = styled.nav`
    background: white;
    overflow: hidden;
`;
const Brand = styled.img`
    width: 10%;
`;
const NavTop = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`
const TopLinkList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`
const NavBottom = styled.div`
    padding: 2rem 0 0;
    width: 100vw;
`
const LinkList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;
const LinkListItem = styled.li`
    list-style-type: none;
    font-size: 0.875rem;
    padding: 1rem 1rem;
    border-bottom: 2px solid transparent;
    rgba(0, 0, 0, 0.88);
    &:hover{
        border-color: rgba(0, 0, 0, 0.88 )
    }
`;

const Nav = () => (
    <NavParent>
        <NavTop>
            <TopLinkList>
                
            </TopLinkList>
            <Brand src="https://www.fintros.com/assets/wordmark-f5de0955ca30c42c9da4dc4139c5529abf2758541083609cff3dda948b061779.png" alt="Fintros" />
            <TopLinkList>
                
            </TopLinkList>
        </NavTop>
        <NavBottom>
            <LinkList>
                <LinkListItem>Anonymous Hiring</LinkListItem>
                <LinkListItem>How It Works</LinkListItem>
            </LinkList>
        </NavBottom>
    </NavParent>
)

export default Nav;