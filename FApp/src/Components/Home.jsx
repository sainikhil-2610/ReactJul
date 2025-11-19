import Contact from "./Contact"

export default function Home(props) {
    return(
        <div>
        <h1>Hello, {props.name1} Age is: {props.a}</h1>

       <Contact name2={props.name1}/>
        </div>
    )
}