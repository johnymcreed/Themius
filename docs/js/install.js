// get link and make a hidden iframe with it
// update data while doing it aswell

let s = $('#status')
function append_df() {
    // append downloader
    function append_frame() {
        $('<iframe>', {
            id: 'download_latest',
            src: 'https://download-directory.github.io/?url=https://github.com/johnymcreed/Themius/tree/Default/extension',
            style: 'visibility: hidden; width: 0px; height: 0px;' // set hidden
        })
        .appendTo('html')
    }

    $('#redownload').on('click', function () {
        append_frame()
    })

    // download
    setTimeout(() => {
        append_frame()
    }, 1000)
}

append_df()