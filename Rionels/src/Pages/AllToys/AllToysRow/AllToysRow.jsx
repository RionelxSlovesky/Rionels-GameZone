const AllToysRow = ({toy}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={toy.photoURL}
                alt={toy.toyName}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{toy.toyName}</div>
            <div className="text-sm opacity-50">{toy.subCategory}</div>
          </div>
        </div>
      </td>
      <td>
        {toy.sellerName}
      </td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default AllToysRow;
