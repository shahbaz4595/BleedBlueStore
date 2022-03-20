<<<<<<< HEAD
import { CategoryCards } from "../../BleedBlueStore";
import "./Category.css";

export const Category = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  return (
    <section className="gutter-vh-xl">
      <h5 className="text-center">{title}</h5>
      <div className="category-container">
        {items.map((item) => (
=======
import CategoryCards from "../cards/categoryCards/CategoryCards";
import "./Category.css";

const Category = ({ categoryItems }) => {
  return (
    <section className="gutter-vh-xl">
      <h5 className="text-center">{categoryItems.title}</h5>
      <div className="category-container">
        {categoryItems.items.map((item) => (
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
          <CategoryCards item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
<<<<<<< HEAD
=======

export default Category;
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
