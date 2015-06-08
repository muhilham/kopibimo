$(document).ready(function () {
  // Function to run after section changed
  // All animation goes here
  var afterLoadHandler = {
    'home': function () {
    },

    'journey': function () {
      $('.anim-s2-1').fadeIn();
      $('.anim-s2-2').delay(600).fadeIn(100).addClass('fadeInLeft');
    },

    'heritage': function () {
      $('.anim-s3-1').fadeIn(100).addClass('fadeInRight');
      $('.anim-s3-2').delay(800).fadeIn(100).addClass('fadeInDown');

      $('.anim-s3-6').delay(1800).fadeIn(100).addClass('fadeInLeft');
      $('.anim-s3-7').delay(2800).css({display: 'inline-block', width:0}).animate({width:100}, 700);
      $('.anim-s3-8').delay(3600).fadeIn(100).addClass('fadeInDown');
    },

    'islands': function () {
      $('.anim-s4-1').fadeIn();
    },

    'coffee': function () {
      $('.anim-s5-1').fadeIn(100).addClass('fadeInLeft');
      $('.anim-s5-2').delay(800).css({display: 'inline-block', width:0}).animate({width:100}, 700);
      $('.anim-s5-3').delay(1800).fadeIn(100).addClass('fadeInDown');
      $('.anim-s5-4').delay(2800).fadeIn();
    },

    'brewing': function () {
    },

    'artisan': function () {
      $('.anim-s7-1').fadeIn();
    },

    'subscribe': function () {
      $('.anim-s8-1').fadeIn();
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
