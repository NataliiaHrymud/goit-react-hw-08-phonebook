import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactListItem from "./ContactListItem";
import AddContact from "./AddContact";
import FindContact from "./FindContact";
import { connect } from "react-redux";
import {
  getUserContacts,
  getUserToken,
  getContactsFilter,
  getUserInfo,
} from "../../redux/contacts/contactsSelectors";
import { getContacts } from "../../redux/contacts/contactsOperations";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts(this.props.token);
  }

  filteredContact = (contacts, filter) => {
    if (filter.length !== 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = this.filteredContact(contacts, filter);
    return (
      <>
        <br />
        <AddContact />
        <FindContact />
        <br />
        <h2 className="row row-cols-5 justify-content-center">Contacts list</h2>
        {filteredContacts.length !== 0 && (
          <CardDeck className="row row-cols-md-5 justify-content-center">
            {filteredContacts.map((contact) => (
              <ContactListItem contact={contact} key={contact.id} />
            ))}
          </CardDeck>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUserInfo(state),
    contacts: getUserContacts(state),
    token: getUserToken(state),
    filter: getContactsFilter(state),
  };
};

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
