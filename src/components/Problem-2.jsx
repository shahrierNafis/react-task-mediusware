import React from "react";
import ModalAB from "./ModalAB";

const Problem2 = () => {
  const [show, setShow] = React.useState("none");
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="absolute top-0 left-0 w-screen h-dvh flex justify-center items-center gap-2">
            <button
              className=" p-2 text-button-A 
          rounded border-2 border-button-A hover:border-white hover:text-white hover:bg-button-A
          "
              type="button"
              onClick={() => setShow("all")}
            >
              All Contacts
            </button>
            <button
              className=" p-2 text-button-B
          rounded border-2 border-button-B hover:border-white hover:text-white hover:bg-button-B
          "
              type="button"
              onClick={() => setShow("us")}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>

      <ModalAB {...{ show, setShow }} />
    </>
  );
};

export default Problem2;
