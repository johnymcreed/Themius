// Extension script
// By mcreed

// Initalizes extension
function init ()
{
    console.log("Themius v1 Extension injected into echo", );
        
    chrome.storage.sync.get(
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
    chrome.storage.sync.get(
        {
            themeby: [1,2,3]
        }, 
        function (object) 
        {   
            if (object.themeby == 1)
            {
                console.log('Theme [Auto] was injected')
                fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v3.auto.css')
                 .then(response => response.text())
                 .then(text => $('#themius-css').html(text))
            }
            else if (object.themeby == 2)
            {
                console.log('Theme [Dark] was injected')
                fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v3.dark.css')
                 .then(response => response.text())
                 .then(text => $('#themius-css').html(text))
            }
            else if (object.themeby == 3)
            {
                console.log('Theme [Light] was injected')
                fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v3.light.css')
                 .then(response => response.text())
                 .then(text => $('#themius-css').html(text))
            }  
        });
}

// Helps detect if echo was opened with a special attribute idenitfer
if (document.querySelector('html').hasAttribute('buzz-version'))
{
    init();
    console.log(
        "Buzz Version: " + document.querySelector('html').getAttribute('buzz-version') +
        "\nFirst Load: " + window.location.href +
        "\nPasted: " + document.getElementById('isPasted')
    );
}