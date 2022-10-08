import styled from "styled-components"

export default function Navbar(){
    return(
        <Header>CINEFLEX</Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: gray;
    position: fixed;
    left: 0;
    top: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    color: #E8833A;
`