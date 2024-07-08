"use client";

import ItemList from "./item-list";
import itemData from "./items.json";
import NewItem from "./new-item";
import {useState} from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {

    const [items, setItems] = useState([...itemData]);
    const [selectedItemName, setSelectedItemName] = useState("");   
    let handleAddItem = (item) => { setItems([...items, item]); }
    let handleSelectItem = (item) => { 
        console.log('selectedItem: ' + item);
        // clean name up
        const splitName = item.name.split(',')[0].trim();
        const cleanName = splitName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '')
        console.log('cleanName: ' + cleanName);
        setSelectedItemName(cleanName); 
    } 

    return (
        <main>
            <h1 className="text-center font-bold bg-sky-50">Shopping List</h1>
            <div className="flex ">
                <div className="m-2">
                    <NewItem onAddItem = {handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleSelectItem}/>
                </div>
                <div className="m-2">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
            
            
        </main>
    );
}