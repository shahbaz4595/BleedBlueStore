import "./CategoryCards.css";
import { Link } from "react-router-dom";

export const CategoryCards = ({ item }) => {
  const { categoryLink, categoryName, image, imageText } = item;

  return (
    <Link to={`${categoryLink}?category=${categoryName}`} className="card card-video-container">
      <div className="card-video">
        <div className="card-video-cover">
          <img
            loading="lazy"
            className="img-responsive"
            src={image}
            alt={imageText}
          />
        </div>
        <div className="card-video-caption">
          <div className="video-caption-link">{categoryName}</div>
        </div>
      </div>
    </Link>
  );
};
