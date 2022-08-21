window.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('btnOpenNewTab');
    link.addEventListener('click', function() {
        var newURL = "https://techtree.tistory.com/11";
        chrome.tabs.create({ url: newURL });
    });
});