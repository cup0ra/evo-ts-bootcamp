import * as R from "ramda";
import React from "react";
import { useSelector } from "react-redux";
import {Pizza, State} from "../types";
import { Missing } from "./Missing";
import {PizzaBasketItem} from "./PizzaBasketItem";


export function PizzaBasket() {
    const basket = useSelector((state: State) => state.basket.basket)
    return(
        <>
        { 
        basket.length ?
        basket.map((p) =>
        <PizzaBasketItem
            key={p._id}
            pizza={p}
        />)
        :
        <Missing />
    }
    </>)
}
