import styled from "styled-components"

export default function Navbar({footerInfo}){
    function nameSize(){
        if(footerInfo.movie.length>22)
            return(footerInfo.movie.slice(0,22)+'...')
        return (footerInfo.movie)
    }
    return(
        <>
            <Header>CINEFLEX</Header>
            {footerInfo.movie && 
                <Footer>
                    <ImageDiv>
                        <img src={footerInfo.poster} alt='Poster' />
                    </ImageDiv>
                    <TextDiv>
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
    background-color: gray;;
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