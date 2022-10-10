import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "../assets/css/GlobalStyle"
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import MoviePage from "./MoviePage";
import SessionPage from "./SessionPage";
import SuccessPage from "./SuccessPage";
import styled from "styled-components";

export default function App(props){
    const [cart, setCart] = React.useState([])
    const [movieData, setMovieData] = React.useState([])
    const [footerInfo,setFooterInfo] = React.useState({
        movie: null,
        session: null,
        poster: null
    })
    
    return(
        <div>
        <BrowserRouter>
            <GlobalStyle/>
            <Navbar footerInfo = {footerInfo}/>
            <Body>
                <Container>
                    <Routes>
                        <Route path="/" element={<MainPage setFooterInfo = {setFooterInfo} />} />
                        <Route path="/sessoes/:movieId" element={<MoviePage setFooterInfo = {setFooterInfo} setCart={setCart} />} />
                        <Route path="/assentos/:sessionId" element = {<SessionPage setFooterInfo = {setFooterInfo} cart={cart} setCart={setCart} setMovieData={setMovieData} />} />
                        <Route path="/sucesso" element = {<SuccessPage cart={cart} movieData = {movieData}/>} />
                    </Routes>
                </Container>
            </Body>
        </BrowserRouter>
        </div>
    )
}

const Body = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    h1{
        color: #293845;
        font-family: 'Roboto', sans-serif;
    }
    h2{
        color: #293845;
        font-family: 'Roboto', sans-serif;
    }
    h3{
        color: #247A6B;
        font-family: 'Roboto', sans-serif;
    }
`

const Container = styled.div`
    background-color: silver;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 100%;
    min-height: 100vh;
    padding-top: 60px;
    padding-bottom: 117px;
`

