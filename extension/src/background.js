"use strict";

// Background for popup.html with saving settings
// for each prameter for script.js
// By Mcreed

SetName();
Setup();

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('applytheme').addEventListener('click', save);
document.getElementById('themeby').addEventListener('change', save);

// Saves options to chrome.storage
function save() 
{
    var themeby = document.getElementById("themeby").value;
    var onOroff = document.getElementById('applytheme').checked;

    chrome.storage.sync.set(
        {
            onOroff: onOroff,
            themeby: themeby
        });
}

// Restores options from chrome.storage
function restore() 
{
    chrome.storage.sync.get(
        {
            onOroff: true,
            themeby: [1,2,3]
        }, 
        function(object) 
        {
            document.getElementById('applytheme').checked = object.onOroff;
            document.getElementById('themeby').value = object.themeby;
        });
}

// Below begins the POPUP.html dynamic changes via the elements from session.js
// these change depending on what is contained in it.

// Apply a name
function SetName()
{
    chrome.storage.sync.get(
        {
            "first": [],
            "last": []
        },
        function (obj)
        {
            const text = document.createTextNode(obj.first + " " + obj.last);
            const pNode = document.getElementById("username");
            pNode.appendChild(text);
        });
}

function Setup()
{
    chrome.storage.sync.get(
        {
            "clientid": [],
            "userid": [],
            "token": [],
            "region": [],
            "first": [],
            "last": [],
            "email": [],
            "copied": [],
            "text_copied": [],
            "buzz": [],
            "ng": [],
            "lang": [],
            "href_location": [],
            "domain": [],
            "domainid": [],
            "activity": [],
            "gradelist": [],
            "hasiep": [],
        },
        function (r)
        {
            let val = "";
            if (r.hasIep == true)
                val = "<green>Yes</green>"
            else
                val = "<red>No</red>"

            document.getElementById('status').innerHTML = (
                "User: <name>" + r.first + " " + r.last + "</name><br>" +
                "\nEmail: <blue>" + r.email + "</blue><br>" +
                "\nDistrict: <grey>" + r.region + "</grey><br>" +
                "\nLang: <grey>" + r.lang + "</grey><br>" +
                "\nClient: <yellow>" + r.clientid + "</yellow><br>" +
                "\nId: <orange>" + r.userid + "</orange><br>" +
                "\nActivity: <orange>" + r.activity + "</orange><br>" +
                "\nHas IEP: " + val 
            )
        }
    )
}

Array.from(document.querySelectorAll('[tip]')).forEach(el => 
    {
        let tip = document.createElement('div');

        tip.classList.add('tooltip');
        tip.innerText = el.getAttribute('tip');

        tip.style.transform =
            'translate(' +
                (el.hasAttribute('tip-left') ? 'calc(-100%)' : '-45%') + ', ' + // Center
                (el.hasAttribute('tip-bottom') ? 'calc(-100%)' : '80%') +
            ')';

        el.appendChild(tip);
        
        el.onmousemove = e => 
        {
            tip.style.left = e.clientX + 'px'
            tip.style.top = e.clientY + 'px';
        };

        $('.tooltip').width($(window).width());
    });