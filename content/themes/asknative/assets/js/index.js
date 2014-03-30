/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        /**
         * Add parallax effect for blog cover photo
         */

        $(window).stellar({
          horizontalScrolling: false,
          parallaxElements: true
        });

        /**
         * Set first image as cover photo for post
         */

        //// var mainImage = $('img[alt="main-image"]');
        var mainImage = $('.post-content').find('img').first();

        if ( mainImage.length > 0){
          var mainImageSource = mainImage.attr('src');
          $('.post-header').css('background-image','url('+mainImageSource+')');
          // mainImage.remove();
        }

    });

}(jQuery));
