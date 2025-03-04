/* eslint-disable */
import { getSingleAuthor, getAuthorBooks, deleteSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// for merged promises
const getBookDetails = async (firebaseKey) => {
  const bookObject = await getSingleBook(firebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);
  return { ...bookObject, authorObject };
};

const getAuthorDetail = async (firebaseKey) => {
    const authorObject = await getSingleAuthor(firebaseKey);
    const bookObject = await getAuthorBooks(authorObject.firebaseKey);
    return { ...authorObject, bookObject };
  };

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
    getAuthorBooks(firebaseKey).then((authorBooksArray) => {
      const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));
  
      Promise.all(deleteBookPromises).then(() => {
        deleteSingleAuthor(firebaseKey).then(resolve);
      });
    }).catch(reject);
  });
  
export { getBookDetails, getAuthorDetail, deleteAuthorBooksRelationship };
