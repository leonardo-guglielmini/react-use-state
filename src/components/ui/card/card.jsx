/* eslint-disable react/prop-types */
import style from "./card.module.css"

export default function Card({title="", description=""}){
    return(
        <div className={style.card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}