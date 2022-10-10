import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movie({movie, setFooterInfo}){
    return(
        <MovieBox>
            <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} alt='Poster' />
            </Link>
        </MovieBox>
    )
}

const MovieBox = styled.div`
    width: 145px;
    height: 209px;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    img{
        margin: 8px;
        width: 129px;
        height: 193px;
    }
`