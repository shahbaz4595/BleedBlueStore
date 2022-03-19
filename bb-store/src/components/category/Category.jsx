import CategoryCards from "../cards/categoryCards/CategoryCards";
import "./Category.css";

const Category = ({ categoryItems }) => {
  return (
    <section className="gutter-vh-xl">
      <h5 className="text-center">{categoryItems.title}</h5>
      <div className="category-container">
        {categoryItems.items.map((item) => (
          <CategoryCards item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Category;
