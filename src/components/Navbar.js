import styled from "styled-components"

export default function Navbar({footerInfo}){
    return(
        <>
            <Header>CINEFLEX</Header>
            {footerInfo.movie && 
                <Footer>
                    <div>
                        <img src={footerInfo.poster}/>
                    </div>
                    <h1>{footerInfo.movie.slice(0,22)}</h1>
                </Footer>}
        </>
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

const Footer = styled.div`
    width: 100vw;
    height: 117px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #DFE6ED;;
    display: flex;
    align-items: center;
    border: 1px solid #9EADBA;
    div{
        width: 64px;
        height: 89px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    h1{
        margin-left: 15px;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
        font-family: 'Roboto', sans-serif;
    }
`