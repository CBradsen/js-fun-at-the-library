function createTitle(bookIdea) {
  bookIdea = `The ${bookIdea}`;
  return bookIdea;
}
createTitle("Storm's Awakening");

function buildMainCharacter(name, age, pronouns) {
  var yourCharacter = 
    {
      name,
      age,
      pronouns
    }
    return yourCharacter;
 
}


function saveReview(newReview, arrayOfReviews) {
  
   if (arrayOfReviews.includes(newReview)) {
    delete newReview;
    } else {
    arrayOfReviews.push(newReview);
   }
 
            
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
  
}

function writeBook(title, character, genre) {
 
    var book = {
      title: title,
      mainCharacter: character,
      pageCount: calculatePageCount(title),
      genre: genre
    }   
 return book;
}

function editBook(book) {
    
  
   book.pageCount = book.pageCount * .75 

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}