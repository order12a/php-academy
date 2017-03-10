"use strict";

window.onload = function () {
    document.getElementById('run_search').onclick = function () {
        var key = document.getElementById('search').value;
        var query = new RegExp('(\\b' + key + '\\b)', 'gim');
        var text = document.getElementById('text').innerHTML;
        var newText = text.replace(/(<span>|<\/span>)/igm, '');
        document.getElementById('text').innerHTML = newText;
        var textWithHighlight = newText.replace(query, '<span>$1</span>');
        document.getElementById('text').innerHTML = textWithHighlight;
    };
};