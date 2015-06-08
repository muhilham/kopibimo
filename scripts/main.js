$(document).ready(function () {
  // Function to run after section changed
  // All animation goes here
  var afterLoadHandler = {
    'home': function () {
      $('#navigation, #mapIcon').fadeOut();
    },

    'journey': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'heritage': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'islands': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'coffee': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'brewing': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'artisan': function () {
      $('#navigation, #mapIcon').fadeIn();
    },

    'subscribe': function () {
      $('#navigation, #mapIcon').fadeOut();
    },
  };

  // Initiate fullpage js
  $('#content').fullpage({
    anchors: ['home', 'journey', 'heritage', 'islands', 'coffee', 'brewing', 'artisan', 'subscribe'],

    afterLoad: function (anchorLink, index) {
      afterLoadHandler[anchorLink]();
    }
  });

});
