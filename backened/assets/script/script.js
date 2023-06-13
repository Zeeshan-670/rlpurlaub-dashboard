'use strict';

// Mobile Sidebar
$(document).ready(function () {
  $('[data-trigger]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id = $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass('show');
    $('body').toggleClass('offcanvas-active');
    $('.screen-overlay').toggleClass('show');
  });

  // Close menu when pressing ESC
  $(document).on('keydown', function (event) {
    if (event.keyCode === 27) {
      $('.mobile-offcanvas').removeClass('show');
      $('body').removeClass('overlay-active');
    }
  });

  $('.btn-close, .screen-overlay').click(function (e) {
    $('.screen-overlay').removeClass('show');
    $('.mobile-offcanvas').removeClass('show');
    $('body').removeClass('offcanvas-active');
  });
}); // jquery end

// Dropdown
$(document).ready(function () {
  $('.navbar .dropdown').hover(
    function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    },
    function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
    }
  );
});

// Chosen Js
$(document).ready(function () {
  $('.chosen-select').chosen({
    enable_search: true,
  });
});
