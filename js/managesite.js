/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var string = document.readyState;
var domain = window.location.host;
var whitelist = ['ui.ac.id','kompas.com'];
////document.body.style.border = "50px solid red";
//
//
//
var currentUrl = location.hostname;
var parts = currentUrl.split('.');  
var subdomainName = parts.shift();
var domainName = parts.join('.');

switch (string) {
    case "loading":
        // The document is still loading.
        
        break;
    case "interactive":
        // The document has finished loading. We can now access the DOM elements.
        // But sub-resources such as images, stylesheets and frames are still loading.
//        document.body.textContent = "";
//        var header = document.createElement('h1');
//        header.textContent = "This page has been eaten";
//        document.body.appendChild(header);
        
        if($.inArray(domainName, whitelist) == -1){
            alert('not found');
        } else {
            alert('"'+location.protocol+'//'+location.hostname+'/*'+'"');
        };
        
        break;
    case "complete":
        
        break;
}