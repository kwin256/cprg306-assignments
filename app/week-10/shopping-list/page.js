"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  let handleAddItem = async (item) => {
    let docId = await addItem(user.uid, item);
    setItems([...items, { ...item, id: docId }]);
  };
  let handleSelectItem = (item) => {
    console.log("selectedItem: " + item);
    // clean name up
    const splitName = item.name.split(",")[0].trim();
    const cleanName = splitName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g,
      ""
    );
    console.log("cleanName: " + cleanName);
    setSelectedItemName(cleanName);
  };
  const loadItems = async () => {
    const data = await getItems(user.uid);
    setItems(data);
  };
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return <button onClick={ () => {gitHubSignIn()}}>Sign in with GitHub</button>;
  }

  return (
    <main>
      <h1 className="text-center font-bold bg-sky-50">Shopping List</h1>
      <div className="flex ">
        <div className="m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleSelectItem} />
        </div>
        <div className="m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
