// Dark to light function
function dtl()
{
  var darkmode = document.body;
  darkmode.classList.toggle('bg-light-alt')
}

// Get date function
function Yeartime()
{
  document.getElementById("year").innerHTML = new Date().getFullYear();
}

// back to top function
$(document).ready(function()
{
  $('#back-to-top').fadeOut(); // Start
  
	$(window).scroll(function () 
    {
			if ($(this).scrollTop() > 50) 
      {
				$('#back-to-top').fadeIn();
			} 
      else if ($(this).scrollTop() < 50)
      {
				$('#back-to-top').fadeOut();
			}
      else
      {
        $('#back-to-top').fadeOut();
      }
		}
  );
    
	// scroll body to 0px on click
	$('#back-to-top').click(function () 
    {
      $('body,html').animate(
        {
          scrollTop: 0
        }, 
      400);
      return false;
    }
  );
});

// Get code and add it to text box
var storedText;
fetch('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themev3.css')
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

function copyText() 
{
  var copyText = document.getElementById("log");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  
  document.execCommand("copy");
}