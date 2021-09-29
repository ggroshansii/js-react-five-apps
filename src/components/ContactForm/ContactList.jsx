


function ContactList(props) {
    return (
        <>
        <div className="contacts-list-container">
            {props.contacts.map(contact => {
                console.log(contact)
            }
            )}
        </div>
        </>
    )
}

export default ContactList;