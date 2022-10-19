// File creates shortcuts to elements for javascript
// Owner: Mcreed

// Load all required to load functions
function init()
{
    AppTheme();
    fToolTip();
    fApplyElement('ID', 'year', new Date().getFullYear());
    fRetrieveData('log', 'https://raw.githubusercontent.com/johnymcreed/Themius/Default/themius.v3.css');
    fCopyallData('#copyall', 'log');
    fBacktoTop();
}

init();

// Prints a colored status 
function fPrintConsole (Dialog, Color, Text)
{
  if (Color == "")
    Color = "white"; // Default

  console.log("%c" + Dialog + "", "color: " + Color + "; font-family: Arial; font-size: 11px; padding: 3px; background: black; border: 1px solid black; border-radius: 4px;", Text);
}

// Applys something to the .InnerHTML of the Element
function fApplyElement (Type, Element, Content)
{
    const Clt = Type;

    if (Element == '')
    {
        fPrintConsole('Warn', 'orange', 'Cannot function if the Element is not given.')
        return
    }

    if (Clt == 'ID')
        document.getElementById(Element).innerHTML = Content;
    else if (Clt == 'CLASS')
        document.getElementsByClassName(Element).innerHTML = Content;
    else if (Clt == 'TAG')
        document.getElementsByTagName(Element).innerHTML = Content;
    else if (Clt == 'NAME')
        document.getElementsByName(Element).innerHTML = Content;
    else
    {
        fPrintConsole('Error', 'red', 'Cannot function if no Element type is given.')
        return
    }
}

// Function to determine the apps theme and change elements with it
// This function is huge as it replaces various elements
function AppTheme()
{
    const currentTheme = localStorage.getItem('theme');
    const Toggle = document.querySelector('#theme-toggle');

    // Theme Change
    var apptheme = document.querySelector(':root');

    // tooltip
    var tool = document.getElementById("theme-toggle")
    
    document.body.dataset.theme = currentTheme;

    // If localstorage does not contain 'theme' then make it
    // and default the theme to light
    if (!currentTheme) 
    {
        localStorage.setItem('theme', 'light');
        document.body.dataset.theme = 'light';
        return;
    }

    // Click listener for the button
    Toggle.addEventListener('click', () => 
    {  
        const { theme } = document.body.dataset;
        const themeTo = theme === 'light' ? 'dark' : 'light';
    
        document.body.dataset.theme = themeTo; // Applys theme (data-theme="")
        localStorage.setItem('theme', themeTo);
        
        if (document.body.dataset.theme == 'light')
        {
            apptheme.style.setProperty('--app-background', 'white');
            apptheme.style.setProperty('--foreground-text', 'black');
            
            $("#theme-toggle .tooltip").html("Switch to dark mode");
            $('#theme-toggle').css('color', 'white');
        }
        
        if (document.body.dataset.theme == 'dark')
        {
            apptheme.style.setProperty('--app-background', 'rgb(67, 60, 70)');
            apptheme.style.setProperty('--foreground-text', 'white');
            
            $("#theme-toggle .tooltip").html("Switch to light mode");
            $('#theme-toggle').css('color', 'rgb(67, 60, 70)');
        }

        // Transition between changes
        document.body.classList.add('transition');
        setTimeout(() => 
        {
            document.body.classList.remove('transition');
        }, 
        1000)
    });

    // Listen for change after the theme as been used
    if (document.body.dataset.theme == 'light')
    {
        apptheme.style.setProperty('--app-background', 'white');
        apptheme.style.setProperty('--foreground-text', 'black');

        // Tooltip Change
        tool.setAttribute("tip", "Switch to dark mode")

        // Set Icon Color
        $('#theme-toggle').css('color', 'white');
    }
    if (document.body.dataset.theme == 'dark')
    {
        apptheme.style.setProperty('--app-background', 'rgb(67, 60, 70)');
        apptheme.style.setProperty('--foreground-text', 'white');

        // Tooltip change
        tool.setAttribute("tip", "Switch to light mode")
        
        // Set Icon Color
        $('#theme-toggle').css('color', 'rgb(77, 77, 77)');
    }
}

// Primarly Loads tooltip functions without the need for long css code
function fToolTip ()
{
    Array.from(document.querySelectorAll('[tip]')).forEach(el => 
    {
        let tip = document.createElement('div');

        tip.classList.add('tooltip');
        tip.innerText = el.getAttribute('tip');

        tip.style.transform =
            'translate(' +
            (el.hasAttribute('tip-left') ? 'calc(-100%)' : '-45%') + ', ' + // Center
            (el.hasAttribute('tip-bottom') ? 'calc(-100%)' : '80%') +
            ')';

        el.appendChild(tip);
        
        el.onmousemove = e => 
        {
            tip.style.left = e.clientX + 'px'
            tip.style.top = e.clientY + 'px';
        };
    });
}

// Function for "Back to top" button
function fBacktoTop()
{
    $(document).ready(function()
    {
        $('#to-top').fadeOut(); // Start
        
        $(document.getElementsByTagName('content')).scroll(function () 
            {
                if ($(this).scrollTop() > 50) 
                {
                    $('#to-top').fadeIn(); // Start
                } 
                else if ($(this).scrollTop() < 50)
                {
                    $('#to-top').fadeOut(); // Stop
                }
                else
                {
                    $('#to-top').fadeOut(); // Stop
                }
            }
        );
        
        $('#to-top').click(function () // Scroll Animation
            {
                $('content').animate(
                    {
                        scrollTop: 0
                    }, 
                400);
                return false;
            }
        );
    });
}

// Gets the data of a website or a file
function fRetrieveData (Element, Link)
{
    var stored;

    fetch(Link).then(function(response) 
    {
        response.text().then(function(text) 
        {
          stored = text;
          
          if (document.getElementById(Element) == null)
          {
            fPrintConsole('Error', 'red', 'The element "' + Element + '" does not exist on this page')
            return;
          }

          document.getElementById(Element).textContent = stored;          
          fPrintConsole('Success', 'green', 'Retrieved "' + Link + '" and feteched all data from it')
        });
    });
}

// Copy all data from an element
function fCopyallData (Button, Element)
{
    const btn = document.querySelector(Button);

    if (btn == null)
      return;

    // Button Pressed Listener
    btn.addEventListener('click', () => 
    {  
        var vrText = document.getElementById(Element);

        vrText.select();
        vrText.setSelectionRange(0, 99999);
        
        document.execCommand("copy");

        fPrintConsole('Success', 'green', 'Copied text from CopyAllData(func ...)')
    });
}