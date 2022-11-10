"use strict";

// Background for popup.html with saving settings
// for each prameter for script.js
// By Mcreed

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('applytheme').addEventListener('click', save);

// Saves options to chrome.storage
function save() 
{
    var onOroff = document.getElementById('applytheme').checked;
    chrome.storage.sync.set(
        {
            onOroff: onOroff,
            welcome: true // Display once
        });
}

// Restores options from chrome.storage
function restore() 
{
    chrome.storage.sync.get(
        {
            onOroff: true,
        }, 
        function(object) 
        {
            document.getElementById('applytheme').checked = object.onOroff;
        });
}