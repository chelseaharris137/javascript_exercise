import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.olo.com/menu.json")
      .then((res) => res.json())
      .then((data) =>
        setData(data.MenuItems.sort((a, b) => a.Price - b.Price))
      );
  }, []);

  const dessertsArray = [];
  const appetizersArray = [];
  const entreesArray = [];

  const helperFunction = (input) => {
    console.log("this is the input", input);
    let amount = 300;
    let dessertAmount = 0;
    let appAmount = 0;
    for (let i = 0; i < input.length; i++) {
      console.log("this is the input at i", input[0][i]);
      if (
        dessertAmount !== 5 &&
        input[i]["FoodType"] === "dessert" &&
        amount - input[i]["Price"] > 0
      ) {
        dessertsArray.push(input[i]);
        dessertAmount = dessertAmount + 1;
        amount = amount - input[i]["Price"];
      }
      if (
        appAmount !== 5 &&
        input[i]["FoodType"] === "appetizer" &&
        amount - input[i]["Price"] > 0
      ) {
        appetizersArray.push(input[i]);
        appAmount = appAmount + 1;
        amount = amount - input[i]["Price"];
      }
      if (input[i]["FoodType"] === "entree" && amount - input[i]["Price"] > 0) {
        entreesArray.push(input[i]);
        amount = amount - input[i]["Price"];
      }
    }
  };

  if (data) {
    helperFunction(data);
  }

  return (
    <div className="container" id="wrapper">
      <div className="row">
        <div className="col-auto mr-auto text-center">
          <h4>Total Number of Items</h4>

          <div className="container">
            <div className="row">
              <div className="col-sm p-3 my-3 bg-light text-secondary text-center">
                <h1 className="text-success">
                  {entreesArray.length > 0 ? 10 + entreesArray.length : 0}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <h4>Items</h4>
          <div className="container">
            <div className="row">
              <div className="col-sm p-3 my-3 bg-light">
                <span className="text-secondary text-left">
                  <h5 className="text-info">Appetizers:</h5>
                  {appetizersArray.length > 0
                    ? appetizersArray.map((item) => {
                        if (item.FoodType === "appetizer") {
                          return (
                            <ul>
                              <li key="{item}">
                                {item.Name} : ${item.Price}
                              </li>
                            </ul>
                          );
                        }
                      })
                    : "NO DATA HERE"}
                </span>
              </div>
              <div className="col-sm p-3 my-3 bg-light text-secondary text-left">
                <h5 className="text-info">Entrees:</h5>
                {entreesArray.length > 0
                  ? entreesArray.map((item) => {
                      if (item.FoodType === "entree") {
                        return (
                          <ul>
                            <li key="{item}">
                              {item.Name} : ${item.Price}
                            </li>
                          </ul>
                        );
                      }
                    })
                  : "NO DATA HERE"}
              </div>
              <div className="col-sm p-3 my-3 bg-light text-secondary text-left">
                <h5 className="text-info">Desserts:</h5>
                {dessertsArray.length > 0
                  ? dessertsArray.map((item) => {
                      if (item.FoodType === "dessert") {
                        return (
                          <ul>
                            <li key="{item}">
                              {item.Name} : ${item.Price}
                            </li>
                          </ul>
                        );
                      }
                    })
                  : "NO DATA HERE"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
