import React from "react";
import { useSelector } from "react-redux";
import { State } from "../types";
import {PizzaPrice} from "./PizzaPrice";

interface TotalPriceProps {
    price: number;
}

export function TotalPrice() {
    const price = useSelector((state: State) => state.basket.totalPrice)
    return (
        <div className="flex">
            <span>Total price:</span><PizzaPrice price={price} />
        </div>
    );
}
