import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const ByCategoryCard = ({ toy }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={toy.photoURL} className="w-72 h-72 object-contain bg-secondary"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy.toyName}</h2>
        <div className="flex justify-between">
          <p>Price: ${toy.price}</p>
          <p>Rating: <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly /></p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/toys/${toy._id}`}>
            <button className="btn btn-primary">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ByCategoryCard;
