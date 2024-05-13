// ==UserScript==
// @name         Ruangguru Unlocker
// @namespace    http://github.com/bramar2
// @version      1.0
// @description  Self-explanatory
// @author       bramar2
// @match        *://*.ruangguru.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license      GNU
// @grant        none
// @run-at       document-start
// ==/UserScript==
for(let i = 1; i <= 5; i++) {
// run 5times in 3s intervals for Question to load
    setTimeout(function() {
        for(let answerChakraStackRoot of document.querySelectorAll('.chakra-stack:has(> .paywall-lock)')) {
            answerChakraStackRoot.querySelectorAll('& > .chakra-stack:not(.lock-discussions):not(.paywall-lock)').forEach((z) => z.style.display = 'none');
            answerChakraStackRoot.querySelectorAll('& > .chakra-stack.lock-discussions').forEach((z) => {
                if(z.getAttribute('data-cleared-by-rg-unlocker')) return;
                z.setAttribute('data-cleared-by-rg-unlocker', '');
                let style = z.style;
                style.maxHeight = "initial";
                style.overflow = "initial";
                style.pointerEvents = "initial";
                style.maskImage = "initial";
                style.webkitMaskImage = "initial";
            });
        }
    }, i * 3000);
}
