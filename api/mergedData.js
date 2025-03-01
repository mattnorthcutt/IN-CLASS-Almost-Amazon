/* eslint-disable */
import { getSingleAuthor, getAuthorBooks } from './authorData';
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

export { getBookDetails, getAuthorDetail };
