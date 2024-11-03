import React from "react";

export default function ListSv({
  listSv,
  handleDeleteSv,
  handleEditSv,
}) {
  const handleRenderSv = () => {
    return listSv.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
          <td>
            <button
              onClick={() => handleDeleteSv(sv.maSV)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditSv(sv)}
              className="btn btn-primary"
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{handleRenderSv()}</tbody>
      </table>
    </div>
  );
}
