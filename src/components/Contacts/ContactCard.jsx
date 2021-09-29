import './ContactCard.css'

function ContactCard(props) {

    console.log(props)

    return (
        <>
            <div className="single-contact-container">
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Address: {props.address}</p>
                <p>Phone Number: {props.phoneNumber}</p>
            </div>
        </>
    )
}

export default ContactCard;