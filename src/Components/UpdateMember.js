import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateMember() {
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem(id));
  const [values, setValues] = useState(user.fullname);
  const [value, setValue] = useState(user.jobtitle);
  const [file, setFile] = useState(user.filename);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;

        setFile(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  };
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      id,
      JSON.stringify({
        filename: file,
        fullname: values,
        title: value,
      })
    );
    navigate("/");
  };
  return (
    <>
      <div className="back">
        <Link to="/">
          <i class="fa fa-arrow-left back-btn" aria-hidden="false"></i>
        </Link>
      </div>
      <div className="addcontainer">
        <form onSubmit={handleEdit} action="">
          <div className="member_img">
            <img src={file} alt="" />
            <input
              className="imgFile"
              accept="image/jpeg,image/png,image/jpg"
              type="file"
              onChange={handleFileChange}
            />
            <i className="fa fa-plus changeImage" aria-hidden="true"></i>
          </div>

          <div className="member_input">
            <input
              type="text"
              className="textbox"
              onChange={(e) => setValues(e.target.value)}
              placeholder="Full Names"
            />

            <input
              type="text"
              className="textbox"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Job Title"
            />

            <button className="submit button">Update Member</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateMember;
