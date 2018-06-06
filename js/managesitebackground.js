/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var pattern = "https://www.kompas.com/*";
//"https://scele.ui.ac.id/*"
var pattern = ["*://*.com/*", "*://*.org/*"];
//var pattern = location.protocol+'//'+location.hostname+'/*';
var redirectUrl = "http://10.118.230.65/managesite/restrict.php";
//var redirectUrl = "https://www.kumparan.com";
var whitelist = ['ui.ac.id'];



function checkdomain() {
    var currentUrl = location.hostname,
            parts = currentUrl.split('.'),
            domainName = parts.join('.');

    if ($.inArray(domainName, whitelist) == -1) { // if empty
        return true;
    } else {
      return false;  
    };   
};

function redirectAsync(requestDetails) {
    console.log("Redirecting async: " + requestDetails.url);
    return new Promise((resolve, reject) => {
        if (checkdomain) {
            window.setTimeout(() => {
                resolve({redirectUrl});
            }, 2000);
        }

    });
}
;

browser.webRequest.onBeforeRequest.addListener(
        redirectAsync,
        {urls: pattern},
        ["blocking"]
        );