/* eslint-disable react/prop-types */
import style from "./button.module.css"

export default function Button({setId =() => {}, title=""}){
    return(
        <button onClick={setId} className={style.langButton}>{title}</button>
    )
}