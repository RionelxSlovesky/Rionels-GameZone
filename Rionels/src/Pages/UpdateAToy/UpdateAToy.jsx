import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const UpdateAToy = () => {

  useTitle("Update Toys");

  const toy = useLoaderData();
  const notify = () => toast(`Updated Successfully!`);
  const handleUpdateToy = (event) => {
    event.preventDefault();

    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const subCategory = form.subCategory.value;
    const photoURL = form.photoURL.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = {
      toyName,
      price,
      subCategory,
      photoURL,
      rating,
      quantity,
      details,
    };

    fetch(`https://b7a11-toy-marketplace-server-side-rionelx-slovesky.vercel.app/toys/${toy._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          notify();
        }
      })
      .catch((err) => console.log(err.message));

    notify(toy.toyName);
  };

  return (
    <div>
      <form onSubmit={handleUpdateToy}>
        <div className="px-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="toyName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Toy name
                </label>
                <div className="mt-2">
                  <input
                    required
                    defaultValue={toy.toyName}
                    type="text"
                    name="toyName"
                    id="toyName"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    required
                    defaultValue={toy.price}
                    min="1"
                    type="number"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="subCategory"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sub Category
                </label>
                <div className="mt-2">
                  <select
                    id="subCategory"
                    name="subCategory"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="Consoles">Consoles</option>
                    <option value="Games">Games</option>
                    <option value="Action Figures">Action Figures</option>
                    <option value="Merches">Merches</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo URL
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={toy.photoURL}
                    placeholder="(optional)"
                    type="text"
                    name="photoURL"
                    id="photoURL"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Rating
                </label>
                <div className="mt-2">
                  <input
                    required
                    defaultValue={toy.rating}
                    min="1"
                    max="5"
                    type="number"
                    name="rating"
                    id="rating"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Available Quantity
                </label>
                <div className="mt-2">
                  <input
                    required
                    defaultValue={toy.quantity}
                    min="1"
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Details
                </label>
                <div className="mt-2">
                  <input
                    required
                    defaultValue={toy.details}
                    type="text"
                    name="details"
                    id="details"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-secondary text-neutral px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Toy
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default UpdateAToy;
