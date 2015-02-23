app.checkMatch = function() {
  var firstCard;
  var firstCheck;
  var secondCard;
  var secondCheck;

  $('.card--back').on('click', function () {
    // var check = $(this).closest('.card').find('.card--flip')
    // check.prop('checked');

    if (firstCard === undefined) {
      firstCard = $(this).find('.card--icon').text();
      firstCheck = $(this).closest('.card').find('.card--flip');
      console.log($(this).closest('.card').find('.card--flip'))
      console.log(firstCheck)

      console.log(firstCard);
      console.log(firstCheck);

      setTimeout( function() {
        firstCheck.prop('disabled', true);
      }, 250);
        firstCheck.prop('checked', true);

      return firstCard;

    } else {
      secondCard = $(this).find('.card--icon').text();
      secondCheck = $(this).closest('.card').find('.card--flip');

      console.log(secondCard);
      console.log(secondCheck);
      console.log(secondCheck.prop('checked'));
      secondCheck.prop('checked', true);

      compareCards();
    }
  });

  function compareCards() {
    console.log('comparing?')
    if (firstCard === secondCard) {
      console.log('test')
        secondCheck.prop('disabled', true);
    } else {
      console.log('test1')
      console.log(firstCheck)
      console.log(secondCheck)
        firstCheck.prop('checked', false);
        console.log(secondCheck.prop('checked'))
        secondCheck.prop('checked', false);
        console.log(secondCheck.prop('checked'))
        console.log('leave yet?');
        firstCheck.prop('disabled', false);
      }

      firstCard = undefined;
      secondCard = undefined;
  };

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
