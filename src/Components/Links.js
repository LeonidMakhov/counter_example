function Links (props){
    return (
        <div>
            <ul> <h3> Use Links to connect with celler Face to Face</h3> </ul>
            <ul> {props.car.map(el => <li key = {el.model}> {el.link} </li>)} </ul>
        </div>
    )
}
export default Links;