import {languages} from "../data/languages.js"
import Button from "./ui/button/button.jsx"
import style from "./main.module.css"

export default function Main(){
    return(
        <main>
            <h1>Learn Web Development</h1>
            <div className="container">
                <section className={style.langSelect}>
                    {languages.map((lang)=>
                        <div key={lang.id}>
                            <Button title={lang.title}/>
                        </div>)}
                </section>
            </div>
        </main>
    )
}