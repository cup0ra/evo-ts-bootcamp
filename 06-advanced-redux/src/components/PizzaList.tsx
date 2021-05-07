import React from "react";
import { PizzaItem } from "./PizzaItem";
import { useSelector } from "react-redux";
import { State } from "../types";
import { Loading } from "./Loading";


export function PizzaList() {
    const pizza = useSelector((state: State) => state.pizza.pizza)
    console.log(pizza);
    
    return(
        <>
    {
        pizza.length ?
    pizza.map((p) =>
        <PizzaItem
            key={p._id}
            pizza={p}
        />)
    : <Loading />
    }
    </>
    ) 
}
