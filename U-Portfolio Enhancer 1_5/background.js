chrome.runtime.onInstalled.addListener(function (object) {
    let externalUrl = "https://techtree.tistory.com/11";
    let internalUrl = chrome.runtime.getURL("views/onboarding.html");

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: externalUrl }, function (tab) {
            console.log("New tab launched with http://yoursite.com/");
        });
    }

});

var e = "edit";
var c = "create";
var i = "u-folio";

chrome.tabs.onActivated.addListener( function(activeInfo){
    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
	q = y.indexOf(e);
	r = y.indexOf(c);
	s = y.indexOf(i)

	if(s != -1) {
		if(q != -1 || r != -1) {
			chrome.tabs.executeScript({
       				file: '/js/inject1.js'
    			});
		};
	};
	});
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
	z = change.url;
	t = z.indexOf(e);
	u = z.indexOf(c);
	v = z.indexOf(i);
	if(v != -1) {
        	if(t != -1 || u != -1) {
			chrome.tabs.executeScript({
       				file: '/js/inject.js'
	    		});
		};
	};
	};           
});
