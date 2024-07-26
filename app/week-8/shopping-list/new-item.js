"use client";
import { useState } from "react";
import {nanoid} from "nanoid";

export default function NewItem({ onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        let id = nanoid(18)
        let item = {id, name, quantity, category };
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="m-2 border-slate-700">
            <h2 className="text-center">Add New Item</h2>
            <form className = "flex p-2" onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>
            <label>
                Quantity:
                <input
                    type="number"
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}
                    min="1"
                    max="99"
                    required
                />
            </label>
            <label>
                Category:
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <button className="bg-blue-300 w-20">+</button>
        </form>
        </div>
        
    );
}