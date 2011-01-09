// ==UserScript==
// @name        AutoTransferMixiVoice2Twitter
// @namespace   http://ozeppi.com
// @description if you have allowed transfer to Twitter in "mixi Voice",
//              automatically transfer tweet to Twitter.
// @include     http://mixi.jp/
// @include     http://mixi.jp/home.pl*
// @include     http://mixi.jp/recent_voice.pl*
// @include     http://mixi.jp/list_voice.pl*
// ==/UserScript==
window.addEventListener('DOMContentLoaded', function() {
    var postTwitterTrigger = document.getElementById('postTwitter');
    if(postTwitterTrigger) {
        postTwitterTrigger.checked = true;
    }
}, false);
