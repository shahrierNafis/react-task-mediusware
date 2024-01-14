import React from "react";

function ModalC({ contact, setContact }) {
  return (
    <>
      {contact && (
        <>
          <div className="absolute m-auto top-0 left-0 right-0 bottom-0 w-fit h-fit border shadow rounded p-4 backdrop-blur	">
            phone:{contact.phone}
            <br />
            country:{contact.country.name}
            <button
              className=" p-2 text-button-C
            rounded border-2 border-button-C hover:border-white hover:text-white hover:bg-button-C block mx-auto
            "
              onClick={() => setContact(null)}
            >
              close
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default ModalC;
