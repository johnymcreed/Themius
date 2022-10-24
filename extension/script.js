// Create Style
function create()
{
    var style = document.createElement('style');
    style.id = 'themius-css';
    document.body.appendChild(style);
}

// Add Style
function add()
{
    fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themius.v3.css')
     .then(response => response.text())
     .then(text => $('#themius-css').html(text))
}

try 
{
    create();
    add();
} 
catch (error)
{
    // Push out and ignore
}
