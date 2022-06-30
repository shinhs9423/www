(function ($) {
    'use strict';

    /**
     * All of the code for your admin-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * $(function() {
     *
     * });
     *
     * When the window is loaded:
     *
     * $( window ).load(function() {
     *
     * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */

    $(document).ready(function () {

        var checkCountdownIsExists = $(document).find('#ays-sccp-maker-countdown-main-container');
        if ( checkCountdownIsExists.length > 0 ) {
            var second  = 1000,
                minute  = second * 60,
                hour    = minute * 60,
                day     = hour * 24;
    
            var countdownEndTime = "JAN 1, 2022 23:59:59",
            countDown = new Date(countdownEndTime).getTime(),
            x = setInterval(function() {
    
                var now = new Date().getTime(),
                    distance = countDown - now;
                
                var countDownDays    = document.getElementById("ays-sccp-countdown-days");
                var countDownHours   = document.getElementById("ays-sccp-countdown-hours");
                var countDownMinutes = document.getElementById("ays-sccp-countdown-minutes");
                var countDownSeconds = document.getElementById("ays-sccp-countdown-seconds");

                if(countDownDays !== null || countDownHours !== null || countDownMinutes !== null || countDownSeconds !== null){
                    countDownDays.innerText = Math.floor(distance / (day)),
                    countDownHours.innerText = Math.floor((distance % (day)) / (hour)),
                    countDownMinutes.innerText = Math.floor((distance % (hour)) / (minute)),
                    countDownSeconds.innerText = Math.floor((distance % (minute)) / second);
                }
                
    
                //do something later when date is reached
                if (distance < 0) {
                    var headline  = document.getElementById("ays-sccp-countdown-headline"),
                        countdown = document.getElementById("ays-sccp-countdown"),
                        content   = document.getElementById("ays-sccp-countdown-content");
    
                    // headline.innerText = "Sale is over!";
                    countdown.style.display = "none";
                    content.style.display = "block";
    
                    clearInterval(x);
                }
            }, 1000);
        }

    });

})(jQuery);