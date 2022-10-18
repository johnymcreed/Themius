// Get the current year
function Currentyear()
{
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// back to top function
$(document).ready(function()
{
    $('#to-top').fadeOut(); // Start
    
    $(document.getElementsByTagName('content')).scroll(function () 
        {
            if ($(this).scrollTop() > 50) 
            {
                $('#to-top').fadeIn();
            } 
            else if ($(this).scrollTop() < 50)
            {
                $('#to-top').fadeOut();
            }
            else
            {
                $('#to-top').fadeOut();
            }
        }
    );
    
    $('#to-top').click(function () 
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

// function for dark or light mode
const setTheme = () => 
{
  const currentTheme = localStorage.getItem('theme');
  
  // Default to light theme
  if (!currentTheme) 
  {
    localStorage.setItem('theme', 'app-light');
    document.body.dataset.theme = 'app-light';
    return;
  }
  
  document.body.dataset.theme = currentTheme;
}

// Set theme on page load
setTheme();

const transition = () => {
  document.body.classList.add('transition');
  
  setTimeout(() => {
    document.body.classList.remove('transition');
  }, 1000)
}

// Handle theme toggle
const themeToggleBtn = document.querySelector('#theme-toggle');

themeToggleBtn.addEventListener('click', () => {  
  const { theme } = document.body.dataset;
  const themeTo = theme === 'app-light' ? 'app-dark' : 'app-light';
  const themeLabel = `Activate ${theme} mode`;
  
  document.body.dataset.theme = themeTo;
  localStorage.setItem('theme', themeTo);
  
  var e = document.getElementById("theme-toggle"); //Get the element
  
  if (themeTo == "app-dark")
    e.setAttribute("tooltip", "Switch to light mode");
  else
    e.setAttribute("tooltip", "Switch to dark mode");

  transition();
});

// Auto go to achors
$(document).ready(function() {
  $("a.header-link").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
});

// Get code and add it to text box
function SendRawContent()
{
  var storedText;
  fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themius.v3.css')
    .then(function(response) 
    {
      response.text().then(function(text) {
        storedText = text;
        Apply();
      });
    });

  function Apply() 
  {
    document.getElementById('log').textContent = storedText;
  }

  // Function to copy text from an id box
  function copyText() 
  {
    var copyText = document.getElementById("log");
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
  }
}
