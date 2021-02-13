/* 
    © 2021 KondaSoft
    https://www.kondasoft.com

    IMPORTANT: We recommend that you do not edit this file,
    as you might lose changes when you upgrade our theme.
    Instead, you may add your own custom scripts in the 
    "custom.js" file and work from there.
*/

/* 
    Navbar
    Fix sticky-top setting through JS
*/
var fixNavbarStickySetting = function () { 
    if (document.getElementById('navbar').classList.contains('navbar-sticky')) {
        document.getElementById('shopify-section-navbar')
            .classList.add('sticky-top');
    }
};

fixNavbarStickySetting();


/* 
    Mini Search
    Autofocus search input field on dropdown open
*/
document.getElementById('search-dropdown')
    .addEventListener('shown.bs.dropdown', function () {
        document.getElementById('minisearch-input').focus();
    });


/* 
    Newsletter
    Scroll to newsletter form after submit 
*/
if (window.location.href.indexOf('?customer_posted=true') > -1) {
    setTimeout(function() { 
        document.querySelector('.newsletter').scrollIntoView();
    }, 750);
}


/*
    Shopify Theme Editor
    Listen for changes and reinitialize corresponding functions
*/
document.addEventListener('shopify:section:load', function (event) {
    console.log(`Section id: ${event.detail.sectionId}`);
    
    if (event.detail.sectionId === 'navbar') {
        fixNavbarStickySetting();
    }
});