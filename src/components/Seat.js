import React from "react"
import styled from "styled-components"
import colors from "../assets/css/colors"

export default function Seat({seat, cart, setCart}){
    const { COLORYELLOW, COLORGREEN, COLORGRAY, BORDERYELLOW, BORDERGREEN, BORDERGRAY } = colors
    const [border,setBorder] = React.useState(borderBegin)
    const [color,setColor] = React.useState(colorBegin)
    const [selected,setSelected] = React.useState(false)
    function colorBegin(){
        if (seat.isAvailable){
            return(COLORGRAY)
        }else{
            return(COLORYELLOW)
        }
    }
    function borderBegin(){
        if (seat.isAvailable){
            return(BORDERGRAY)
        }else{
            return(BORDERYELLOW)
        }
    }
    function selectSeat(){
        if (seat.isAvailable){
            if (selected){
                const text ='Você deseja remover o assento e apagar os dados?'
                const remove = window.confirm(text)
                if(remove){
                    setSelected(false)
                    setBorder(BORDERGRAY)
                    setColor(COLORGRAY)
                    removeSeat()
                }
            }else{
                setSelected(true)
                setBorder(BORDERGREEN)
                setColor(COLORGREEN)
                addSeat()
            }
        }else{
            alert('Esse assento não está disponível')
        }
    }
    function addSeat(){
        const objectSeat = {
            idSeat: seat.id,
            nameSeat: seat.name,
            cpf: '',
            name: ''
        }
        let listSeat = [...cart]
        const index = listSeat.findIndex((f)=>f.idSeat>seat.id)
        if(index===-1){
            setCart([...listSeat, objectSeat])
        }else{
            let list = [...listSeat.slice(0,index),objectSeat,...listSeat.slice(index)]
            setCart(list)
        }
    }
    function removeSeat(){
        const listSeat = cart.filter((f)=>f.idSeat!==seat.id)
        setCart(listSeat)
    }
    

    
    return(
        <>
            <Chair onClick={selectSeat} color={color} border={border} >{("00" + seat.name).slice(-2)}</Chair>
            
        </>
    )
}

const Chair = styled.button`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: ${props=>props.color};
    margin: 3px;
    margin-bottom: 14px;
    border: 2px solid ${props=>props.border};
`
