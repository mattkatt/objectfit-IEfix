// Fix for object-fit not working properly on IE.

!function () {
// Step 1: Attach load event to all images
// NB: This ensures the code allows pre-processing such as lazyloading to happen first.
    function objectCoverFix() {
        var i, imgArray = document.querySelectorAll('img');

        for (i = 0; i < imgArray.length; i++) {
            imgArray[i].addEventListener('load', checkElement, false)
        }
    }

// Step 2: Check if image has object-fit
    function checkElement() {
        var fontFamily = window.getComputedStyle(this).getPropertyValue('font-family'),
            regEx = RegExp(/object-fit/g);

        if (regEx.test(fontFamily)) {
            var array = fontFamily.replace(/,/g, ':').replace(/"/g, '').split(':');
            fixObjectFit(this, array[1], array[3])
        }
    }

// Step 3: Apply Fix
    function fixObjectFit(img, fit, pos) {
        var replacementDiv = document.createElement("div"),
            divClass = img.getAttribute('class');

        replacementDiv.style.backgroundImage = 'url(' + img.src + ')';
        replacementDiv.style.backgroundSize = fit;
        replacementDiv.style.backgroundPosition = pos || 'center';
        replacementDiv.setAttribute('class', divClass);

        img.insertAdjacentElement('afterend', replacementDiv);
        img.parentNode.removeChild(img);
    }

// Run objectCoverFix() if <=IE11
    var ua = window.navigator.userAgent;
    if (ua.indexOf("MSIE ") > 0 || ua.indexOf('Trident/') > 0) {
        objectCoverFix();
    }
}();