import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../card/ContactCard";


const ContactList = (props) => {
  // console.log(props);
  const inputElement = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </>
    
      
    );
  });

  const getSearchHandler = () => {
    // console.log(inputElement.current.value);
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div className="main">

      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputElement}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            // style={{ width: "50em" }}
            value={props.term}
            onChange={getSearchHandler}
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
