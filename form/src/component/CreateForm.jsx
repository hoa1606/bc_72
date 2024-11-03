import React from "react";

export default function CreateForm({
  svForm,
  handleChangeSvForm,
  handleAddSv,
  isReadOnly,
  handleUpdateSv,
}) {
  return (
    <div className="col-5">
      <form onSubmit={isReadOnly ? handleUpdateSv : handleAddSv}>
        <div className="row">
          <div className="col-6">
            <label>Mã SV</label>
            <input
              readOnly={isReadOnly}
              name="maSV"
              onChange={(e) => handleChangeSvForm(e)}
              value={svForm.username}
              type="text"
              style={{ color: isReadOnly ? "gray" : "black" }}
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label>Họ và tên</label>
            <input
              readOnly={isReadOnly}
              name="hoTen"
              onChange={(e) => handleChangeSvForm(e)}
              value={svForm.fullName}
              type="text"
              style={{ color: isReadOnly ? "gray" : "black" }}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <label>Số điện thoại</label>
            <input
              readOnly={isReadOnly}
              name="sdt"
              onChange={(e) => handleChangeSvForm(e)}
              value={svForm.phoneNumber}
              type="text"
              style={{ color: isReadOnly ? "gray" : "black" }}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Email</label>
            <input
              name="email"
              onChange={handleChangeSvForm}
              value={svForm.email}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="mt-4">
          {isReadOnly ? (
            <button className="btn btn-warning" type="submit">
              Update
            </button>
          ) : (
            <button className="btn btn-success" type="submit">
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
