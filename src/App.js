
import './App.css';
import Contacts from "./Components/Contacts";
import Managers from "./Components/Managers"
import Links from "./Components/Links";
import {useState} from "react";

function App() {
    const initialCounters = [
        {id:1, value:5},
        {id:2, value:10},
        {id:3, value:17},
    ];

    const [counters, setCounters] = useState(initialCounters);

    const car = [
        {
            id: 101,
            model: "Honda",
            year: '2010',
            cost: '4.5 $',
            manager: 'Ivan',
            contact: '+7895222',
            link: <a href="https://www.linkedin.com/feed/">Linkdin_ivan_the_best_seller</a>
        },
        {
            id: 102,
            model: "Jeep",
            year: '2012',
            cost: '8.5 $',
            manager: 'Tanya',
            contact: '+78952544',
            link: <a href="https://vk.com/">VK_Lisichka_Kosichka</a>
        },
        {
            id: 103,
            model: "Mercedes!!!",
            year: '1980',
            cost: Math.floor(Math.random() * ( Math.pow(10, 5 )))+ ' $',
            manager: 'Ivan',
            contact: '+7895477',
            link: <a href="https://www.facebook.com/">FB_Seriously_Person</a>
        },
    ];

    const clickMinus = (id) => {
        const updatedCounters = counters.map(el => el.id === id ? ({...el, value: el.value - 1}) : el)
        setCounters(updatedCounters)
        // setCounter(counter - 1)
        // console.log('MINUS')
    };
    const clickPlus = (id) => {
        const updatedCounters = counters.map(el => el.id === id ? ({...el, value: el.value + 1}) : el)
        setCounters(updatedCounters)
        // setCounter(counter + 1)
        // console.log('PLUS')
    };
    const deleteCounter = (id) => {
        console.log('Delete ID', id)
        const updatedCounters = counters.filter(el => el.id !== id);
        setCounters(updatedCounters)
    };
    // const addCounter = (id) => {
    //     console.log('Add ID', id)
    //     const updatedCounters = counters.filter(el => el.id !== id);
    //     setCounters(updatedCounters)
    // };


  return (
    <div>
        <hr />
        <ul> <h3> Счетчик </h3></ul>
        {counters.map(el => (
        <div key={el.id}>

            <button onClick = {() => clickMinus(el.id)}>Minus One</button>
            {el.value}
            <button onClick = {() => clickPlus(el.id)}>Plus One</button>
            <button onClick = {() => deleteCounter(el.id)}>Delete counter</button>
        </div>
        ))}

        <ul>
            {/*<button onClick = {() => addCounter(el.id)}>Add counter</button>*/}
        </ul>
        <hr />
        <ul> <h1> Rent a Car! </h1> </ul>
        <ul> {car.map(el => <li key = {el.id}> {el.model} {el.year} {el.cost}</li>)} </ul>
        <ul>
            <table border="1" width="30%" cellPadding="8">
            <tbody>
            <tr>
                <td> Model </td>
                {car.map(el => <td key = {el.id}> {el.model}</td>)}
            </tr>
            <tr>
                <td > Year </td>
                {car.map(el => <td key = {el.year}> {el.year}</td>)}
            </tr>
            <tr>
                <td> Cost </td>
                {car.map(el => <td key = {el.cost}> {el.cost}</td>)}
            </tr>
            </tbody>
            </table>

        </ul>
        <ul>
            <Contacts car = {car}/>
            <Links car = {car}/>
            <Managers car = {car}/>
        </ul>

    </div>
  );
}

export default App;
