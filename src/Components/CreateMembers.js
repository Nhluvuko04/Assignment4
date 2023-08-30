import React, { useState } from "react";
import firstImage from "../images/back.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CreateMembers = () => {
  const navigate = useNavigate();
  const [fileName, setfilename] = useState(firstImage);
  const [fullName, setfullname] = useState("");
  const [jobTitle, setjobtitle] = useState("");

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const database = e.target.result;
        setfilename(database);
      };

      reader.readAsDataURL(file);
      console.log(file);
    }
  }
  // Able to submit your details in the form
  const handleSubmit = (e) => {
    if (fullName !== "" || jobTitle !== "") {
      e.preventDefault();
      let uniqueId = localStorage.length;
      let memberId = uniqueId + 1;
      localStorage.setItem(
        memberId,
        JSON.stringify({
          fullname: fullName,
          jobTitletitle: jobTitle,
          filename: fileName,
        })
      );
    } else {
      alert("file your name and job title");
    }

    navigate("/");
  };

  return (
    <>
      <div className="back">
        <Link to="/">
          <i class="fa fa-arrow-left back-btn" aria-hidden="true"></i>
        </Link>
      </div>

      <div className="addcontainer">
        <form onSubmit={handleSubmit} action="">
          <div className="member_img">
            <img src={fileName} alt="" />
            <input
              className="images"
              accept="image/back.png"
              type="file"
              onChange={handleImage}
            />
            <i className="fa fa-plus changeImage" aria-hidden="true"></i>
          </div>

          <div className="member_input">
            <input
              type="text"
              className="textbox"
              onChange={(e) => setfullname(e.target.value)}
              placeholder="Full Names"
            />
            <input
              type="text"
              className="textbox"
              onChange={(e) => setjobtitle(e.target.value)}
              placeholder="Job Title"
            />
            <button className="submit button">Add Member</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateMembers;
