import mongoose from 'mongoose';
import {
  ContactSchema
} from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

// Create new contact
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Read all contacts
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Read contact by id
export const getContactByID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
}

// Update contact
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({
    _id: req.params.contactId
  }, req.body, {
    new: true
  }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  })
}

// Delete contact
export const deleteContact = (req, res) => {
  Contact.deleteOne({
    _id: req.params.contactId
  }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'Successfully deleted contact'
    });
  })
}