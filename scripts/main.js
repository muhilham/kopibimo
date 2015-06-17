$(document).ready(function () {
  // Function to run after section changed
  // All animation goes here
  var afterLoadHandler = {
    'home': function () {
      $('.anim-s1-bg').animate({opacity:1}, 700);
      $('.anim-s1-bg').get(0).play();
    },

    'journey': function () {
      $('.anim-s2-bg').animate({opacity:1}, 700);
      $('.anim-s2-bg').get(0).play();

      $('.anim-s2-1').delay(600).fadeIn();
      $('.anim-s2-2').delay(1200).fadeIn(100).addClass('fadeInLeft');
      $('.anim-s2-3').delay(1900).fadeIn(600);
    },

    'heritage': function () {
      $('.anim-s3-bg').fadeIn();

      $('.anim-s3-1').delay(600).fadeIn(100).addClass('fadeInRight');
      $('.anim-s3-2').delay(1400).fadeIn(100).addClass('fadeInDown');
      $('.anim-s3-3').delay(2200).fadeIn(600);
      $('.anim-s3-4').delay(3200).fadeIn(100).animate({height:180}, 1200);
      $('.anim-s3-5').delay(4800).fadeIn(600);
      $('.anim-s3-6').delay(5400).fadeIn(100).addClass('fadeInLeft');
      $('.anim-s3-7').delay(6400).css({display: 'inline-block', width:0}).animate({width:100}, 700);
      $('.anim-s3-8').delay(7600).fadeIn(100).addClass('fadeInDown');
    },

    'islands': function () {
      $('.anim-s4-bg').fadeIn();

      $('.anim-s4-1').delay(600).fadeIn();
    },

    'coffee': function () {
      $('.anim-s5-bg').fadeIn();

      $('.anim-s5-1').delay(600).fadeIn(100).addClass('fadeInLeft');
      $('.anim-s5-2').delay(1400).css({display: 'inline-block', width:0}).animate({width:100}, 700);
      $('.anim-s5-3').delay(2400).fadeIn(100).addClass('fadeInDown');
      $('.anim-s5-4').delay(3200).fadeIn();
    },

    'brewing': function () {
      $('.anim-s6-1').fadeIn(800);
      $('.anim-s6-2').delay(900).animate({opacity:1});
      $('.anim-s6-3').delay(1200).animate({opacity:1});
    },

    'artisan': function () {
      $('.anim-s7-bg').fadeIn();

      $('.anim-s7-1').delay(600).fadeIn();
    },

    'subscribe': function () {
      $('.anim-s8-bg').fadeIn();

      $('.anim-s8-1').delay(600).fadeIn();
    },
  };

  // Initiate fullpage js
  $('#content').fullpage({
    anchors: ['home', 'journey', 'heritage', 'islands', 'coffee', 'brewing', 'artisan', 'subscribe'],

    afterLoad: function (anchorLink, index) {
      if (index !== 1 && index !== 8) {
        $('#navigation, #mapIcon').fadeIn();
      }

      afterLoadHandler[anchorLink]();
    },

    onLeave: function (index, nextIndex, direction) {
      $('.animated').fadeOut();
      $('video').animate({opacity: 0});
      if (nextIndex === 1 || nextIndex === 8) {
        $('#navigation, #mapIcon').fadeOut();
      }
    }
  });

  // Hide placeholder
  $('input').on('keyup', function (e) {
    if (e.keyCode === 13) {
      return;
    }

    if (!$(this).val()) {
      $('#inputPlaceholder').show();
    } else {
      $('#inputPlaceholder').hide();
    }
  });

  // Section 6: show text when hover video
  $('.js-s6-hover').on('mouseover', function (e) {
    var _this = $(this);
    var video = _this.find('video').get(0);
    var target = $(_this.attr('data-target'));

    video.play();
    _this.addClass('overlay');
    target.fadeIn();
  });

  $('.js-s6-hover').on('mouseleave', function (e) {
    var _this = $(this);
    var video = _this.find('video').get(0);
    var target = $(_this.attr('data-target'));

    video.pause();
    _this.removeClass('overlay');
    target.fadeOut();
  });

});
