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
    });

}(jQuery));
