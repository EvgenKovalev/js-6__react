import React from "react";
import "./css/Basket.css";
import BasketHeader from "./BasketHeader";
import BasketItem from "./BasketItem";
import BasketPromoCode from "./BasketPromoCode";
import BasketPromoInfo from "./BasketPromoInfo";
import BasketTotal from "./BasketTotal";
import Button from "./Button";

const Basket = ({ items }) => {
    const countItemsInBasket = items.reduce((acc, next) => acc + next.qty, 0);
    const amountTotal = items.reduce(
        (acc, next) => acc + next.price * next.qty, 
        0
    );
    return (
        <div className="Basket">
            
            <BasketHeader count={countItemsInBasket} />

            <div className="Basket__items">

                {items.map((item) => (
                    <BasketItem {...item} key={item.uid} />
                ))}
                <BasketPromoInfo code={"REACTSPECIALIST"} />
                <BasketTotal value={amountTotal} currency={"руб"} />
            
            <BasketPromoCode code={""} />
            <Button
                value="Продолжить покупку"
                onClickHandler={() => {alert("Продолжить")}}
                className="btn-proceed"
            />
        </div>
    </div>
    )
}
export default Basket;