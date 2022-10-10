import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({session, day, setFooterInfo}){
    return(
        <>
            <WeekDay><h1 data-identifier="session-date">{day.weekday} - {day.date}</h1></WeekDay>
            <BoxButtons>
                {day.showtimes.map((f,i)=>(
                    <Link key={i}  to={`/assentos/${f.id}`}>
                        <button data-identifier="hour-minute-btn">{f.name}</button>
                    </Link>))}
            </BoxButtons>
        </>
    )
}

const WeekDay = styled.div`
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
    width: 174px;
    display: flex;
    justify-content: space-between;
    button{
    cursor: pointer;
    width: 83px;
    height: 43px;
    font-family: 'Roboto' sans-serif;
    font-weight: 400;
    font-size: 18px;
    background-color: #E8833A;
    color: white;
    border: 0px;
    border-radius: 3px;
    }
`

