import {
  addNewContact,
  getContacts,
  getContactByID,
  updateContact,
  deleteContact
} from '../controllers/crmControllers';
import {
  login,
  register,
  loginRequired
} from '../controllers/userControllers';

const routes = (app) => {
  app.route('/api/contacts')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, loginRequired, getContacts)

    // POST endpoint
    .post(loginRequired, addNewContact);

  app.route('/api/contact/:contactId')
    // GET specific contact
    .get(loginRequired, getContactByID)

    // PUT request
    .put(loginRequired, updateContact)

    // DELETE request
    .delete(loginRequired, deleteContact);

  // POST registration route
  app.route('/auth/register')
    .post(register);

  // POST login route
  app.route('/auth/login')
    .post(login);
}

export default routes;