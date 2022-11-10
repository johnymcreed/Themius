CONVERT extension to fix css styling<br>
make page.js to make a welcome modal

<code>
function set(arg){chrome.storage.sync.set(arg)}
function get(arg, arr){chrome.storage.sync.get(arg, arr)}

var toggle = true;
chrome.storage.sync.set(
{
    toggle: toggle
});

if (document.querySelector('html').hasAttribute('buzz-version'))
{
    var div = document.createElement("div"); 

    get(
        {
            toggle: true
        },
        function (object)
        {
            if (object.toggle == true)
            {
                setTimeout(() => 
                {
                    document.body.appendChild(div); 
                    div.classList = "themius-help";
                    div.id = 'themius-help';

                    div.innerHTML = `
                        <app-themius-help class="ng-star-inserted">
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
                                        <span class="mat-button-wrapper" id="themius-help-close">Close</span>
                                </div>
                            </form>
                        </app-themius-help>
                    `;
                }, 800);
            }
        });
}

function close ()
{
    let help = document.getElementById('themius-help');
    help.style.display = "none";
    help.style.background = "transparent";

    set(
        {
            toggle: false
        });
}

document.getElementById('themius-help-close').addEventListener("click", close);
</code>
