import styled from 'styled-components';

const NavParent = styled.nav`
    background: ${({ theme }) => theme.nav};
    overflow: hidden;
    position: relative;
`;
const Brand = styled.img`
    width: 20%;
    align-self: center;
`;
const NavTop = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-top: 2rem;    
`
const TopLinkList = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-content: flex-end;
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
const ToggleThemeButtonHolder = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;
const ToggleThemeButton = styled.button`
    width: 50px;
    height: 12px;
    background: ${({ theme }) => theme.background};
    border: ${({ theme }) => theme.text};
    border-radius: 100px;
    outline: none;
    position: relative;
    cursor: pointer;
    margin-left: 1rem;
    &:after{
        transition: all .5s;
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 25%;
        left: ${({ theme }) => theme.left};
        top: 0;
        border-radius: 100%;
        background: ${({ theme }) => theme.nav};
        box-shadow: 0 0 5px 1px rgba(0,0,0,.4);
        transform-origin: right; 
    }
`;


const Nav = ({ theme, toggleTheme }) => (
    <NavParent>
        <ToggleThemeButtonHolder>
            <p>{theme === 'light' ? `Lighter on the eyes?` : `Ah, That's much better`}</p>
            <ToggleThemeButton onClick={toggleTheme}></ToggleThemeButton>
        </ToggleThemeButtonHolder>
        <NavTop>
            <TopLinkList>
                <LinkListItem>Shop</LinkListItem>
                <LinkListItem>Learn</LinkListItem>
            </TopLinkList>
            <Brand src="https://www.fintros.com/assets/wordmark-f5de0955ca30c42c9da4dc4139c5529abf2758541083609cff3dda948b061779.png" alt="Fintros" />
            <TopLinkList>
                <LinkListItem>Cart</LinkListItem>
                <LinkListItem>Login</LinkListItem>
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