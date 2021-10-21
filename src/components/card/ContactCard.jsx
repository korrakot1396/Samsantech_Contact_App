import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";
import "./ContactCard.css";


const ContactCard = (props) => {
  const { id, name, email, image } = props.contact;
  return (
 
      <div className="cert-card">
      <div className="content">
            <img
              className="logo_img"
              src={image} alt="blog" className="blog-card-image mask"
              alt={name}
            />
      </div>
      <div className="cert-body">
        <h2 className="cert-body-title">{name}</h2>
        <h3 className="cert-body-subtitle">{email}</h3>
      </div>
 
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", marginLeft: "3px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link
          to={{
            pathname: `/edit`,
            state: { contact: props.contact },
          }}
        >
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px" }}
          ></i>
         </Link>

       <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
         <i
            className="file alternate outline icon"
            style={{ color: "green", marginTop: "7px" }}
          ></i> </Link>
         <br/>
         <br/>

       </div>
  );
};

export default ContactCard;
