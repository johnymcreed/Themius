// Automatically determine the users color theme
function DarkorLightAutomatic()
{
    var darkmode = document.body;
    var lightmode = document.body;

    if (window.matchMedia) 
    {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
        {
            darkmode.classList.toggle('app-dark')
        } 
        else 
        {
            lightmode.classList.toggle('app-light')
        }
    } 
    else 
    {
        darkmode.classList.toggle('app-dark')
    }
}

// Determine if someone is zooming past 100%
function IsUserZooming()
{
    window.addEventListener('resize', () => {
        const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
        
        if (browserZoomLevel > 200 || browserZoomLevel < 200)
            return true;
    });
}

// Get the current year
function Currentyear()
{
    document.getElementById("year").innerHTML = new Date().getFullYear();
}