// File creates shortcuts to elements for javascript

// Prints a colored status 
function fPrintConsole(Dialog, Color, Text)
{
  if (Color == "")
    Color = "white"; // Default

  console.log("%c" + Dialog + "", "color: " + Color + "; font-family: Arial; font-size: 13px; padding: 3px; background: black; border: 1px solid black; border-radius: 4px;", Text);
}

// Applys something to the .InnerHTML of the ID
function fApplyElement(Type, Element, Content)
{
    // TODO - document.getElementById(Element).innerHTML = Content;
}
