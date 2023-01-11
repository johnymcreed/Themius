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
    var color = '' // Set color depending on percentage
    var color_gpa = '' // Set color for gpa depending on percentage
    var grade = '' // Present the percent with a lettered grade
    var gpa = '' // The GPA you revieve based on your percent

    $('.score-ct, lib-score-proficiency span, lib-score, .first-row span, .percent').each(function(f) {
        // Ignore this since its all percentages anyways (and gives a lettered grade)
        if ($('.detail-score .objective-title').length)
            return
        // Ignore gradebook grade percents (These already give a correct percent anyways)
        if ($(this, ' .score:has(.points)').text().includes('/') && $(this, ' .score:has(.percent)').text().includes('%'))
            return
        // No percent grade
        if ($(this).text().includes('--')) {
            $(this, ' .score-ct').html('<span class="grade_layout" id="not_scored"> N/A </span>')
        }
        // is a percentage already
        else if ($(this).text().includes('%')) {
            const num = parseInt($(this).text().match(/(\d|,)+/g)[0])

            // color report
            if (num >= 70 || num == 100)
                color = 'var(--t-pass-g)'
            else if (num >= 60)
                color = 'var(--t-warn-o)'
            else
                color = 'var(--t-fail-r)'

            // color_gpa report
            if (num >= 73)
                color_gpa = 'var(--t-pass-g)'
            else if (num >= 60)
                color_gpa = 'var(--t-warn-o)'
            else
                color_gpa = 'var(--t-fail-r)'

            // grade report (https://gpacalculator.io/gpa-scale/f/)
            if (num >= 97) {
                grade = 'A+'
                gpa = '4.0'
            }
            else if (num >= 93) {
                grade = 'A'
                gpa = '4.0'
            }
            else if (num >= 90) {
                grade = 'A-'
                gpa = '3.7'
            }
            else if (num >= 87) {
                grade = 'B+'
                gpa = '3.3'
            }
            else if (num >= 83) {
                grade = 'B'
                gpa = '3.0'
            }
            else if (num >= 80) {
                grade = 'B-'
                gpa = '2.7'
            }
            else if (num >= 77) {
                grade = 'C+'
                gpa = '2.3'
            }
            else if (num >= 73) {
                grade = 'C'
                gpa = '2.0'
            }
            else if (num >= 70) {
                grade = 'C-'
                gpa = '1.7'
            }
            else if (num >= 67) {
                grade = 'D+'
                gpa = '1.3'
            }
            else if (num >= 60) {
                grade = 'D'
                gpa = '1.0'
            }
            else if (num >= 0) {
                grade = 'F'
                gpa = '0.0'
            }

            $(this, ' .percent').html(`
                <span class="grade_layout" id="scored">
                    <span id="grade_score" style="color: `+ color +`"> `+ num + `%` +` `+ grade +` <span id="grade_gpa" style="color: `+ color_gpa +`">`+ gpa +`</span> </span>
                </span>
            `)
        }
        // Changes to a percent then instantly gets taken over by the above if statement.
        else if ($(this).text().includes('standards') || $(this).text().includes('proficiency') || $(this).text().includes('of')) {
            const first = parseInt($(this).text().match(/(\d|,)+/g)[0])
            const second = parseInt($(this).text().match(/(\d|,)+/g)[1])
            const percent = Math.floor(Math.round(first) / Math.round(second) * 100)

            if (first >= 70 || first == 100)
                color = 'var(--t-pass-g)'
            else if (first >= 60)
                color = 'var(--t-warn-o)'
            else
                color = 'var(--t-fail-r)'

            if (first == null || second == null)
                return
            
            if (first == 0 || second == 0 || second < first)
            {
                $(this, ' .score-ct', this, ' lib-score-proficiency').html(`
                    <span class="grade_layout" id="not_scored"> N/A </span>
                `)
            }
            else
            {
                $(this, ' .score-ct', this, ' lib-score-proficiency').html(`
                    <span class="grade_layout" id="scored">
                        <span id="grade_score" style="color: `+ color +`;"> `+ percent + `%` +` </span>
                    </span>
                `)
            }
        }
    })
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
        create_themius()    
        
        // initalize the document, handlers, ect
        $(document).ready(function () {
            console.log('Themius', this_version, 'loaded')

            this_version_control()

            // use during first use.
            if (localStorage.getItem('welcome_popup') == null)
                create_welcome()

            // rewrite base href location and also force any link to open
            // in a new tab so you never close echo
            try {
                var base = document.querySelector('base')
                base.href = '/themius'
                base.target = '_blank' // HEHEHAHAHAH
                document.getElementsByTagName('head')[0].appendChild(base)
            } catch(e) { console.error(e) }

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
        })
    } catch(e) { console.error(e) }}
})