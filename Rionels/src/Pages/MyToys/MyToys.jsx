import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow/MyToysRow";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");

  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-rionelx-slovesky.vercel.app/toys?sellerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (toy, id) => {
    event.preventDefault();
    const proceed = confirm(`Are you sure you want to delete ${toy}?`);
    if (proceed) {
      fetch(`https://b7a11-toy-marketplace-server-side-rionelx-slovesky.vercel.app/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert(`${toy} deleted successfully`);
            const remaining = toys.filter((t) => t._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  const handleSort = event => {
    event.preventDefault()
    const sort = event.target.value

    fetch(`https://b7a11-toy-marketplace-server-side-rionelx-slovesky.vercel.app/toys?sellerEmail=${user.email}&sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setToys(data));

    console.log(sort)
  }

  return (
    <div>
      <select className="select select-secondary w-full max-w-xs" onChange={handleSort}>
        <option disabled selected>
          Sort
        </option>
        <option value='1'>Price (low to high)</option>
        <option value='-1'>Price (high to low)</option>
      </select>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Toy</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
