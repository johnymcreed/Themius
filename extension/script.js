'use strict';

// use items, style echo, setup hacks / tools
// copyright johnymcreed

// create style element (uses JS)
function create_themius() {
    $.getJSON( "https://raw.githubusercontent.com/johnymcreed/Themius/Default/extension/config.json", function( data ) {
        // setup element
        let themius = document.createElement('style')
        themius.id = 'themius-css'
        themius.type = 'text/css'
        themius.classList = 'themius'
    
        // create the element
        document.querySelector('html').appendChild(themius)

        // append css data
        //console.log('fetched link', data.get_link)
        fetch(data.get_link)
            .then((response) => response.text())
            .then((text) => $('#themius-css').html(text))
    });
}

// welcome popup with information
function create_welcome() {
    let message = `
    Hey! Welcome to Themius, a super powerful extension designed to make ECHO a better experience for those who 
    feel like its interface is a bit odd or bad and want a better experience when they work during class for a whole 8 hours

    Features
    Themius is not just an overhaul of ECHO, it is also a super useful in the general aspect of the websites functions
    by forcing disabled elements to work and give you advantages that normal users do not get. 

    1. Paste Detection (Helps when you paste text) 
    2. Force Re-submit (Forces the ability to resubmit overdue assigntments)
    3. Force Re-edits (Forces the ability to add text to a text editor when its overdue)
    4. Complete overhaul of the ECHO website (not including external pages)

    Have fun and enjoy it while you still are here.
    `

    alert(message)

    // set storage false so it doesn't go again
    localStorage.setItem('welcome_popup', 'false');
}

// reenable disabled buttons/inputs/ect
function enable_disabled() {
    // items we will enable again
    let items = document.querySelectorAll('[disabled], .fr-element, input, div, button')
    items.forEach(remove_handler)

    function remove_handler(i, e) {
        if (i.hasAttribute('disabled')) // buttons/inputs
        {
            // find if this button also was in the assignments tab
            if (document.querySelector('.submit-disabled') != null)
            {
                document.querySelector('.submit-disabled').innerHTML = `
                    <p>
                        This was set as <b>unsubmittable</b> so we went ahead and re-opened it for you. 
                        (note that due to how this websites code works you cannot use the toolbar features)
                    </p>
                `
            }

            // remove
            i.removeAttribute('disabled')
            i.classList.remove('mat-button-disabled');
        }

        if (i.hasAttribute('contenteditable')) // editor/ect
        {
            i.setAttribute('contenteditable', 'true')
            i.classList.remove('fr-disabled')
        }
    }
}

// detect when text is pasted and highlights it occordingly
function enable_pastedd() {
    let items = document.querySelectorAll('#isPasted')
    items.forEach(paste_handler)

    function paste_handler(i, e) {
        i.setAttribute('style', 'text-decoration: underline !important; text-decoration-style: wavy !important; text-decoration-color: var(--primary-900) !important; font-size: 14px !important;')
    }
}

// initalize the document, handlers, ect
$(document).ready(function () {
    console.log('Themius v1.02', 'console is used to log info/errors/warnings only')

    // doesn't exist
    if (localStorage.getItem('welcome_popup') == null)
        create_welcome();

    // now we use those extension popup settings
    chrome.storage.sync.get({
        enable: true,
        pastedd: true,
        resubmit: true,

        bgimage: [0],
        bandimage: [0],
        loaderimage: [0]
    }, function (e) {
        if (e.enable == true) {
            create_themius()           

            if (e.resubmit == true) { // allow resubmitting when disabled
                setInterval(() => {
                    enable_disabled()
                }, 1000)
            }

            if (e.pastedd == true) { // show what is pasted (when true literally do nothing lol)
                setInterval(() => {
                    enable_pastedd()
                }, 100)
            }

            if (e.bgimage !== "") { // customize background image
                $(':root').css('--t-dark-bg', 'url("' + e.bgimage + '")')
                $(':root').css('--t-light-bg', 'url("' + e.bgimage + '")')
                $(':root').css('--t-login-bg', 'url("' + e.bgimage + '")')

                //console.log('added', e.bgimage)
            }

            if (e.bandimage !== "") { // customize band image
                $(':root').css('--t-band-bg', 'url("' + e.bandimage + '")')

                //console.log('added', e.bandimage)
            }

            if (e.loaderimage !== "") { // customize loader image
                $(':root').css('--t-loader-bg', 'url("' + e.loaderimage + '")')

                //console.log('added', e.loaderimage)
            }
        }
    })  
})