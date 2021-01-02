import {
  addNewContact,
  getContacts,
  getContactByID,
  updateContact,
  deleteContact
} from '../controllers/crmControllers';

const routes = (app) => {
  app.route('/api/contacts')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

  app.route('/api/contact/:contactId')
    // get specific contact
    .get(getContactByID)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
}

export default routes;