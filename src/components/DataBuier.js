import styled from "styled-components"

export default function DataBuier({seat}){
    return(
        <>  
            <h1>Assento {seat.nameSeat}</h1>
            <h2>Nome do comprador:</h2>
            <input type='text' required onChange={e => seat.name=e.target.value} placeholder='Digite seu nome...' />
            <h2>CPF do comprador:</h2>
            <input type='number' min='10000000000' max='99999999999' required onChange={e => seat.cpf=e.target.value} placeholder='Digite seu CPF...' />
        </>
    )
}
