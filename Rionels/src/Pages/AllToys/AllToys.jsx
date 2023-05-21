import useTitle from "../../hooks/useTitle";
import AllToysRow from "./AllToysRow/AllToysRow";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {

  useTitle('All Toys')

  const toys = useLoaderData();

  return (
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
            <AllToysRow key={toy._id} toy={toy}></AllToysRow>
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
  );
};

export default AllToys;
