var thisSlide = 0;
var scrollEvent = false;

function submitEstimate() {

  // 입력하지 않았을 경우
  var inValid = [0, 2, 3] // 입력하지 않은 input들
  var estimate = $("#estimate")
  var sections = estimate.find('section');
  $.each(inValid, function (index, inval) {
    sections.eq(inval).find('input').addClass('is-invalid')
  })
  estimateSlideTo(inValid[0] + 1)
}


var googleSubmitBtn = $('#google-submit');
var snackbar = $('#snackbar');

// var inputName = $('#name');
// var inputAge = $('#age');
// var inputArea = $('#area');

var input1 = $('input[name="question1"]:checked').val();
var input2 = $('input[name="question2"]:checked').val();
var input3 = $('input[name="question3"]:checked').val();
var input4 = $('input[name="question4"]:checked').val();
var input5 = $('input[name="question5"]:checked').val();
var input6 = $('input[name="question6"]:checked').val();
var inputs = $('input[type=radio]');

function isLoading(status) {
  if (status) {
    $('html, body').addClass('wait');
    googleSubmitBtn.attr('disabled', true).html('입력중...');
  } else {
    $('html, body').removeClass('wait');
    googleSubmitBtn.attr('disabled', false).html('입력완료');
  }
}


$('#google-submit').click(function () {

  var input1 = $('input[name="question1"]:checked').val();
  var input2 = $('input[name="question2"]:checked').val();
  var input3 = $('input[name="question3"]:checked').val();
  var input4 = $('input[name="question4"]:checked').val();
  var input5 = $('input[name="question5"]:checked').val();
  var input6 = $('input[name="question6"]:checked').val();
  var inputs = $('input[type=radio]');
  if(!input1 || !input2 || !input3 || !input4 || !input5 || !input6){
    alert('모든 항목을 입력하여주세요')
  }
  else{
  // 입력중..
  isLoading(true);
  // alert(input1);
  $.ajax({
    type: "GET",
    url: "https://script.google.com/macros/s/AKfycbzPu3NwdDHmabXSo3Ey4Pf7cODV_9mdV6kb3ybRuRsr3zMXUI4/exec",
    data: {
      "초상권": input1,
      "상표권1": input2,
      "상표권2": input3,
      "저작권1": input4,
      "저작권2": input5,
      "저작권3": input6
    },
    success: function (response) {
      isLoading(false);




    },
    error: function (request, status, error) {
      isLoading(false);
      console.log("code:" + request.status + "\n" + "error:" + error);
      console.log(request.responseText);
    }
  });
  }
});

function estimateSlideTo(number) {
  if (number > 0 && number <= 23) {
    thisSlide = number
    $("#estimate").moveTo(thisSlide);
  }
}

$(document).ready(function () {
  $('#estimate').onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    direction: "vertical"
  })



})
