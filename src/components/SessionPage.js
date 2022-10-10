import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Seat from './Seat';
import DataBuier from './DataBuier';
import { useNavigate } from "react-router-dom";

export default function SessionPage({setFooterInfo, cart, setCart, setMovieData, setReturnTo}){
    const params = useParams();
    const [seat,setSeat] = useState([])
    const navigate = useNavigate();
    
    function postPurchase(event){
        event.preventDefault();
        setFooterInfo({
            movie: null,
            session: null,
            poster: null
        })
        const promise = {
            ids: cart.map((f)=>f.idSeat),
            compradores: cart.map((f)=>({idAssento: f.nameSeat, nome: f.name, cpf: f.cpf}))
        }
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`
        const request = axios.post(URL,promise);
        request.then(answer => {
            setReturnTo("/assentos/"+params.sessionId)
            navigate('/sucesso')
		});

		request.catch(erro => {
			console.log(erro.response.data);
		});

    }
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.sessionId}/seats`
		const request = axios.get(URL);
        setCart([])
		request.then(answer => {
            setReturnTo("/sessoes/"+answer.data.movie.id)
            setSeat(answer.data.seats)
            setMovieData({
                sessionId: answer.data.id,
                movie: answer.data.movie.title,
                date:answer.data.day.date+' '+answer.data.name,
            })
            setFooterInfo({
                movie: answer.data.movie.title,
                session: answer.data.day.weekday+' - '+answer.data.name,
                poster: answer.data.movie.posterURL
            })
		});

		request.catch(erro => {
			console.log(erro.response.data);
		});
	}, [setCart,setMovieData,setFooterInfo,params.sessionId, setReturnTo]);
    return(
        <>
            <Title>Selecione o(s) assento(s)</Title>
            <BoxSeats>
                {seat.map((f,i)=>(<Seat key={f.id} seat={f} cart={cart} setCart={setCart} />))}
            </BoxSeats>
            <BoxDemo>
                <Exemple color='#1AAE9E' border="#0E7D71">
                    <div data-identifier="seat-selected-subtitle"></div>
                    <h1>Selecionado</h1>
                </Exemple>
                <Exemple color='#C3CFD9' border="#7B8B99">
                    <div data-identifier="seat-available-subtitle"></div>
                    <h1>Disponível</h1>
                </Exemple>
                <Exemple color='#FBE192' border="#F7C52B">
                    <div data-identifier="seat-unavailable-subtitle"></div>
                    <h1>Indisponível</h1>
                </Exemple>
            </BoxDemo>
            <BoxData>
            {cart.length>0 && <form onSubmit={postPurchase}>
                {cart.map((f,i)=> (<DataBuier key={f.idSeat} seat={f}></DataBuier>))}
                <DivButton><button data-identifier="reservation-btn" type="submit">Reservar assento(s)</button></DivButton>
		    </form>}
            </BoxData>
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
const Exemple = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: ${props=>props.color};
        border: 2px solid ${props=>props.border};
    }
    h1{
        margin-top: 7px;
        font-weight: 400;
        font-size: 13px;
        font-family: 'Roboto', sans-serif;
    }
`

const BoxSeats = styled.div`
    width: 360px;
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
`
const BoxDemo = styled.div`
    width: 360px;
    display: flex;
    justify-content: space-between;
`
const BoxData = styled.div`
width: 100%;
    display: flex;
    form{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 10px;
    }
    h1{
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    h2{
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 2px;
    }
    input{
        width: 100%;
        height: 51px;
        margin-bottom: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding: 8px;
        outline: 0px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
    input::placeholder{
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
    }
    button{
        background: #E8833A;
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        border-radius: 3px;
        border: 0px;
        width: 225px;
        height: 42px;
        font-size: 18px;
        margin-top: 30px;
    }
`
const DivButton = styled.div`
    display: flex;
    justify-content: center;
`