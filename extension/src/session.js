"use strict";

// gets info via "application"/localhost
// and more

try 
{
    // User
    var cid = JSON.parse(window.localStorage.getItem('gaClientId')); // Client ID
    var id = JSON.parse(window.localStorage.getItem('session'))['user']['id']; // User ID
    var first = JSON.parse(window.localStorage.getItem('session'))['user']['firstname']; // First name
    var last = JSON.parse(window.localStorage.getItem('session'))['user']['lastname']; // Last name
    var email = JSON.parse(window.localStorage.getItem('session'))['user']['email'] // User email
    var token = JSON.parse(window.localStorage.getItem('session'))['token']; // Session token
    var IEP = JSON.parse(window.localStorage.getItem('session'))['user']['hasIep'] // ? 
    var region = JSON.parse(window.localStorage.getItem('session'))['user']['userspace'] // School region

    // Website
    var buzz_vrs = document.querySelector('html').getAttribute('buzz-version'); // Buzz version
    var ng_vrs = document.querySelector('html').querySelector('app-root').getAttribute('ng-version'); // Ng version
    var language = window.localStorage.getItem('sessionLanguage'); // User language
    var domainid = JSON.parse(window.localStorage.getItem('session'))['user']['domainid']; // Domain ID
    var domain = JSON.parse(window.localStorage.getItem('session'))['user']['domainname'] // Domain Name
    //var _location = JSON.parse(window.localStorage.getItem('web-vitals-extension-metrics'))['url']; // Long URL
    //var _location_short = JSON.parse(window.localStorage.getItem('web-vitals-extension-metrics'))['shortURL']; // Short URL
    var hreflocation = window.location.href;

    // Misc
    var activity = window.localStorage.getItem('activity'); // Actvity id
    var listview = window.localStorage.getItem('studentGradeListView'); // Grade list view
    //var timestamp = JSON.parse(window.localStorage.getItem('web-vitals-extension-metrics'))['timestamp']; // Timestamp
    //var navstart = JSON.parse(window.localStorage.getItem('web-vitals-extension-metrics'))['navigationStart']; // Nav ID
    //var minutes = JSON.parse(window.localStorage.getItem('session'))['minutes']; // Minutes

    // Paste/Copy System
    var copiedtxt = window.localStorage.getItem('fr-copied-text'); // Text Copied
    var iscopied = document.getElementById('isPasted');

    // export to storage
    chrome.storage.sync.set({ 
        "clientid": cid,
        "userid": id,
        "token": token,
        "region": region,
        "first": first,
        "last": last,
        "email": email,
        "copied": iscopied,
        "text_copied": copiedtxt,
        "buzz": buzz_vrs,
        "ng": ng_vrs,
        "lang": language,
        //"location": _location,
        //"location_short": _location_short,
        "href_location": hreflocation,
        //"minutes": minutes,
        //"timestamp": timestamp,
        "domain": domain,
        "domainid": domainid,
        "activity": activity,
        "gradelist": listview,
        //"navid": navstart,
        "hasiep": IEP,
    });
}
catch (error)
{
    console.warn("Couldn't get variable from Localstorage: '", error,"'");
}