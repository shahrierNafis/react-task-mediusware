import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const [list, setList] = useState([[]]);
  const handleClick = (val) => {
    setShow(val);
  };
  function handleSubmit() {
    // copy array
    const newList = [...list];
    // add new item
    newList.push([name, status]);
    // sort list
    newList.sort((a, b) => {
      if (a[1] === "active") {
        return -1;
      } else if (a[1] === "completed") {
        return b[1] === "active" ? 1 : -1;
      }
    });
    // set list
    setList(newList);
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form className="row  gy-2 gx-3 align-items-center mb-4">
            <div className="flex flex-col col-6">
              <div className="col-auto mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Status"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  {["active", "completed", "pending", "archive"].map(
                    (item, index) => (
                      <option key={index}>{item}</option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                if (show !== "all") {
                  if (item[1] != show) {
                    return "";
                  }
                }
                return (
                  <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
