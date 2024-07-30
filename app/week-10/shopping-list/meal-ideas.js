"use client";
import { useState, useEffect } from "react";

let fetchMealIdeas = async (ingredient) => {  
    console.log('fetching meal ideas for ' + ingredient);
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    let body = await response.json();
    console.log('fetching meal ideas response: ' + body.meals);
    return body.meals;
  };

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    

    let loadMealIdeas = async (ingredient) => {
        console.log('loading meal ideas for ' + ingredient);
        let mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    };

    useEffect(() => {     
        loadMealIdeas(ingredient);
    }, [ingredient]);

  return (
    <div>
        <h2>Meal Ideas</h2>
        <ul>
            {meals && meals.map((meal) => (
            <li key={meal.idMeal}>
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </li>
            ))}
        </ul>
    </div>
    );
}
