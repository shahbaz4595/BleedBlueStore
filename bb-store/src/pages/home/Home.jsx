import Category from "../../components/category/Category";
import Hero from "../../components/hero/Hero";
import NewArrival from "../../components/newArrival/NewArrival";
import data from "../../data/data.json";
import { useState, useEffect } from "react";
import "../shared/style.css";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState(data.products);
  const [newArrival, setArrival] = useState({});

  useEffect(() => {
    setArrival(products.filter((item) => item.badge === "ARRIVED_NOW"));
  }, [products]);

  return (
    <section className="page-container">
      <Hero />
      <Category categoryItems={data.category.gender} />
      <Category categoryItems={data.category.bestseller} />
      <NewArrival products={newArrival} />
    </section>
  );
};

export default Home;
