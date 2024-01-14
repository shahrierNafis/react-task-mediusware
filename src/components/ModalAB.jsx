import React, { useEffect } from "react";
import ModalC from "./ModalC";
function ModalAB({ show, setShow }) {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [contact, setContact] = React.useState();
  useEffect(() => {
    if (show === "all") {
      setLoading(true);
      fetch("https://contact.mediusware.com/api/contacts/")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setContacts(data.results);
          setLoading(false);
        });
    }
    if (show === "us") {
      setLoading(true);
      fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/"
      )
        .then((res) => res.json())
        .then((data) => setContacts(data.results));

      setLoading(false);
    }
  }, [show]);

  if (show === "none") {
    return null;
  }

  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-[75vw] flex flex-col items-center justify-center border shadow rounded mx-auto p-5">
        <div className="h-[75vh] w-full flex-grow-0 overflow-y-auto">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Phone</th>
                  <th scope="col">Country</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => {
                  return (
                    <tr
                      onClick={() => {
                        setContact(contact);
                      }}
                      key={contact.id}
                    >
                      <td>{contact.phone}</td>
                      <td>{contact.country.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <button
          type="button"
          className=" p-2 text-button-C
          rounded border-2 border-button-C hover:border-white hover:text-white hover:bg-button-C
          "
          data-bs-dismiss="modal"
          onClick={() => setShow("none")}
        >
          Close
        </button>
      </div>
      <ModalC {...{ contact, setContact }} />
    </>
  );
}

export default ModalAB;
