$(document).ready(function () {
  // Function to run after section changed
  // All animation goes here
  var afterLoadHandler = {
    'home': function () {
      $('.anim-s1-bg').fadeIn();
    },

    'journey': function () {
      $('.anim-s2-bg').fadeIn();

      $('.anim-s2-1').delay(600).fadeIn();
      $('.anim-s2-2').delay(1200).fadeIn(100).addClass('fadeInLeft');
    },

    'heritage': function () {
      $('.anim-s3-bg').fadeIn();

      $('.anim-s3-1').delay(600).fadeIn(100).addClass('fadeInRight');
      $('.anim-s3-2').delay(1400).fadeIn(100).addClass('fadeInDown');

      $('.anim-s3-6').delay(2400).fadeIn(100).addClass('fadeInLeft');
      $('.anim-s3-7').delay(3400).css({display: 'inline-block', width:0}).animate({width:100}, 700);
      $('.anim-s3-8').delay(4200).fadeIn(100).addClass('fadeInDown');
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
      $('.anim-s6-bg').fadeIn();
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
      if (nextIndex === 1 || nextIndex === 8) {
        $('#navigation, #mapIcon').fadeOut();
      }
    }
  });

});
