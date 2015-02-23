//displays array from game-cards on page
  app.router.add('', function () {
    app.gameBoard(8);
  });

  app.router.add('easy', function () {
    app.gameBoard(8);
  });

  app.router.add('hard', function () {
    app.gameBoard(16);
  });

app.gameBoard = function (numPairs) {
    var template = _.template($('#gameBoard').html(), { variable: 'm' });
    var board = template({
      cards: app.gameCards(numPairs)
    });

    $('.main-content').html(board);

    app.checkMatch();
};
