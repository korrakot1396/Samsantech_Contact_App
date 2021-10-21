import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  console.log(props);

  const { id,name, email, image, contact, detail } = props.location.state.contact;
  return (
  <center>
    
      <div className="card">
    <img src={image} alt="" />
    <div className="card-body">
      <h4><h5>Uuid</h5> {id}</h4>
      <h3><h5>Fullname</h5> {name}</h3>
      <h3><h5>Email</h5>  {email}</h3>
      <h3><h5>Contact</h5>{contact}</h3>
      <p>
      <h5>Detail</h5>
       {detail}
      </p>
      <div className="center-div">
         <Link to={"/home"}>
          <button className="ui button blue">Back</button>
        </Link>
       </div>
    </div>
  </div>
  <br/>
  <br/>
  </center>

  );
};

export default ContactDetail;
