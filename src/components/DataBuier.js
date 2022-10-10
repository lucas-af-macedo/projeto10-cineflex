import react from "react"
import styled from "styled-components"

export default function DataBuier({seat}){
    const [buierCPF,setBuierCPF] = react.useState(seat.cpf)
    const [buierName,setBuierName] = react.useState(seat.name)
    function CPFChange(event){
        setBuierCPF(event.target.value)
        seat.cpf=event.target.value
    }
    function nameChange(event){
        setBuierName(event.target.value)
        seat.name=event.target.value
    }
    return(
        <>  
            <h1>Assento {seat.nameSeat}</h1>
            <h2>Nome do comprador:</h2>
            <input type='text' required value={seat.name} onChange={nameChange} placeholder='Digite seu nome...' />
            <h2>CPF do comprador:</h2>
            <input type='number' min='10000000000' max='99999999999' required value={seat.cpf} onChange={CPFChange} placeholder='Digite seu CPF...' onWheel={(e) => e.target.blur()} />
        </>
    )
}
