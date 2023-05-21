import { Link } from "react-router-dom";

const MyToysRow = ({toy, handleDelete}) => {

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toy.photoURL} alt={toy.toyName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{toy.toyName}</div>
            <div className="text-sm opacity-50">{toy.subCategory}</div>
          </div>
        </div>
      </td>
      <td>{toy.sellerName}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <th>
        <Link to={`/updateAToy/${toy._id}`}>
          <button className="btn btn-ghost btn-xs">Update</button>
        </Link>
        <Link>
          <button onClick={() => handleDelete(toy.toyName, toy._id)} className="btn btn-ghost btn-xs">Delete</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
