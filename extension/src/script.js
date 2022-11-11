/** @format */

// Extension script
// By mcreed
'use strict';

function set(arg) {
	chrome.storage.sync.set(arg);
}
function get(arg, arr) {
	chrome.storage.sync.get(arg, arr);
}
function fetches(link, id) {
	fetch(link)
		.then((response) => response.text())
		.then((text) => $(id).html(text));
}

// Create Style
function create() {
	let style = document.createElement('style');
	style.id = 'themius-css';
	style.type = 'text/css';
	style.classList = 'themius';
	document.querySelector('html').appendChild(style);
}

// Add Style
function add() {
	fetches(
		'https://raw.githubusercontent.com/johnymcreed/Themius/Default/themes/themius.v4.css',
		'#themius-css'
	);
}

// adds the (one time only welcome popup)
function add_welcome() {
	var welcome = document.createElement('div');

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
                            Themius is not <b>just</b> an overhaul of ECHO, it is also a super useful in the general aspect of the websites functions
                            by forcing disabled elements to work and give you advantages that normal users do not get.
                            <ul>
                                <li>Paste Detection (Helps when you paste text)</li>
                                <li>Force Re-submit (Forces the ability to resubmit overdue assigntments)</li>
                                <li>Force Re-edits (Forces the ability to add text to a text editor when its overdue)</li>
                                <li>Complete overhaul of the ECHO website (not including external pages)</li>
                            </ul>
                        </p>
                        <p>
                            <div class="mat-dialog-title ng-star-inserted" id="mat-dialog-title-4" style="">Socials</div>
                            Get more out of what themius is, learn more, be more! find out what this extension can do via our documentation website. also if you find issues
                            please report to our githubs issues page or take this link <a href="https://github.com/johnymcreed/Themius/issues">here</a>
                            <ul>
                                <li><a href="https://johnymcreed.github.io/Themius/">Themius Docs</a></li>
                                <li><a href="https://github.com/johnymcreed/Themius">Github Repositorie</a></li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
                <div class="xli-modal-footer">
                    <span style="float: left;">Once you close this you cannot open it again</span>
                    <button type="button" color="primary" class="mat-focus-indicator mat-button mat-button-base mat-primary">
                        <span class="mat-button-wrapper" id="themius-welcome-close">Close</span>
                    </button>
                </div>
            </form>
        </app-welcome>
    `;

	document.body.appendChild(welcome);
	welcome.classList = 'themius-welcome';
	welcome.id = 'themius-welcome';
	welcome.innerHTML = body_text;

	var el = document.getElementById('themius-welcome-close');
	el && el.addEventListener('click', remove_welcome, false);
}

// removes the popup
function remove_welcome() {
	let remove = document.getElementById('themius-welcome');
	remove.style.display = 'none';
	remove.style.background = 'transparent';
	localStorage.setItem('is_welcome', 'false');
}

// Removes disabled="" effects from buttons and text editors
function remove_disabled() {
	// TODO
	// Buttons
	function BTNS() {
		let link = document.querySelectorAll('button');
		link.forEach(end);

		// Get Item and delete the components of it
		function end(item, index) {
			if (item.hasAttribute('disabled')) {
				item.removeAttribute('disabled');
				item.classList.remove('mat-button-disabled');

				try {
					document.querySelector('.submit-disabled').innerHTML =
						'This was classed as <b>Unsubmittable</b> so we went ahead and reopend it for you. (note that due to how this websites code works you cannot use the toolbar features)';
				} catch (err) {}
			}
		}
	}

	// Editors
	function EDITS() {
		let link = document.querySelectorAll('div');
		link.forEach(end);

		function end(item, index) {
			// Only in the case its false
			if (item.hasAttribute('contenteditable')) {
				item.setAttribute('contenteditable', 'true');
				item.classList.remove('fr-disabled');
			}

			if (item.classList.contains('fr-toolbar')) {
				item.classList.remove('fr-disabled');
			}
		}
	}

	BTNS();
	EDITS();
}

// Initalize when document is ready
if (document.querySelector('html').hasAttribute('buzz-version')) {
	if (localStorage.getItem('is_welcome') == 'false') {
	} else {
		localStorage.setItem('is_welcome', 'true');
	}

	get(
		{
			onOroff: true,
			welcome: true,
		},
		function (object) {
			if (object.onOroff == true) {
				create();
				add();

				// Welcome header (Runs once !!!!)
				if (localStorage.getItem('is_welcome') == 'true') {
					setTimeout(() => {
						add_welcome();
					}, 1100);
				}

				setTimeout(() => {
					setInterval(() => {
						remove_disabled();
					}, 1000);
				}, 2000);
			}
		}
	);
}
