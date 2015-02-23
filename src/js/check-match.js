app.checkMatch = function() {
  var firstCard;

  $('.card--flip').on('click', function () {
    var currentCard = $(this)

    if (firstCard === undefined) {
      firstCard = currentCard;

    } else if (firstCard[0] === currentCard[0]) {
      return false;

    } else {
      compareCards(firstCard, currentCard);

      firstCard = undefined
    }

  });

  function compareCards(firstCard, secondCard) {
    if (firstCard.val() === secondCard.val()) {
      disableCheck(firstCard);
      disableCheck(secondCard);
    } else {
      setTimeout(function() {
        setCheck(firstCard, false);
        setCheck(secondCard, false);
      }, 750);
    }
  };

  function disableCheck(card) {
    card.prop('disabled', true);
  }

  function setCheck(card, state) {
    card.prop('checked', state);
  }

};




// app.checkMatch = function() {
//   var set = [];
//   var firstCard;
//   var firstCheck;
//   var secondCard;
//   var secondCheck;
//
//   $('.board .card').on('click', function (e) {
//     e.stopPropagation();
//
//     if (set.length === 0) {
//       firstCard = $(this).find('.card--icon').text();
//       firstCheck = $(this).find('.card--flip');
//
//
//       console.log(firstCard);
//       console.log(firstCheck);
//
//       setTimeout( function() {
//         firstCheck.prop('disabled', true);
//       }, 250);
//
//       set.push(firstCard);
//
//       return;
//
//     } else {
//       secondCard = $(this).find('.card--icon').text();
//       secondCheck = $(this).find('.card--flip');
//
//       console.log(secondCard);
//       console.log(secondCheck);
//
//       set.push(secondCard);
//
//       // compareCards();
//     }
//   });
//
//   function compareCards() {
//   if (set[0] === set[1]) {
//       secondCheck.prop('disabled', true);
//   } else {
//       firstCard.prop('disabled', false);
//       firstCheck.prop('checked', false);
//       secondCheck.prop('checked', false);
//     }
//
//     firstCard = undefined;
//     secondCard = undefined;
//     set = [];
//   };
// };
//




//
//
// // var firstCard = $(this).children('.card--icon').val();
// // var firstCheck = $(this).find('.card--flip');
// //
// // setTimeout( function() {
// //   firstCheck.prop('disabled', true);
// // }, 250);
//
// // ('.card').click(function() {
// //   var thatCard = $(this).val();
// //   var thatCheck = $(this).find('.card--flip');
// //
// //   if (thisCard === thatCard) {
// //     thatCheck.prop('disabled', true);
// //   } else {
// //     thisCard.prop('disabled', false);
// //     thisCheck.prop('unchecked');
// //     thatCheck.prop('unchecked');
// //   }
//
//   // var thisCard = undefined;
//   // var thisCheck = undefined;
//   // var thatCard = undefined;
//   // var thatCheck = undefined;
//
// // });
