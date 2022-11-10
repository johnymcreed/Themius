// Extension script
// By mcreed
"use strict";

function set(arg){chrome.storage.sync.set(arg)}
function get(arg, arr){chrome.storage.sync.get(arg, arr)}
function fetches(link, id){fetch(link).then(response => response.text()).then(text => $(id).html(text))}

// Create Style
function create ()
{
    let style = document.createElement('style');
    style.id = 'themius-css';
    style.type = 'text/css';
    style.classList = "themius";
    document.querySelector('html').appendChild(style);
}

// Add Style
function add ()
{
    fetches('https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v4.css', 
    '#themius-css');
}

function remove ()
{
    const element = document.getElementById('themius-css');
    element.remove(); 
}

// adds the (one time only welcome popup)
function add_welcome ()
{
    var welcome = document.createElement("div"); 

    let body_text = `
        <app-welcome class="ng-star-inserted">
            <form class="xli-modal ng-pristine ng-invalid ng-touched">
                <div class="xli-modal-header">
                    <div class="mat-dialog-title ng-star-inserted" style="">Welcome to Themius</div>
                </div>
                <div class="xli-modal-body">
                    <div class="form-ct">
                        <div>
                        <p>
                            Hey! Welcome to <b>Themius</b>, a super powerful extension designed to make ECHO a better experience for those who 
                            feel like its interface is a bit odd or bad and want a better experience when they work during class for a whole 8 hours
                        </p>
                        <p>
                        </p>
                        <p>
                        <div class="mat-dialog-title ng-star-inserted" id="mat-dialog-title-4" style="">Features</div>
                        Themius is not <b>just</b> an overhaul of ECHO, it is also able to do several things to the source of the website
                        to allow you to get better scores or get things you couldn't get. 
                        <ul>
                            <li>Paste Detection (Helps when you paste text)</li>
                            <li>Force Re-submit (Forces the ability to resubmit overdue assigntments)</li>
                            <li>Force Re-edits (Forces the ability to add text to a text editor when its overdue)</li>
                        </ul>
                        </p>
                        </div>
                    </div>
                </div>
                <div class="xli-modal-footer"><button type="button" color="primary" class="mat-focus-indicator mat-button mat-button-base mat-primary">
                    <span class="mat-button-wrapper" id="themius-welcome-close">Close</span>
                </div>
            </form>
        </app-welcome>
    `;

    document.body.appendChild(welcome); 
    welcome.classList = "themius-welcome";
    welcome.id = 'themius-welcome'; 
    welcome.innerHTML = body_text;

    var el = document.getElementById('themius-welcome-close');
    el && el.addEventListener('click', remove_welcome, false);
}

// removes the popup
function remove_welcome ()
{
    let remove = document.getElementById('themius-welcome');
    remove.style.display = "none";
    remove.style.background = "transparent";
    set({welcome: false});
}

// Removes disabled="" effects from buttons and text editors
function remove_disabled () // TODO
{
}

// Initalize when document is ready
if (document.querySelector('html').hasAttribute('buzz-version'))
{
    get(
        {
            onOroff: true,
            welcome: true,
        }, 
        function (object) 
        {
            if (object.onOroff == true)
            {
                create();
                add();

                // Welcome header (Runs once !!!!)
                if (obj.welcome == true)
                    add_welcome();
            }
            else
            {
                remove();
            }
        });
}