Slide to Captcha
================
###A unique way for your users to prove they're human!###

CAPTCHAs suck. Math problems are exclusionary. Color-based CAPTCHAs stop color-blind people from using your site. 

[A REALLY basic example](http://joshbroton.com/projects/slide-to-captcha)

Slide to Captcha is a new way to look at CAPTCHA. A user simply slides to unlock the submit functionality of your form (an interaction metaphor they are used to already).

##Slide to CAPTCHA Basics##

####Include the CSS####
    <link href="path/to/slide-to-captcha.css" rel="stylesheet" />
    
####Including the Javascript####
    <script src="path/to/slide-to-captcha.min.js" type="text/javascript"></script>
    
####Calling Slide to CAPTCHA####
    $('#identifier-of-slidewrapper').slideToCAPTCHA();
    
####Options####
    Option              Default
    -----------------------------------------
    handle:             ".handle"  // Class of handle inside #identifier-of-slidewrapper
    cursor:             "move"     // The cursor your mouse will use when hovering over handle
    direction:          "x"        // Can be x or y. Not done with y slide yet.
    customValidation:   false      // If you write your own validation, choose true

###To Do###
* Test in older browsers
* More options
* Vertical slide functionality

###Done###
* Basic horizontal functionality
* Tested in Chrome
