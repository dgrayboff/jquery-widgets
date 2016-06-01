 //
 // var maxLength = 10;
 //
 // $('textarea').keyup(function() {
 //   var length = $(this).val().length;
 //   var length = maxLength - length;
 // });
 //
 // $('#chars').text(length);



var maxchars = 25;

$('textarea').keyup(function () {
    var charLength = $('textarea').val().length;
    $('textarea').val($('textarea').val().substring(0, maxchars));
    var charLength = $('textarea').val().length;
    remain = maxchars - charLength;
    $('#remain').text(remain);
});
