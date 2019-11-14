function hoverNavigation () {
  var categorySmall = window.document.getElementById('nav_small');
  if (categorySmall.getAttribute('class') === 'open') {
    categorySmall.setAttribute('class', '')  
    $('#background_layer_01').addClass('display_none');
  } else {
    categorySmall.setAttribute('class', 'open');
    $('#background_layer_01').removeClass('display_none');
  }
}
function hoverMemberDesc () {
  var memberDesc = $('#member_desc');
  if (memberDesc.hasClass('display_none')) {
    memberDesc.removeClass('display_none');
  } else {
    memberDesc.addClass('display_none');
  }
}
function positionToTop () {
  $('html, body').animate({scrollTop: '0'}, 1000);
}
function modal (title, html, callback, confirmText) {
  $('#modal_title').html(title);
  $('#modal_body').html(html);
  $('#modal_save').html(confirmText ? confirmText : '저장하기');
  $('#modal_save').click(callback);
  $('#modal').modal();
}
function setRadioColor (obj) {
  var self = $(obj);
  self.closest('.form-area').find('.form-check').addClass('unchecked');
  self.closest('.form-check').removeClass('unchecked');
}
$(document).ready(function(){
})