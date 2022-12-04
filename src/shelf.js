function shelfBook(title, genreShelf) {

if (title.genre === "sciFi") {
  genreShelf.unshift(title);
}
if (genreShelf.length > 3 ) {
  genreShelf.shift(title);
}
}

// could combine and use lessthan on line 6. 

function unshelfBook(bookName, shelf) {
     for (var i = 0; i < shelf.length; i++) {
      if (shelf[i].title === bookName) {
      shelf.splice(i, 1);
     }
     }
  }

function listTitles(shelffName) {
  var arrayTitles = [];
    for (var i = 0; i < shelffName.length; i++) {
        arrayTitles.push(shelffName[i].title);
        console.log(arrayTitles);
  } 
  return arrayTitles.join(", " );

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};