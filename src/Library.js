function createLibrary(libraryName) {
  var libraryName = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [], 
      nonFiction: []
    }
  }
return libraryName
}

function addBook(libraryName, book) {
libraryName.shelves[book.genre].push(book);

}
function checkoutBook(library, book, genreShelf) {
  //needs to find which genreshelf the book is on.
  //using: fantasy, fiction or nonFiction
//var checkedOut = [];
  for (var i = 0; i < genreShelf.length; i++) {
    if (genreShelf.title === book) {
        checkedOut.push(book);
    }
   // console.log(checkedOut);
  }

}
/*function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
   if (shelf[i].title === bookName) {
   shelf.splice(i, 1);
  }
  }
}
function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
   if (shelf[i].title === bookName) {
   shelf.splice(i, 1);
  }
  }
} */


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};