import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const data = Object.keys(localStorage);
  const handleDelete = (id) => {
    localStorage.removeItem(id);
    window.location.reload();
  };
  return (
    <>
      <div className="Home">
        <Link to={"/create"} className="btn">
          <button className="button">Add Member</button>
        </Link>

        {localStorage.length !== 0 ? (
          data.map((key, i) => {
            const member = JSON.parse(localStorage.getItem(key));
            return (
              <div key={i}>
                <div className="container">
                  <div className="details">
                    <div>
                      <img src={member.filename} width={50} alt="" />
                    </div>
                    <div>
                      <h1>{member.fullname}</h1>
                    </div>
                    <div>
                      <p>{member.jobtitle}</p>
                    </div>
                  </div>
                  <div className="icons">
                    <Link to={`/edit/${key}`}>
                      <i class="fa fa-pencil pencil" aria-hidden="true"></i>
                    </Link>
                    <i
                      onClick={() => handleDelete(key)}
                      class="fa fa-trash-o bin"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h1>No members is the database</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
