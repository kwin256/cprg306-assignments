"use client";
import Item from "./item";
import {useState} from "react";


export default function ItemList( {items}) {
    let itemArray = [...items];
    const [sortBy, setSortBy] = useState("name");
    let changeSortBy = (value) => setSortBy(value);

    itemArray = itemArray.sort( (a, b) => a[sortBy] > b[sortBy] ? 1 : -1 );
    
    return (
        <div>
            <div className = "flex justify-start gap-2">
            <h2>Sort by:</h2>
            <button className = {`${sortBy === 'name'? 'bg-yellow-100' : 'bg-blue-300'}`} onClick = {() =>{changeSortBy("name")}}>Name</button>
            <button className = {`${sortBy === 'category'? 'bg-yellow-100' : 'bg-blue-300'}`} onClick = {() =>{changeSortBy("category")}}>Category</button>
            </div>
        <ul className="bg-gray-300 p-2" >
            {itemArray.map((item) => (
                <Item key={item.id}  {...item}/>
            ))} 
        </ul>
        </div>
    );
}
