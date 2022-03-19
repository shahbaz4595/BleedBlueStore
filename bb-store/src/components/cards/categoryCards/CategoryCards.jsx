import "./CategoryCards.css";

const CategoryCards = ({ item }) => {
  return (
    <a href={item.categoryLink} className="card card-video-container">
      <div className="card-video">
        <div className="card-video-cover">
          <img
            loading="lazy"
            className="img-responsive"
            src={item.image}
            alt={item.imageText}
          />
        </div>
        <div className="card-video-caption">
          <div className="video-caption-link">{item.categoryName}</div>
        </div>
      </div>
    </a>
  );
};

export default CategoryCards;
