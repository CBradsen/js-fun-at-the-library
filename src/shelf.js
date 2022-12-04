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
        
  } 
    return arrayTitles.join(", " );

}
function searchShelf(shelf, title) {
// if title is on shelf, return true.
// Compare titles to shelf list. 
// Bollean value, Will need to run through the list and check each one. 
//Methods: For loop, bollean comparison, return true or false, 
// will need to identify which self?  Are shelves by genre? Or something else: for instance: fantasyShelf is not a genre, but some sciFi went into it. Not going to worrry about that since here, sciFiShelf and nonFictionShelf are used. Can i use listTitles from above? 
  for ( var i = 0; i < shelf.length; i ++) {
    if (shelf[i].title === title) {
      return true;
    }
    }
    return false;
  }

   // else if (shelf[i].title !== title) {
   // return "Not on this shelf";
  


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};