"use strict";

var Redraw = (function(e) {
    if (e.checked) {
        document.getElementById('news-pro').classList.add('hide');
        document.getElementById('news-con').classList.remove('hide');
    }
    else {
        document.getElementById('news-pro').classList.remove('hide');
        document.getElementById('news-con').classList.add('hide');
    }
});


