// ==UserScript==
// @name         Override Shopify Log In Button grey out
// @namespace    https://accounts.shopify.com/
// @version      2023-05-21
// @description  Shopify's login page seems to be very flakey, I always have trouble with the login buttons getting stuck in a disabled state. This script removes the disabled state from the button.
// @author       NebularNerd
// @downloadURL  https://raw.githubusercontent.com/NebularNerd/shopify-login-fixer/main/shopify-login-fixer.js
// @updateURL    https://raw.githubusercontent.com/NebularNerd/shopify-login-fixer/main/shopify-login-fixer.js
// @match        https://accounts.shopify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myshopify.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function fixit() {
        document.querySelector(".ui-button--primary").removeAttribute("disabled");
        console.log('Button Fix Applied 😎');
    }

    // Check URL of page, derived from https://stackoverflow.com/a/35038669
    // store url on load
    let currentPage = location.href;
    console.log("Current Page:", currentPage);
    // Brute force fix to prevent it greying out again
    setInterval(function(){fixit();}, 400);

    // Initial fix load, we have to kick off the action if the page matches.
    function letsdoit(){
        if (currentPage.match(/accounts\.shopify\.com\/lookup/) || currentPage.match(/accounts\.shopify\.com\/login/) ) {

            fixit();
        }
    }

    letsdoit();
})();
