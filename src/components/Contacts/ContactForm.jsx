import "./ContactForm.css";
import ContactList from "./ContactList.jsx";
import { useState, useEffect } from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [contacts, setContacts] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
        console.log(localStorage);
    }, [contacts]);

    function addContact(event) {
        event.preventDefault();
        let newContact = {
            "firstName": firstName,
            "lastName": lastName,
            "address": address,
            "phoneNumber": phoneNumber,
            "id": counter
        };
        setContacts([...contacts, newContact]);
        setCounter(prevCount => prevCount + 1);
        console.log(contacts);
    }

    return (
        <>
            <div className="form-container">
                <h1>Contact Form</h1>
                <form onSubmit={addContact}>
                    <label htmlFor="first-name">First Name:</label>
                    <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <label htmlFor="address">Address: </label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <label htmlFor="phone-number">Phone Number: </label>
                    <input
                        id="phone-number"
                        type="text"
                        name="phone-number"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                    <button type="submit">Submit</button>

                </form>
            </div>
            <ContactList contacts={contacts} />
        </>
    );
}

export default ContactForm;
