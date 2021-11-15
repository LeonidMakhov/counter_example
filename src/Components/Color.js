function Color (props){
    return (
        <div>
            <ul> <h3> Color </h3> </ul>
            <ul> {props.car.map(el => <li key={el.model}> {el.model} is {el.color} </li>)} </ul>
        </div>
    )
}
export default Color;