import styled from "styled-components"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";

export default function MainPage({setFooterInfo, footerInfo, setReturnTo}){
    const [movies,setMovies] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
		const request = axios.get(URL);
        setReturnTo('/')
        setFooterInfo({
            movie: null,
            session: null,
            poster: null
        })

		request.then(resposta => {
			setMovies(resposta.data);
            
		});

		request.catch(erro => {
			console.log(erro.response.data);
		});
	}, [setFooterInfo, setReturnTo]);

    return(
        <>
            <Title>Selecione o filme</Title>
            <MoviesList>
                {movies.map((f,i)=>(<Movie key = {i} movie = {f} setFooterInfo = {setFooterInfo}/>))}
            </MoviesList>
        </>
    )
}

const Title = styled.h1`
    color: #293845;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin: 20px;
`


const MoviesList = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`