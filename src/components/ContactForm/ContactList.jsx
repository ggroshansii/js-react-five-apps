import "./ContactList.css";
import ContactCard from "./ContactCard.jsx"


function ContactList(props) {
    return (
        <>
        <div className="contacts-list-container">
            {props.contacts.map(contact => {
                return <ContactCard key={contact.id} firstName={contact.firstName} lastName={contact.lastName} address={contact.address} phoneNumber={contact.phoneNumber} />
            }
            )}
        </div>
        </>
    )
}

export default ContactList;