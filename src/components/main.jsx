import {languages} from "../data/languages.js"

import Header from "./header/header.jsx"
import Button from "./ui/button/button.jsx"
import Card from "./ui/card/card.jsx"

import style from "./main.module.css"

import { useState } from "react"

export default function Main(){

    const [currentId, setCurrentId] = useState(1);
    let lang = languages.find((el) => el.id===currentId);

    return(
        <main>
            <Header/>
            <div className="container">
                <section className={style.langSelect}>
                    
                    {languages.map((lang)=>
                        <div key={lang.id}>
                            <Button title={lang.title} setId={()=>setCurrentId(lang.id)}/>
                        </div>)}

                    <Card title={lang.title} description={lang.description}/>
                </section>
            </div>
        </main>
    )
}