import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({session, day, setFooterInfo}){
    return(
        <>
            <WeekDay>{day.weekday} - {day.date}</WeekDay>
            <BoxButtons>
                {day.showtimes.map((f,i)=>(
                    <Link key={i}  to={`/assentos/${f.id}`}>
                        <Button >{f.name}</Button>
                    </Link>))}
            </BoxButtons>
        </>
    )
}

const WeekDay = styled.h1`
    color: #293845;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
`
const BoxButtons = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`
const Button = styled.button`
    width: 83px;
    height: 43px;
    font-family: 'Roboto' sans-serif;
    font-weight: 400;
    font-size: 18px;
    background-color: #E8833A;
    color: white;
    border: 0px;
    border-radius: 3px;
    margin-right: 8px;
`
