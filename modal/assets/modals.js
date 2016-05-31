//
// $(function () {
//   ‘use strict’;
// });

$('a').on('click', function() {
  $(this).text('Thank you.');
  $('#modal').show();
});

$('button').on('click', function() {
  $('#modal').hide();
});

$('#modal').on('click', function(e) {
  if (e.target.id === "modal") {
      $('#modal').hide();
  }
});
