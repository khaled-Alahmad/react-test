import React from "react";
import "./App.css";
import ExpenceForm from "./components/ExpenceForm";
import ExpenceItem from "./components/ExpenseItem";
function App() {
  const products = [
    {
      id: "e4",
      title: "Suzuke",
      price: 900,
      date: new Date(2022, 2, 1),
    },
    {
      id: "e4",
      title: "BMW",
      price: 1200,
      date: new Date(2012, 2, 1),
    },
    {
      id: "e4",
      title: "Mazda",
      price: 600,
      date: new Date(1990, 2, 1),
    },
  ];
  // return React.createElement("div",{className:'App'},"hello world!")
  return (
    <div className="App">
      <ExpenceForm></ExpenceForm>
      <ExpenceItem
        title={products[0].title}
        price={products[0].price}
        date={products[0].date.toDateString()}
      />
      <ExpenceItem
        title={products[1].title}
        price={products[1].price}
        date={products[1].date.toDateString()}
      />
      <ExpenceItem
        title={products[2].title}
        price={products[2].price}
        date={products[2].date.toDateString()}
      />
    </div>
  );
}
export default App;
