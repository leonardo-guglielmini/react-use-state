/* eslint-disable react/prop-types */
import style from "./button.module.css"

export default function Button({item, activeId, setId =() => {}}){

    console.log(activeId)
    const {title, id} = item
    return(
        <button onClick={() => {setId();}} className={`${style.langButton} ${id === activeId ? style.active : ""}`}>{title}</button>
    )
}