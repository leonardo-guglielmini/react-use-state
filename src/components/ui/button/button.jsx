/* eslint-disable react/prop-types */
import style from "./button.module.css"

export default function Button({title=""}){
    return(
        <button className={style.langButton}>{title}</button>
    )
}