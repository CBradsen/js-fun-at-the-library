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

buildMainCharacter()

function saveReview() {
  var reviews = [];
  reviews = reviews + saveReview.push();
  return reviews;
}
saveReview

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}