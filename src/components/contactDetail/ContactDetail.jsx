import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  console.log(props);

  const { id,name, email, image, contact, detail, job } = props.location.state.contact;
  return (
  <center>
    
      <div className="card">
    <img src={image} alt="" />
    <div className="card-body">
      <h4><h5>Uuid</h5> {id}</h4>
      <h4><h5>Fullname</h5> {name}</h4>
      <h4><h5>Job</h5>{job}</h4>
      <h4><h5>Email</h5>  {email}</h4>
      <h4><h5>Contact</h5>{contact}</h4>
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
