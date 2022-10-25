// Create Style
function create()
{
    var style = document.createElement('style');
    style.id = 'themius-css';

    // Specialize the element so we don't affect the Extension page
    document.querySelector('body').querySelector('app-root').appendChild(style);
}

// Add Style
function add()
{
    fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themius.v3.css')
     .then(response => response.text())
     .then(text => $('#themius-css').html(text))
}

// Saves options to chrome.storage
function save_options() 
{
  var onOroff = document.getElementById('applytheme').checked;
  chrome.storage.sync.set(
    {
        onOroff: onOroff
    });
}

// Restores options from chrome.storage
function restore_options() 
{
  chrome.storage.sync.get(
    {
        onOroff: true
    }, 
    function(items) 
    {
        document.getElementById('applytheme').checked = items.onOroff;
    });
}

try 
{
    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('applytheme').addEventListener('click', save_options);
}
catch (error)
{
    // Push the error out
}

chrome.storage.sync.get({onOroff: true}, function (obj) 
{
    if (obj.onOroff == true)
    {
        try 
        {
            create();
            add();
        } 
        catch (error)
        {
            // ignore
        }
    }
});