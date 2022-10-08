import styled from "styled-components"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";

export default function MainPage({setFooterInfo, footerInfo}){
    const [movies,setMovies] = useState([])

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		request.then(resposta => {
			setMovies(resposta.data);
            console.log(resposta.data)
		});

		request.catch(erro => {
			console.log(erro.response.data);
		});
	}, []);

    return(
        <>
            <h1>Selecione o filme</h1>
            <MoviesList>
                {movies.map((f,i)=>(<Movie key = {i} movie = {f} setFooterInfo = {setFooterInfo}/>))}
            </MoviesList>
        </>
    )
}



const MoviesList = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`