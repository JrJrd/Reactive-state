import s from "./style.module.css"


export function DisplayDifficulty(props){
    return <div className={s.container}>

        {

            props.difficulty ? `difficulty set to  ${props.difficulty}`
             : " no difficulty set"
        }
    </div>
}