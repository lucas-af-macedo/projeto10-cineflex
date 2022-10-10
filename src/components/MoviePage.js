import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Session from './Session';
import styled from 'styled-components';

export default function MoviePage({setFooterInfo, setCart}){
    const params = useParams();
    const [session,setSession] = useState()
    const [days,setDays] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.movieId}/showtimes`
		const request = axios.get(URL);
        
        setCart([])  

		request.then(resposta => {
			setSession(resposta.data);
            setDays(resposta.data.days)
            setFooterInfo({
                movie: resposta.data.title,
                session: null,
                poster: resposta.data.posterURL
            })
		});

		request.catch(erro => {
			console.log(erro.response.data);
		});
	}, [setCart, params.movieId, setFooterInfo]);
    return(
        <>
            <Title>Selecione o horário</Title>
            <Container>
                {days.map((f,i)=>(<Session key={i} session={session} day={f} setFooterInfo={setFooterInfo}/>))}
            </Container>
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

const Container = styled.div`
    width: 100%;
    margin: 20px;
`