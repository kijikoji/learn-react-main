export default function Die(props) {
    return (
        <button className={props.isHeld ? "active" : "inactive"}>{props.value}</button>
    )
}