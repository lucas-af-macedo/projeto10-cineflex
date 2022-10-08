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
                        <Route path="/filme/:movieId" element={<MoviePage setFooterInfo = {setFooterInfo}/>} />
                        <Route path="/sessao/:sessionId" element = {<SessionPage />} />
                        <Route path="/sucesso" element = {<SuccessPage />} />
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
`

const Container = styled.div`
    background-color: silver;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 600px;
    height: 100%;
    min-height: 100vh;
    margin-top: 60px;
`

