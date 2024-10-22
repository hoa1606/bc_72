import React from "react";

export default function HienThiSV() {
  return (
    <div className="pb-5">
      <div className="bg-secondary">HienThiSV</div>
      <div className="row">
        <div className="col-6">
          <p className="mb-0">Mã SV</p>
          <input type="text" className="form-control" placeholder="Mã SV" />
        </div>
        <div className="col-6">
          <p className="mb-0">Họ tên</p>
          <input type="text" className="form-control" placeholder="Họ tên" />
        </div>
        <div className="col-6">
          <p className="mb-0">Số điện thoại</p>
          <input type="text" className="form-control" placeholder="Số điện thoại" />
        </div>
        <div className="col-6">
          <p className="mb-0">Email</p>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>
      <button type="button" class="btn btn-success mt-3">Thêm sinh viên</button>
    </div>
  );
}
