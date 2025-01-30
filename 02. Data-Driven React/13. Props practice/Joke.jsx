export default function Joke(props){
    return (
        <article>
            <h1>{props.setup}</h1>
            <h3>{props.punchline}</h3>
            <hr />
        </article>
    )
}