import styled from 'styled-components'

const StyledNav = styled.nav`
    align-items: center;
    background-color: rgba(12, 13, 15, 0.7);
    backdrop-filter: blur(5px);
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-wrap: wrap;
    font-family: Karla, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 0.833333rem;
    font-weight: 500;
    justify-content: center;
    height: 3.33333rem;
    left: 0px;
    padding: 0px;
    position: fixed;
    transition: background 300ms ease-out 0s;
    width: 100%;
    z-index: 3;
`
const LeftPart = styled.div`
align-items: center;
    display: flex;
    flex-grow: 1;
    height: 3.33333rem;
    justify-content: space-between;
    margin-left: 16px;
`

const Nav = () => {
    return (
        <StyledNav>
            <LeftPart>
                <a aria-label="styled components" href="/">
                    <div></div>
                </a>
            </LeftPart>
        </StyledNav>
    )
}

export default Nav