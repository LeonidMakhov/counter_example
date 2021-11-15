function Contacts(props) {
    return (
        <div>
            <ul><h3> CONTACTS </h3></ul>
            <ul> {props.car.map(el => <li key={el.model}> {el.contact} for {el.model}</li>)} </ul>
            <ul><h3> CONTACTS </h3></ul>
        </div>
)
}

export default Contacts;