// Extension script
// By mcreed
"use strict";

function set(arg){chrome.storage.sync.set(arg)}
function get(arg, arr){chrome.storage.sync.get(arg, arr)}
function fetches(link, id){fetch(link).then(response => response.text()).then(text => $(id).html(text))}

// Initalizes extension
function init ()
{
    console.log("Themius injected into echo", );
    get(
        {
            onOroff: true,
            kittens: true
        }, 
        function (object) 
        {
            if (object.onOroff == true)
            {
                create();
                add();
            }
        });
}

// Create Style
function create ()
{
    let style = document.createElement('style');
    style.id = 'themius-css';
    style.type = 'text/css';
    style.classList = "themius";
    document.querySelector('html').appendChild(style);
}

// Add Style
function add ()
{
    fetches('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v4.css', 
    '#themius-css');
}

if (document.querySelector('html').hasAttribute('buzz-version'))
{
    init();
}