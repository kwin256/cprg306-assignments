"use client";

import ItemList from "./item-list";
import itemData from "./items.json";
import NewItem from "./new-item";
import {useState} from "react";

export default function Page() {

    const [items, setItems] = useState([...itemData]);
    let handleAddItem = (item) => { setItems([...items, item]); }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}