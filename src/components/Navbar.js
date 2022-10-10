import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Navbar({footerInfo, returnTo}){
    const navigate = useNavigate();
    function nameSize(){
        if(footerInfo.movie.length>22)
            return(footerInfo.movie.slice(0,22)+'...')
        return (footerInfo.movie)
    }
    function goTo(){
        navigate(returnTo)
    }
    return(
        <>
            <Header>
            <HeaderDiv><div onClick={goTo} ><ion-icon name="chevron-back-outline"></ion-icon></div>
                CINEFLEX</HeaderDiv></Header>
            {footerInfo.movie && 
                <Footer>
                    <ImageDiv>
                        <img data-identifier="movie-img-preview" src={footerInfo.poster} alt='Poster' />
                    </ImageDiv>
                    <TextDiv data-identifier="movie-and-session-infos-preview">
                        <h1>{nameSize()}</h1>
                        {footerInfo.session!==null ? <h1>{footerInfo.session}</h1> : null}
                    </TextDiv>
                </Footer>}
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #696980;
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

const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        cursor: pointer;
        position: absolute;
        color: #293845;
        left: 15px;
        top: 12px;
    }
`

const Footer = styled.div`
    width: 100vw;
    height: 117px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #696980;
    display: flex;
    align-items: center;
    border: 1px solid #8E9DAA;
    h1{
        margin-left: 15px;
        font-weight: 400;
        font-size: 26px;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
`
const ImageDiv = styled.div`
    width: 64px;
    height: 89px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img{
        width: 48px;
        height: 72px;
    }
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-evenly;
`