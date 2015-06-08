$(document).ready(function () {
  // Function to run after section changed
  // All animation goes here
  var afterLoadHandler = {
    'section1': function () {
      $('#navigation, #mapIcon').fadeOut();
    },

    'section2': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'section3': function () {
    },

    'section4': function () {
    },

    'section5': function () {
    },

    'section6': function () {
    },

    'section7': function () {
    },

    'section8': function () {
    },
  };

  // Initiate fullpage js
  $('#content').fullpage({
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],

    afterLoad: function (anchorLink, index) {
      afterLoadHandler[anchorLink]();
    }
  });

});
