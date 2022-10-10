import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage({cart, movieData}){
    console.log(cart)
    console.log(movieData)
    return(
        <>
        <SuccesTitle><h3>Pedido feito com sucesso!</h3></SuccesTitle>
        <Container>
            <DataBox>
                <h1>Filme e sessão</h1>
                <h2>{movieData.movie}</h2>
                <h2>{movieData.date}</h2>
            </DataBox>
            <DataBox>
                <h1>Ingressos e dados do comprador</h1>
                {cart.map((f)=>(
                    <div>
                    <h2>Assento {f.nameSeat}</h2>
                    <h2>Nome: {f.name}</h2>
                    <h2>CPF: {f.cpf}</h2></div>))}
            </DataBox>
        </Container>
        <DivButton><Link to='/'><button >Voltar pra Home</button></Link></DivButton>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    h1{
        margin-bottom: 15px;
        font-weight: 700;
        font-size: 24px;
        font-family: 'Roboto' sans-serif;
    }
    h2{
        font-size: 22px;
        font-family: 'Roboto' sans-serif;
    }
`

const DataBox = styled.div`
    margin-bottom: 30px;
    div{
        margin-bottom: 15px;
    }
`

const SuccesTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    width: 180px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
`
const DivButton = styled.div`
    display: flex;
    justify-content: center;
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