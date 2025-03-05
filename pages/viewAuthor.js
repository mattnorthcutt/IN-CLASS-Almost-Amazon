import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// import { authorBooks } from './books';

const viewAuthor = (authorObj) => {
  clearDom();

  const domString = `
  <div id="authorSt" class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div id="authorBtn" class="mt-6">
       <i id="edit-author-btn--${authorObj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-author--${authorObj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div id="authorStuff" class="text-white ms-5 details">
     <h5>${authorObj.first_name} ${authorObj.last_name} ${authorObj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${authorObj.email}">${authorObj.email}</a>
     </div>
  </div>
  <div id="books"></div>
   `;

  const bookString = authorObj.bookObject.map((BookObj) => `
      <div class="card">
        <img id="bookImg" class="card-img-top" src=${BookObj.image} alt=${BookObj.title} style="height: 350px;" style="width: 90px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${BookObj.title}</h5>
            <p class="card-text bold">${BookObj.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${BookObj.price}` : `$${BookObj.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${BookObj.firebaseKey}"></i>
            <i id="edit-book-btn--${BookObj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${BookObj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`);
  const domStr = (bookString + domString);
  renderToDOM('#view', domStr);
};
export default viewAuthor;
