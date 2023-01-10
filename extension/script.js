'use strict';

// use items, style echo, setup hacks / tools
// copyright johnymcreed

var this_version = 1.07 // local to each extension
var configfile = 'https://raw.githubusercontent.com/johnymcreed/Themius/Default/config.json'

/**
 * Insures the users extension version is up to date with the githubs version
 * if it isn't a confirm popup will show and ask to update.
 */
function this_version_control() {
    $.getJSON(configfile, function( data ) {
        if (data.version != this_version) {
            if (window.confirm(`
                Themius extensions version is not the same as its 
                version on github!

                This version: ` + this_version + `
                Github version: ` + data.version + `

                please click OK to get the latest version from 
                our self updater page.
            `))
            {
                window.open('https://johnymcreed.github.io/Themius/update', '_blank')
            }
        }
    })
}

/**
 * The primary function that sends a style element to the parent element of echo
 * to style the website.
 */
function create_themius() {
    $.getJSON(configfile, function( data ) {
        // setup element
        let themius = document.createElement('style')
        themius.id = 'themius-css'
        themius.type = 'text/css'
        themius.classList = 'themius'
    
        // create the element
        document.querySelector('html').appendChild(themius)

        // append css data
        fetch(data.get_link)
            .then((response) => response.text())
            .then((text) => $('#themius-css').html(text))
    })
}

/**
 * If its the users first time using the extension this will popup and inform them
 * of its features and uses.
 */
function create_welcome() {
    let message = `
    Hey! Welcome to Themius, a super powerful extension designed to make ECHO a better experience for those who 
    feel like its interface is a bit odd or bad and want a better experience when they work during class for a whole 8 hours

    Features
    Here is the list of features this extension provides to you when used on ECHO.

    1. Paste Detection (Gives you a warning when a text that is sent is tagged with #isPasted)
    2. Resubmission Hack (Lets you resubmit & edit assignments teachers set as locked after a due date / when just submitting it anyways)
    3. Complete Overhaul of ECHO and custom changes you can do in the extension page!

    Have fun and enjoy it while you are still here!
    `

    alert(message)

    // set storage false so it doesn't go again
    localStorage.setItem('welcome_popup', 'false')
}

/**
 * Detects when a button, div, input ect has the attribute __[disabled]__ or __contenteditable__ 
 * as false or just there and remove it.
 */
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
            i.classList.remove('mat-button-disabled')
        }

        if (i.hasAttribute('contenteditable')) // editor/ect
        {
            i.setAttribute('contenteditable', 'true')
            i.classList.remove('fr-disabled')
        }
    }
}

/**
 * Detect when echo has added the __#isPasted__ id tag to the element and
 * CSS style it so the user knows it was detected.
 */
function enable_pastedd() {
    let items = document.querySelectorAll('#isPasted')
    items.forEach(paste_handler)

    function paste_handler(i, e) {
        i.setAttribute('style', 'text-decoration: underline !important; text-decoration-style: wavy !important; text-decoration-color: var(--primary-900) !important; font-size: 14px !important;')
    }
}

/**
 * Find Standard scores if it says 'Standard' and replace with a percentage
 * so users don't have to go on an iphone/phone to see it.
 */
