"use client";
import Item from "./item";
import {useState} from "react";
import items from "./items.json";

export default function ItemList() {
    let itemArray = items.map((item) => ({...item}));
    const [sortBy, setSortBy] = useState("name");
    // const [itemArray, setItemsArray] = useState([...items]);
    let changeSortBy = (value) => setSortBy(value);

    itemArray = itemArray.sort((a, b) => {a[sortBy] > b[sortBy] ? 1 : -1});
    return (
        <div>
            <div className = "flex justify-start gap-2">
            <h2>Sort by:</h2>
            <button className = {`${sortBy === 'name'? 'bg-yellow-100' : 'bg-blue-300'}`} onClick = {() =>{changeSortBy("name")}}>Name</button>
            <button className = {`${sortBy === 'category'? 'bg-yellow-100' : 'bg-blue-300'}`} onClick = {() =>{changeSortBy("category")}}>Category</button>
            </div>
        <ul className="p-2" >
            {itemArray.map((item) => (
                <Item key={item.id}  {...item}/>
            ))} 
        </ul>
        </div>
    );
}
