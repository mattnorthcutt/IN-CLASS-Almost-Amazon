import { getBooks } from '../api/bookData';
import { showBooks } from '../pages/books';
// import { showAuthors } from '../pages/authors';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getBooks(user.uid).then((books) => showBooks(books));
};

export default startApp;
