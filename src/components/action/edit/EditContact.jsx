import React, { Component } from "react";
import Swal from 'sweetalert2'
import "../../form/FormInput.css";

class EditContact extends Component {
  constructor(props) {
    super(props);

    const { id, name, email, image, detail, contact } = props.location.state.contact;
    this.state = {
      id, // id: id
      name,
      email,
      image, 
      detail,
      contact,
    };
  }

  handleUpdate = (e) => {
    e.preventDefault();

      // check case empty input
      if (this.state.name === "" || this.state.email === "" || this.state.image === "" || this.state.contact === "" || this.state.detail === "") {
        Swal.fire(
            {icon: 'error', title: 'Oops...', text: 'Please fill out all fields.!'}
        )
        return;
    }

    //check case lenght of name
    if(this.state.name.length >= 25){
      Swal.fire(
        {icon: 'error', title: 'Oops...', text: 'Error your name out of length. Your name cannot exceed 25 characters.!'}
    )
    return;
    }

      // check case validate wrog format of email
      function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    console.log(validateEmail(this.state.email));
    if (validateEmail(this.state.email) === false) {
        Swal.fire({icon: 'error', title: 'Oops...', text: 'Format of email wrong.!'})
        return;
    }

    // check case validate url of image
    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    if (checkURL(this.state.image) === false) {
        Swal.fire({icon: 'error', title: 'Oops...', text: 'URL of image wrong.!'})
        return;
    }


    this.props.updateContactHandler(this.state);
    this.setState({name: "", email: "", image: "", contact: "", detail: ""});
    this.props.history.push("/home");
  };

  render() {
    return (
      <center>
                <br/>
                <div className="card-form">
                    <form onSubmit={this.handleUpdate}>
                        <h2>Add Contact</h2>
                        <br/>
                        <div class="row">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                        <div class="row">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}/>
                        </div>
                        <div class="row">
                            <label for="contact">Contact</label>
                            <input
                                type="number"
                                name="contact"
                                placeholder="Contact"
                                value={this.state.contact}
                                onChange={(e) => this.setState({contact: e.target.value})}/>
                        </div>
                        <div class="row">
                            <label for="image">Image</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="URL Image only"
                                value={this.state.image}
                                onChange={(e) => this.setState({image: e.target.value})}/>
                        </div>
                        <div class="row">
                            <label for="image">Detail</label>
                            <textarea
                                type="text"
                                name="detail"
                                placeholder="Detail"
                                value={this.state.detail}
                                onChange={(e) => this.setState({detail: e.target.value})}/>
                        </div>
                        <button className="ui button blue">Update</button>
                    </form>
                    <br/>
                    <br/>
                </div>
            </center>
    );
  }
}

export default EditContact;
