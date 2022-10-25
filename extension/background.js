// Backends to extension
// By mcreed

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('applytheme').addEventListener('click', save);
document.getElementById('themeby').addEventListener('change', save);

// Saves options to chrome.storage
function save () 
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
function restore () 
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