import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {

  useTitle('Toy Details')

  const toy = useLoaderData();
  return (
    <div className="px-5 hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={toy.photoURL}
          className="md:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{toy.toyName}</h1>
          <h1 className="text-xl font-bold">{toy.sellerName}</h1>
          <h1 className="text-xl font-bold">{toy.sellerEmail}</h1>
          <p className="text-lg py-6">
            {toy.details}
          </p>
          <div className="text-center flex justify-between gap-5">
            <p>Price: ${toy.price}</p>
            <p>rating: {toy.rating}/5</p>
            <p>Available Quantity: {toy.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
