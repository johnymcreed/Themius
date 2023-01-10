'use strict';

// get items, save to storage and use at primary script
// copyright johnymcreed

$(document).on('DOMContentLoaded', load_handler)
$('#enable_themius').on('click', save_handler)
$('#enable_pastedd').on('click', save_handler)
$('#enable_resubmit').on('click', save_handler)
$('#enable_fancytab').on('click', save_handler)
$('#enable_precents').on('click', save_handler)
$('#custom_background_image').on('change', save_handler)
$('#custom_band_image').on('change', save_handler)
$('#custom_loader_image').on('change', save_handler)

// save options
function save_handler () {
    var enable_themius = $('#enable_themius')[0].checked    
    var enable_pastedd = $('#enable_pastedd')[0].checked
    var enable_resubmit = $('#enable_resubmit')[0].checked
    var enable_precents = $('#enable_precents')[0].checked
    var enable_fancytab = $('#enable_fancytab')[0].checked

    var custom_background_image = $('#custom_background_image').val()
    var custom_band_image = $('#custom_band_image').val()
    var custom_loader_image = $('#custom_loader_image').val()

    chrome.storage.sync.set({
        enable: enable_themius, // true / false
        pastedd: enable_pastedd, // true / false
        resubmit: enable_resubmit, // true / false
        percentsonly: enable_precents, // true / false
        fancytab: enable_fancytab, // true / false

        bgimage: custom_background_image, // string
        bandimage: custom_band_image, // string
        loaderimage: custom_loader_image // string
    })

    // anytime this function is called add "saved" to
    // the #is_saved id so the user knows it was saved
    $('#is_saved').css('display', 'block')
    setTimeout(() => {
        $('#is_saved').css('display', 'none')
    }, 2000)
}

// load options
function load_handler () {
    chrome.storage.sync.get({
            enable: true,
            pastedd: true,
            resubmit: true,
            percentsonly: true,
            fancytab: true,

            bgimage: [],
            bandimage: [],
            loaderimage: []
        }, function (e) {
            $('#enable_themius')[0].checked = e.enable // returns true / false
            $('#enable_pastedd')[0].checked = e.pastedd // returns true / false
            $('#enable_resubmit')[0].checked = e.resubmit // returns true / false
            $('#enable_precents')[0].checked = e.percentsonly // returns true / false
            $('#enable_fancytab')[0].checked = e.fancytab // returns true / false

            $('#custom_background_image').attr('value', e.bgimage); // returns string
            $('#custom_band_image').attr('value', e.bandimage); // returns string
            $('#custom_loader_image').attr('value', e.loaderimage); // returns string
        }
    )
}