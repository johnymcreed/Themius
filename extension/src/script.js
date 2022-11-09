// Extension script
// By mcreed
"use strict";

function set(arg){chrome.storage.sync.set(arg)}
function get(arg, arr){chrome.storage.sync.get(arg, arr)}
function fetches(link, id){fetch(link).then(response => response.text()).then(text => $(id).html(text))}

// Initalizes extension
function init ()
{
    console.log("Themius v1 Extension injected into echo", );
    get(
        {
            onOroff: true
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
    var style = document.createElement('style');
    style.id = 'themius-css';
    document.querySelector('body').appendChild(style);
}

// Add Style
function add ()
{
    get(
        {
            themeby: [1,2,3]
        }, 
        function (object) 
        {   
            if (object.themeby == 1)
            {
                console.log('Theme [Auto] was injected')
                fetches('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v3.auto.css', 
                        '#themius-css')
            }
            else if (object.themeby == 2)
            {
                console.log('Theme [Dark] was injected')
                fetches('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v3.dark.css', 
                        '#themius-css')
            }
            else if (object.themeby == 3)
            {
                console.log('Theme [Light] was injected')
                fetches('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v3.light.css', 
                        '#themius-css')
            }  
        });
}

// Helps detect if echo was opened with a special attribute idenitfer
if (document.querySelector('html').hasAttribute('buzz-version'))
{
    init();
}