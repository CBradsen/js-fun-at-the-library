function createTitle(bookIdea) {
  bookIdea = `The ${bookIdea}`;
  return bookIdea;
}
createTitle("Storm's Awakening");

module.exports = {
  createTitle,
  // buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}