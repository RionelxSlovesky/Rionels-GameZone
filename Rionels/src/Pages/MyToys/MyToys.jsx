import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow/MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toys?sellerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (toy, id) => {
    event.preventDefault();
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert(`${toy} deleted successfully`);
            const remaining = toys.filter(t => t._id !== id)
            setToys(remaining)
          }
        });
    }
  };

  return (
    <div>
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
              <MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysRow>
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
