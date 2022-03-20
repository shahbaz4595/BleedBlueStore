import { CategoryCards } from "../../BleedBlueStore";
import "./Category.css";

export const Category = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  return (
    <section className="gutter-vh-xl">
      <h5 className="text-center">{title}</h5>
      <div className="category-container">
        {items.map((item) => (
          <CategoryCards item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
