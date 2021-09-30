import React from "react";
import "./styles.css";
import images from "./images/food.svg";
import { useState } from "react";

const App = () => {
  const foodItems = {
    Rajasthani: [
      {
        item: "daal baati chorma",
        rating: "4 / 5",
        description: "I love this food"
      },
      {
        item: "Mawa kachodi",
        rating: "5 / 5",
        description: "I love this food"
      },
      {
        item: "Mirchi bada",
        rating: "3.5 / 5",
        description: "I love this food"
      }
    ],
    Bihari: [
      {
        item: "leeti chokha",
        rating: "4 / 5",
        description: "I love this food"
      },
      { item: "daal chawal", rating: "4 / 5", description: "I love this food" }
    ],
    Fastfood: [
      { item: "momos", rating: "4 / 5", description: "I love this food" },
      { item: "chowmin", rating: "4 / 5", description: "I love this food" },
      { item: "Maggie", rating: "4 / 5", description: "I love this food" }
    ],
    southIndian: [
      { item: "Dosa", rating: "4 / 5", description: "I love this food" },
      { item: "Idlli", rating: "4 / 5", description: "I love this food" },
      { item: "Mendu vada", rating: "4 / 5", description: "I love this food" },
      { item: "Biryani", rating: "4 / 5", description: "I love this food" }
    ]
  };

  const [selectFoodItem, setFoodItem] = useState("Rajasthani");

  const foodType = Object.keys(foodItems);

  function handleFoodItems(item) {
    setFoodItem(item);
  }

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>
            <img src={images} alt="" className="food-img" />
            My Favourite Food
          </h1>
          <p>checkOut my favourite food. select the traditional food i like</p>
        </div>

        <div className="listItem">
          <ul>
            {foodType.map((item, index) => {
              return (
                <li onClick={() => handleFoodItems(item)} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <hr />

        <div className="food-item">
          <ul>
            {foodItems[selectFoodItem].map((food, index) => (
              <>
                <li key={index}>
                  {food.item}
                  <br />
                  {food.rating}
                  <br />
                  {food.description}
                </li>
              </>
            ))}
            {/* <li>Dosa</li>
            <li>Idlli</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