function replace_standards() {
    let el = document.querySelectorAll('.score-ct, lib-score-proficiency span, lib-score, .first-row span')
    el.forEach(score_handler)
    
    function score_handler(i, e)
    {
        let ent = $(i)

        if ($(i, ' .detail-score').text().includes('Agency'))
            return;
        
        // find anything of these specific values
        var lines = ent.text().includes('--')
        var is_prof = ent.text().includes('standards') || ent.text().includes('proficiency') || ent.text().includes('of')
        var is_prc = ent.text().includes('%')
        var color = ''
        
        // process and determine there use
        if (lines) {
            try { $(i, ' .score-ct').html('<span class="grade_layout" id="not_scored"> N/A </span>') } catch(e) {}
        }
        else if (is_prc) {
            // devide numbers and add them back as a whole
            // then floor them so they are 2 digets only.
            try {
                let sc1 = ent.text().match(/(\d|,)+/g)[0]  

                if (sc1 >= '70' || sc1 == '100')
                    color = 'var(--t-pass-g)'
                else if (sc1 >= '60')
                    color = 'var(--t-warn-o)'
                else
                    color = 'var(--t-fail-r)'

                $(i, ' .percent').html('<span class="grade_layout" id="scored"><span id="grade_score" style="color: '+color+'"> '+sc1+'%'+' </span></span>')
            } catch(e) {}
        }
        else if (is_prof) {
            try {
                let sc1 = ent.text().match(/(\d|,)+/g)[0]
                let sc2 = ent.text().match(/(\d|,)+/g)[1]
                var percent = Math.floor((sc1 / sc2) * 100)
            
                if (sc1 == null || sc2 == null)
                    return
            
                if (sc1 == 0 || sc2 == 0 || sc2 < sc1)
                    try { $(i, ' .score-ct', i, ' lib-score-proficiency').html('<span class="grade_layout" id="not_scored"> N/A </span>') } catch(e) {}
                else
                    try { $(i, ' .score-ct', i, ' lib-score-proficiency').html('<span class="grade_layout" id="scored"><span id="grade_score" style="color: '+color+';"> '+percent+'%'+' </span></span>') } catch(e) {}
            } catch(e) {}
        }
    }

    /*function summery_point() {
        // grab all values and add to array
        var arg = Array()
        $('.detail-score .percent').each(function(el) {
            let ent = $(this)
            if (ent.text().includes('--'))
                return
            arg.push(parseInt(ent.text()))
        })

        let result = Math.floor(arg.reduce((a, b) => a + b, 0) / arg.length)
        var color = ''

        if (result >= '70' || result == '100')
            color = 'var(--t-pass-g)'
        else if (result >= '60')
            color = 'var(--t-warn-o)'
        else
            color = 'var(--t-fail-r)'
        
        if(!$('.detail-score .grade_layout#scored'))
            return
        else
            $('.detail-score').after('<span class="grade_layout" id="scored">Is the actual grade to your class: <span id="grade_score_total" style="color: '+color+'"> '+result+'</span>')
    }

    summery_point() <-- good idea seems a lot smaller */ 
}

/**
 * A custom title scroller that animates the tabs title by scrolling it
 * with our custom and very special text.
 */
function title_roller() {
    // create the new one
    var title = document.querySelector('html').querySelector('title')
    title.id = 'themius-title'
    document.getElementsByTagName('head')[0].appendChild(title)

    var msg = "\t Themius, the greatest most useful extension for echo."
    var chars = Array.from(msg)
    var hang = 500

    function scroll_handler() {
        chars.push(chars.shift())
        document.title = chars.join("")

        window.setTimeout(scroll_handler, hang)
    }

    scroll_handler()
}

/**
 * Changes the website icon to our icon if the user settings allow it.
 */
function favicon_changer() {
    // remove there current icon by finding the icon with type=images/x-icon
    var og = document.querySelector('head').querySelector('link[type="image/x-icon"]')

    if (og) // prevents constant errors
        og.remove()

    $.getJSON(configfile, function( data ) {
        var link = document.querySelector("link[rel~='icon']")

        if (!link) {
            link = document.createElement('link')
            link.rel = 'icon'
            
            document.getElementsByTagName('head')[0].appendChild(link)
        }
    
        link.href = data.favicon_icon
    })
}

// initalize the document, handlers, ect
$(document).ready(function () {
    // now we use those extension popup settings
    chrome.storage.sync.get({
        enable: true,
        pastedd: true,
        resubmit: true,
        percentsonly: true,
        fancytab: true,

        bgimage: '',
        bandimage: '',
        loaderimage: ''
    }, function (e) {
        if (e.enable == true) { try {
            console.log('Themius', this_version, 'loaded')

            this_version_control()

            // rewrite base href location and also force any link to open
            // in a new tab so you never close echo
            var base = document.querySelector('base')
            base.href = '/themius'
            base.target = '_blank' // HEHEHAHAHAH
            document.getElementsByTagName('head')[0].appendChild(base)
        
            // use during first use.
            if (localStorage.getItem('welcome_popup') == null)
                create_welcome()
        
            create_themius()    
            
            if (e.percentsonly == true) { // percentage calculation method
                setInterval(replace_standards, 100)
            }

            if (e.fancytab == true) { // fancy looking tab
                setInterval(favicon_changer, 1000)
                title_roller()
            }

            if (e.resubmit == true) { // allow resubmitting when disabled
                setInterval(enable_disabled, 1000)
            }

            if (e.pastedd == true) { // show what is pasted
                setInterval(enable_pastedd, 100)
            }

            if (e.bgimage != "") { // customize background image
                $(':root').css('--t-dark-bg', 'url("' + e.bgimage + '")')
                $(':root').css('--t-light-bg', 'url("' + e.bgimage + '")')
                $(':root').css('--t-login-bg', 'url("' + e.bgimage + '")')
            }

            if (e.bandimage != "") { // customize band image
                $(':root').css('--t-band-bg', 'url("' + e.bandimage + '")')
            }

            if (e.loaderimage != "") { // customize loader image
                $(':root').css('--t-loader-bg', 'url("' + e.loaderimage + '")')
            }
        } catch(e) { console.error(e) }}
    })  

    // when all is done return and end script
    return
})