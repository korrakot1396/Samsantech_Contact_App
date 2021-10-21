import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {uuid} from "uuidv4";
import "./App.css";
import AddContact from "./components/action/add/AddContact.";
import ContactList from "./components/contactList/ContactList";
import Header from "./components/header/Header";
import ContactDetail from "./components/contactDetail/ContactDetail";
import api from "./api/contacts";
import EditContact from "./components/action/edit/EditContact";
import Splash from "./components/pages/splash/Splash";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    //RetriveContacts
    const retriveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
    };

    const addContactHandler = async (contact) => {
        console.log(contact);
        const request = {
            id: uuid(),
            ...contact
        };

        const response = await api.post("/contacts", request);

        //Alert success after add contact
        const swalWithBootstrapButtons = withReactContent(Swal)

        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, confirm it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log(response);
                    setContacts([
                        ...contacts,
                        response.data
                    ]);
                    swalWithBootstrapButtons.fire(
                        'Success!',
                        'Your added your contact.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your contact add not success',
                        'error'
                    )
                }
            })
    };

    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);

        //Alert success after add contact
        const swalWithBootstrapButtons = withReactContent(Swal)

        const {id, name, email} = response.data;

        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, confirm it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log(response.data);
                    setContacts(contacts.map((contact) => {
                        return contact.id === id
                            ? {
                                ...response.data
                            }
                            : contact;
                    }));
                    swalWithBootstrapButtons.fire(
                        'Success!',
                        'Your added your contact.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your contact add not success',
                        'error'
                    )
                }
            })

    };

    const removeContactHandler = async (id) => {
        //Alert success after delete contact
        const swalWithBootstrapButtons = withReactContent(Swal)

        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, confirm it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            })
            .then((result) => {
                if (result.isConfirmed) {
                    api.delete(`/contacts/${id}`);
                    const newContactList = contacts.filter((contact) => {
                        return contact.id !== id;
                    });

                    setContacts(newContactList);
                    swalWithBootstrapButtons.fire(
                        'Success!',
                        'Your deleted your contact.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your contact delete not success',
                        'error'
                    )
                }
            })

    };

    const searchHandler = (searchTerm) => {
      
        setSearchTerm(searchTerm);

        if (searchTerm !== "") {
            const newContactList = contacts.filter((contact) => {
              
                return Object
                    .values(contact)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });

            setSearchResults(newContactList);
        } else {
            setSearchResults(contacts);
        }
    };

    useEffect(() => {
        
        const getAllContacts = async () => {
            const allContacts = await retriveContacts();
            if (allContacts) 
                setContacts(allContacts);
            };
        
        getAllContacts();
    }, []);

    return (
        <div className="ui container">
            <Router>
                <Header basename="/"/>

                <Switch>
                    <Route path="/" exact="exact" component={Splash}/>
                    <Route path="/home"
                        // exact
                        render={(props) => (
                            <ContactList
                                {...props}
                                contacts={searchTerm.length < 1
                                    ? contacts
                                    : searchResults}
                                getContactId={removeContactHandler}
                                term={searchTerm}
                                searchKeyword={searchHandler}/>
                        )}/>
                    <Route
                        path="/add"
                        render={(props) => (<AddContact {...props} addContactHandler={addContactHandler}/>)}/>
                    <Route
                        path="/edit"
                        render={(props) => (<EditContact {...props} updateContactHandler={updateContactHandler}/>)}/>

                    <Route path="/splash" component={Splash}/>

                    <Route path="/contact/:id" component={ContactDetail}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
