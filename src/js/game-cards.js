// gameCards returns array with specified number of pairs
// of cards in random order
app.gameCards = function (numPairs) {
  var cards = 'abcdmnopqrstuvwxyz'.split('').slice(0, numPairs);

  // double the array
  cards = cards.concat(cards);

  // swap two values in the array
  function swap(arr, x, y) {
    var tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
  }

  // shuffle the cards using swap function
  function shuffle(arr) {
    for (var i = 0; i < arr.length; ++i) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      swap(arr, i, randomIndex);
    }

    return arr;
  }

  return shuffle(cards);
};
