function Managers(props){
    return (
        <div>
            <ul> <h3> Managers </h3> </ul>
            <ul> {props.car.map(el => <li key = {el.model}> {el.manager} </li>)} </ul>
        </div>
    )
}
export default Managers;