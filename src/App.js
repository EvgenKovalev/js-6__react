import "./App.css";
import React, { useState, useEffect } from "react";
// import Button from "./components/Button";
import Basket from "./components/Basket";
// import Clicker from './components/Clicker';

function App() {

    const [startItems, setStartItems] = React.useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/items.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setStartItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    let basketPlace = null;

    if(error){
        basketPlace = <div>Ошибка: {error.message}</div>
    }   else if(!isLoaded){
        basketPlace = <div>Загрузка...</div>
    }   else {
        basketPlace = <Basket items={startItems} />
    }

    // const items = [
    //     {
    //         uid: "86ed58db-082d-45ab-aa81-5218059349cb",
    //         title: "Товар1",
    //         description: "описание товара 1",
    //         price: 1200,
    //         qty: 1
    //     },
    //     {
    //         uid: "05542e59-7a90-4e80-bf9d-78967f272049",
    //         title: "Товар2",
    //         description: "описание товара 2",
    //         price: 800,
    //         qty: 2
    //     },
    //     {
    //         uid: "7793e4f0-fe86-47cc-98f6-e01b6beeb3af",
    //         title: "Товар3",
    //         description: "описание товара 3",
    //         price: 250,
    //         qty: 3
    //     },
    // ];
    return (
        <div className="App">
            <header className="App-header">
                <h1>Корзина</h1>
                {/* <Basket items={items} /> */}
                {basketPlace}
            </header>
        </div>
    );
}
export default App;
