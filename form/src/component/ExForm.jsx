import React, { useState } from "react";
import CreateForm from "./CreateForm";
import ListSv from "./ListSv";
let getDataLocal = () => {
  let data = localStorage.getItem("USERS");
  //   data sẽ là null nếu chưa có dữ liệu
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function ExForm() {
  const [svForm, setSvForm] = useState({
    maSV: "",
    hoTen: "",
    sdt:"",
    email: "",
  });
  const [listSv, setListSv] = useState(getDataLocal());
  const [isReadOnly, setIsReadOnly] = useState(false);
  const handleChangeSvForm = (e) => {
    // e.preventDefault ~ ngăn chặn sự kiện mặc định của form => không bị reload lại trang
    const { name, value } = e.target;
    let newSvForm = { ...svForm, [name]: value };
    setSvForm(newSvForm);
  };
  const handleAddSv = (e) => {
    e.preventDefault();
    // kiểm tra username có trùng không
    let index = listSv.findIndex(
      (sv) => sv.maSV === svForm.maSV
    );
    if (index !== -1) {
      message.error("Sinh vien is exist");
      return;
    }
    let newListSv = [...listSv, svForm];
    setListSv(newListSv);
    message.success("Add user success");
    // lưu danh sách user vào local storage
    let dataJson = JSON.stringify(newListSv);
    localStorage.setItem("SINHVIEN", dataJson);
  };
  let handleDeleteSv = (maSV) => {
    let newListSv = listSv.filter((sv) => sv.maSV !== maSV);
    setListSv(newListSv);
  };
  let handleEditSv = (sv) => {
    //    truyền trực tiếp user vào function
    setSvForm(sv);
    setIsReadOnly(true);
  };
  let handleUpdateSv = (user) => {
    setIsReadOnly(true);
  };

  return (
    <div className="container">
      <h3>Thông tin sinh viên</h3>
      <CreateForm
        handleUpdateSv={handleUpdateSv}
        isReadOnly={isReadOnly}
        svForm={svForm}
        handleChangeSvForm={handleChangeSvForm}
        handleAddSv={handleAddSv}
      />
      <h3>Danh sách sinh viên</h3>
      <ListSv
        listSv={listSv}
        handleDeleteSv={handleDeleteSv}
        handleEditSv={handleEditSv}
      />
    </div>
  );
}
