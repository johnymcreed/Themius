"use strict";

// Background for popup.html with saving settings
// for each prameter for script.js
// By Mcreed

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('applytheme').addEventListener('click', save);
document.getElementById('themeby').addEventListener('change', save);

SetName(); // Example

// Saves options to chrome.storage
function save() 
{
    var themeby = document.getElementById("themeby").value;
    var onOroff = document.getElementById('applytheme').checked;

    chrome.storage.sync.set(
        {
            onOroff: onOroff,
            themeby: themeby
        });
}

// Restores options from chrome.storage
function restore() 
{
    chrome.storage.sync.get(
        {
            onOroff: true,
            themeby: [1,2,3]
        }, 
        function(object) 
        {
            document.getElementById('applytheme').checked = object.onOroff;
            document.getElementById('themeby').value = object.themeby;
        });
}

// Below begins the POPUP.html dynamic changes via the elements from session.js
// these change depending on what is contained in it.
function SetName()
{
    chrome.storage.sync.get(
        {
            "first": [],
            "last": []
        },
        function (obj)
        {
            const text = document.createTextNode(obj.first + " " + obj.last);
            const pNode = document.getElementById("username");
            pNode.appendChild(text);
        });
}