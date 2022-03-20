import { Category, Hero, NewArrival } from "../../BleedBlueStore";
import { useState, useEffect } from "react";
import data from "../../data/data.json";
import "../shared/style.css";
import "./Home.css";

export const Home = () => {
  const { hero, category, products } = data;
  const [newArrival, setArrival] = useState({});

  useEffect(() => {
    setArrival(products.filter((item) => item.badge === "ARRIVED_NOW"));
  }, []);

  return (
    <section className="page-container">
      <Hero heroContent={hero}/>
      <Category categoryItems={category.gender} />
      <Category categoryItems={category.bestseller} />
      <NewArrival products={newArrival} />
    </section>
  );
};

