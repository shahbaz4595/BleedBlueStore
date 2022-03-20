import "./CategoryCards.css";

export const CategoryCards = ({ item }) => {
  const { categoryLink, categoryName, image, imageText } = item;

  return (
    <a href={categoryLink} className="card card-video-container">
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
    </a>
  );
};
