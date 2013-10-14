(function($) {
    $.fn.slideToCAPTCHA = function(options) {
        options = $.extend({
            handle: '.handle',
            cursor: 'move',
            direction: 'x', //x or y
            customValidation: false,
            completedText: 'You\'re human!'
        }, options);

        var $handle = this.find(options.handle),
            $slide = this,
            handleOWidth,
            xPos,
            yPos,
            slideXPos,
            slideWidth,
            slideOWidth,
            $activeHandle,
            $formEl = $slide.parents('form');

        startSlider();

        $handle.css('cursor', options.cursor)
            .on('mousedown', function(e){ slideOn(e); });

        function startSlider() {
            $formEl.attr('data-valid', 'false');

            if(options.customValidation === false) {
                $formEl.attr('onsubmit', "return $(this).attr('data-valid') === 'true';");
            }

            $slide.addClass('slide-to-captcha');
            $handle.addClass('slide-to-captcha-handle');
            
            handleOWidth = $handle.outerWidth();
            slideWidth = $slide.width();
            slideOWidth = $slide.outerWidth();
        }

        function slideOn(e) {
            $activeHandle = $handle.addClass('active-handle');

            xPos = $handle.offset().left + handleOWidth - e.pageX;

            //if(options.direction === 'y') {
            //    yPos = $handle.offset().top + handleHeight = e.pageY;
            //}
            slideXPos = $slide.offset().left + ((slideOWidth - slideWidth) / 2);

            $activeHandle.on('mousemove', function(e){ slideMove(e); })
                .on('mouseup', function(e){ slideOff(); });

            e.preventDefault();
        }

        function slideMove(e) {
            var handleXPos = e.pageX + xPos - handleOWidth;
            if(handleXPos > slideXPos && handleXPos < slideXPos + slideWidth - handleOWidth) {
                if ($handle.hasClass('active-handle')) {
                    $('.active-handle').offset({left: handleXPos});
                }
            } else {
                if(handleXPos <= slideXPos === false) {
                    sliderComplete();
                }
                $activeHandle.mouseup();
            }
        }

        function sliderComplete() {
            $activeHandle.offset({left: slideXPos + slideWidth - handleOWidth});
            $activeHandle.off();
            slideOff();
            $formEl.attr('data-valid', 'true');
            $slide.addClass('valid');
            $('.slide-to-captcha').attr('data-content', options.completedText);


        }

        function slideOff() {
            $activeHandle.removeClass('active-handle');
        }
    }
})(jQuery);