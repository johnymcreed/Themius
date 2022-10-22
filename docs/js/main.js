// File creates shortcuts to elements for javascript
// Owner: Mcreed

// Load all required to load functions
function init ()
{
    var script = document.createElement("script");
    script.src = 'js/code.js';
    var scriptr = document.createElement("script");
    scriptr.src = 'js/markdown.js'
    scriptr.type = 'module'

    // Await the DOM loading
    document.addEventListener("DOMContentLoaded", function(event) 
    {
        AppTheme();
        fApplyElement('ID', 'year', new Date().getFullYear());
     
        document.head.appendChild(script);
        document.head.appendChild(scriptr);

        if (!fIsPhone()) // If Phone don't do these
        {
            fToolTip();
            fCustomContext();
            fContentHider();
        }

        fBacktoTop();
        fNavbarSidebar();
        fContentReaderHeight();
        fSnowBoard();

        fXMLReadData();

        // Content loads too fast for this to register
        setTimeout(() => {  
            fRetrieveData('log', 'https://raw.githubusercontent.com/johnymcreed/Themius/Default/themius.v3.css');
            fCopyallData('#copyall', 'log');
            fAddFeedList();
        }, 100);
    });

    fPrintConsole('Success', 'green', 'All functions loaded')
}

// Prints a colored status 
function fPrintConsole (Dialog, Color, Text)
{
  if (Color == "")
    Color = "white"; // Default

  console.log("%c" + Dialog + "", "color: " + Color + "; font-family: Arial; font-size: 11px; padding: 3px; background: black; border: 1px solid black; border-radius: 4px;", Text);
}

// Adds <header> with type=45 to the feed-list area
// f this ^ we are using markdown babya!!!
function fAddFeedList()
{
    let el = document.querySelector('content').querySelector('article').querySelector('md-ssc').querySelectorAll('h1')
    el.forEach(list)

    function list(name)
    {
        $('#feed-list').append('<li><span>' + name.innerHTML + "</span></li>")
    }
}

// Forces navbar to turn into a sidebar
function fNavbarSidebar()
{ 
    const open = document.querySelector('#open-drawer')
    const close = document.querySelector('#close-drawer')
    const outsideclose = document.querySelector('#outer-bounds')

    // Open sidebar
    open.addEventListener('click', () => 
    { 
        document.getElementById("sidedrawer").style.width = "250px";
        document.getElementById("outer-bounds").style.display = "block"
    });

    // Close sidebar
    close.addEventListener('click', () => 
    {
        document.getElementById("sidedrawer").style.width = "0px";
        document.getElementById("outer-bounds").style.display = "none"
    });

    // Acts like a outer bounds to close the menu if clicked outside the space
    outsideclose.addEventListener('click', () => 
    {
        document.getElementById("sidedrawer").style.width = "0px";
        document.getElementById("outer-bounds").style.display = "none"
    });
}

// Applys something to the .InnerHTML of the Element
function fApplyElement (Type, Element, Content)
{
    const Clt = Type;

    if (Element == '')
    {
        fPrintConsole('Warn', 'orange', 'Cannot function if the Element is not given.')
        return
    }

    if (Clt == 'ID')
        document.getElementById(Element).innerHTML = Content;
    else if (Clt == 'CLASS')
        document.getElementsByClassName(Element).innerHTML = Content;
    else if (Clt == 'TAG')
        document.getElementsByTagName(Element).innerHTML = Content;
    else if (Clt == 'NAME')
        document.getElementsByName(Element).innerHTML = Content;
    else
    {
        fPrintConsole('Error', 'red', 'Cannot function if no Element type is given.')
        return
    }
}

// Dynamically update height of the content reader
function fContentReaderHeight ()
{
    $(window).resize(function() {
        
        if ($(window).width() > 740) 
            $('content').height($(window).height() - $('footer').height() * 2.5);
        else if ($(window).width() < 700)
            $('content').height($(window).height() - $('footer').height() * 2);
        else if ($(window).width() < 690)
            $('content').height($(window).height() - $('footer').height() * 2);
        else
            $('content').height($(window).height() - $('footer').height() * 2.5); // Op?
    });
    
    $(window).trigger('resize');
}

// Function to determine the apps theme and change elements with it
// This function is huge as it replaces various elements
function AppTheme ()
{
    const currentTheme = localStorage.getItem('theme');
    const Toggle = document.querySelector('#theme-toggle');
    const Toggle_alt = document.querySelector('#theme-toggle-side');

    // Theme Change
    var apptheme = document.querySelector(':root');

    // tooltip
    var tool = document.getElementById("theme-toggle")
    var tool_alt = document.getElementById("theme-toggle-side") // Alt
    
    document.body.dataset.theme = currentTheme;

    // If localstorage does not contain 'theme' then make it
    // and default the theme to light
    if (!currentTheme) 
    {
        localStorage.setItem('theme', 'light');
        document.body.dataset.theme = 'light';

        location.reload();
        return;
    }

    // Click listener for the button
    Toggle.addEventListener('click', () => 
    {  
        const { theme } = document.body.dataset;
        const themeTo = theme === 'light' ? 'dark' : 'light';
    
        document.body.dataset.theme = themeTo; // Applys theme (data-theme="")
        localStorage.setItem('theme', themeTo);
        
        if (document.body.dataset.theme == 'light')
        {
            apptheme.style.setProperty('--app-background', 'white');
            apptheme.style.setProperty('--app-background-darker', 'rgba(238, 238, 238, 0.918)');
            apptheme.style.setProperty('--foreground-text', 'black');
            
            $("#theme-toggle .tooltip").html("Switch to dark mode");
            $('#theme-toggle').css('color', 'white');
        }
        
        if (document.body.dataset.theme == 'dark')
        {
            apptheme.style.setProperty('--app-background', 'rgb(67, 60, 70)');
            apptheme.style.setProperty('--app-background-darker', 'rgb(60, 50, 65)');
            apptheme.style.setProperty('--foreground-text', 'white');
            
            $("#theme-toggle .tooltip").html("Switch to light mode");
            $('#theme-toggle').css('color', 'rgb(67, 60, 70)');
        }

        // Transition between changes
        document.body.classList.add('transition');
        setTimeout(() => 
        {
            document.body.classList.remove('transition');
        }, 
        1000)
    });

    // Omg javascript
    Toggle_alt.addEventListener('click', () => 
    {  
        const { theme } = document.body.dataset;
        const themeTo = theme === 'light' ? 'dark' : 'light';
    
        document.body.dataset.theme = themeTo; // Applys theme (data-theme="")
        localStorage.setItem('theme', themeTo);
        
        if (document.body.dataset.theme == 'light')
        {
            apptheme.style.setProperty('--app-background', 'white');
            apptheme.style.setProperty('--app-background-darker', 'rgba(238, 238, 238, 0.918)');
            apptheme.style.setProperty('--foreground-text', 'black');
            
            $("#theme-toggle-side .tooltip").html("Switch to dark mode");
            $('#theme-toggle-side').css('color', 'white');
        }
        
        if (document.body.dataset.theme == 'dark')
        {
            apptheme.style.setProperty('--app-background', 'rgb(67, 60, 70)');
            apptheme.style.setProperty('--app-background-darker', 'rgb(60, 50, 65)');
            apptheme.style.setProperty('--foreground-text', 'white');
            
            $("#theme-toggle-side .tooltip").html("Switch to light mode");
            $('#theme-toggle-side').css('color', 'rgb(67, 60, 70)');
        }

        // Transition between changes
        document.body.classList.add('transition');
        setTimeout(() => 
        {
            document.body.classList.remove('transition');
        }, 
        1000)
    });

    // Listen for change after the theme as been used
    if (document.body.dataset.theme == 'light' || !currentTheme)
    {
        apptheme.style.setProperty('--app-background', 'white');
        apptheme.style.setProperty('--app-background-darker', 'rgba(238, 238, 238, 0.918)');
        apptheme.style.setProperty('--foreground-text', 'black');

        // Tooltip Change
        tool.setAttribute("tip", "Switch to dark mode")
        tool_alt.setAttribute("tip", "Switch to dark mode")

        // Set Icon Color
        $('#theme-toggle').css('color', 'white');
        $('#theme-toggle-side').css('color', 'white');
    }

    if (document.body.dataset.theme == 'dark')
    {
        apptheme.style.setProperty('--app-background', 'rgb(67, 60, 70)');
        apptheme.style.setProperty('--app-background-darker', 'rgb(60, 50, 65)');
        apptheme.style.setProperty('--foreground-text', 'white');

        // Tooltip change
        tool.setAttribute("tip", "Switch to light mode")
        tool_alt.setAttribute("tip", "Switch to light mode")
        
        // Set Icon Color
        $('#theme-toggle').css('color', 'rgb(77, 77, 77)');
        $('#theme-toggle-side').css('color', 'rgb(77, 77, 77)');
    }
}

// Primarly Loads tooltip functions without the need for long css code
function fToolTip ()
{
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
}

// Is useragent using a phone?
function fIsPhone ()
{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
        return true;
        fPrintConsole('Warn', 'orange', 'Useragent is using a Phone we will remove specific content');
    }
    else
        return false;
}

// Function for "Back to top" button
function fBacktoTop ()
{
    $(document).ready(function()
    {
        $('#to-top').fadeOut(); // Start
        
        $(document.getElementsByTagName('content')).scroll(function () 
            {
                if ($(this).scrollTop() > 50) 
                {
                    $('#to-top').fadeIn(); // Start
                } 
                else if ($(this).scrollTop() < 50)
                {
                    $('#to-top').fadeOut(); // Stop
                }
                else
                {
                    $('#to-top').fadeOut(); // Stop
                }
            }
        );
        
        $('#to-top').click(function () // Scroll Animation
            {
                $('content').animate(
                    {
                        scrollTop: 0
                    }, 
                400);
                return false;
            }
        );
    });
}

// Gets the data of a website or a file
function fRetrieveData (Element, Link)
{
    var stored;

    fetch(Link).then(function(response) 
    {
        response.text().then(function(text) 
        {
          stored = text;
          
          if (document.getElementById(Element) == null)
          {
            fPrintConsole('Error', 'red', 'The element "' + Element + '" does not exist on this page')
            return;
          }

          document.getElementById(Element).textContent = stored;          
          fPrintConsole('Success', 'green', 'Retrieved "' + Link + '" and feteched all data from it')
        });
    });
}

// Copy all data from an element
function fCopyallData (Button, Element)
{
    const btn = document.querySelector(Button);

    if (btn == null)
    {
        fPrintConsole('Error', 'red', 'The button "' + Button + '" does not exist on this page')
        return;
    }

    // Button Pressed Listener
    btn.addEventListener('click', () => 
    {  
        var vrText = document.getElementById(Element);

        vrText.select();
        vrText.setSelectionRange(0, 99999);
        
        document.execCommand("copy");

        fPrintConsole('Success', 'green', 'Copied text from CopyAllData(func ...)')
    });
}

// Forces all abilitys to view the websites dev stuff impossible
function fContentHider ()
{
    if (true)
    {
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.onkeydown = function(e)
        {
            if (event.keyCode == 123)
                return false;

            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))
                return false;
            
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
                return false;
            
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
                return false;

            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
                return false;
        }
        
        fPrintConsole('Success', 'green', 'Successfully removed ability to use inputs');
    }
}

// New Property Function that outputs data from a file
// So a folder can be made for all the documentation
function fXMLReadData ()
{
    let el = document.querySelector('article').querySelector('md-ssc')
    var result = null;
    var result_raw = null;
    var link = null;

    if (el.getAttribute('feed') == 'about')
    {
        link = 'feed/about.md'
        result = 'about.md';
        result_raw = 'about'
    }
    
    if (el.getAttribute('feed') == 'setup')
    {
        link = 'feed/setup.md'
        result = 'setup.md';
        result_raw = 'setup'
    }
    
    if (el.getAttribute('feed') == 'custom')
    {
        link = 'feed/custom.md'
        result = 'custom.md'
        result_raw = 'custom'
    }
    
    if (el.getAttribute('feed') == 'backends')
    {
        link = 'feed/backends.md'
        result = 'backends.md'
        result_raw = 'backends'
    }

    if (el.getAttribute('feed') != result_raw)
        return;

    fetch(link)
    .then(response => response.text())
    .then(text => $('[feed="' + result_raw + '"]').html(text))

    // Then use xml data to edit this stuff via github
    var a = document.getElementById('edit-page');
    a.href = "https://github.com/johnymcreed/Themius/edit/Default/docs/feed/" + result;

    if (a.href != null)
        fPrintConsole('Success', 'green', 'Successfully added the href link to the edit page button');

    fPrintConsole('Success', "green", "Successfully added content to the feed " + el.getAttribute('feed') + " from " + link)
}

function fSnowBoard ()
{
    var snowStorm = function(g, f) {
        function k(a, d) {
            isNaN(d) && (d = 0);
            return Math.random() * a + d
        }
    
        function x() {
            g.setTimeout(function() {
                a.start(!0)
            }, 20);
            a.events.remove(m ? f : g, "mousemove", x)
        }
    
        function y() {
            (!a.excludeMobile || !D) && x();
            a.events.remove(g, "load", y)
        }
        this.excludeMobile = this.autoStart = !0;
        this.flakesMax = 128;
        this.flakesMaxActive = 64;
        this.animationInterval = 170;
        this.useGPU = !0;
        this.className = null;
        this.excludeMobile = !0;
        this.flakeBottom = null;
        this.followMouse = 1;
        this.snowColor = ""; // automatic
        this.snowCharacter = "&bull;";
        this.snowStick = 1;
        this.targetElement = null;
        this.useMeltEffect = 1;
        this.usePixelPosition = this.usePositionFixed = this.useTwinkleEffect = !1;
        this.freezeOnBlur = !0;
        this.flakeRightOffset = this.flakeLeftOffset = 0;
        this.flakeHeight = this.flakeWidth = 3;
        this.vMaxX = 2;
        this.vMaxY = 1;
        this.zIndex = 0;
        var a = this,
            q, m = navigator.userAgent.match(/msie/i),
            E = navigator.userAgent.match(/msie 6/i),
            D = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
            r = m && "BackCompat" === f.compatMode || E,
            h = null,
            n = null,
            l = null,
            p = null,
            s = null,
            z = null,
            A = null,
            v = 1,
            t = !1,
            w = !1,
            u;
        a: {
            try {
                f.createElement("div").style.opacity = "0.5"
            } catch (F) {
                u = !1;
                break a
            }
            u = !0
        }
        var B = !1,
            C = f.createDocumentFragment();
        q = function() {
            function c(b) {
                g.setTimeout(b, 1E3 / (a.animationInterval || 20))
            }
    
            function d(a) {
                return void 0 !== h.style[a] ? a : null
            }
            var e, b = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame || c;
            e = b ? function() {
                return b.apply(g, arguments)
            } : null;
            var h;
            h = f.createElement("div");
            e = {
                transform: {
                    ie: d("-ms-transform"),
                    moz: d("MozTransform"),
                    opera: d("OTransform"),
                    webkit: d("webkitTransform"),
                    w3: d("transform"),
                    prop: null
                },
                getAnimationFrame: e
            };
            e.transform.prop = e.transform.w3 || e.transform.moz || e.transform.webkit || e.transform.ie || e.transform.opera;
            h = null;
            return e
        }();
        this.timer = null;
        this.flakes = [];
        this.active = this.disabled = !1;
        this.meltFrameCount = 20;
        this.meltFrames = [];
        this.setXY = function(c, d, e) {
            if (!c) return !1;
            a.usePixelPosition || w ? (c.style.left = d - a.flakeWidth + "px", c.style.top = e - a.flakeHeight + "px") : r ? (c.style.right = 100 - 100 *
                (d / h) + "%", c.style.top = Math.min(e, s - a.flakeHeight) + "px") : a.flakeBottom ? (c.style.right = 100 - 100 * (d / h) + "%", c.style.top = Math.min(e, s - a.flakeHeight) + "px") : (c.style.right = 100 - 100 * (d / h) + "%", c.style.bottom = 100 - 100 * (e / l) + "%")
        };
        this.events = function() {
            function a(c) {
                c = b.call(c);
                var d = c.length;
                e ? (c[1] = "on" + c[1], 3 < d && c.pop()) : 3 === d && c.push(!1);
                return c
            }
    
            function d(a, b) {
                var c = a.shift(),
                    d = [f[b]];
                if (e) c[d](a[0], a[1]);
                else c[d].apply(c, a)
            }
            var e = !g.addEventListener && g.attachEvent,
                b = Array.prototype.slice,
                f = {
                    add: e ? "attachEvent" : "addEventListener",
                    remove: e ? "detachEvent" : "removeEventListener"
                };
            return {
                add: function() {
                    d(a(arguments), "add")
                },
                remove: function() {
                    d(a(arguments), "remove")
                }
            }
        }();
        this.randomizeWind = function() {
            var c;
            c = k(a.vMaxX, 0.2);
            z = 1 === parseInt(k(2), 10) ? -1 * c : c;
            A = k(a.vMaxY, 0.2);
            if (this.flakes)
                for (c = 0; c < this.flakes.length; c++) this.flakes[c].active && this.flakes[c].setVelocities()
        };
        this.scrollHandler = function() {
            var c;
            p = a.flakeBottom ? 0 : parseInt(g.scrollY || f.documentElement.scrollTop || (r ? f.body.scrollTop : 0), 10);
            isNaN(p) &&
                (p = 0);
            if (!t && !a.flakeBottom && a.flakes)
                for (c = 0; c < a.flakes.length; c++) 0 === a.flakes[c].active && a.flakes[c].stick()
        };
        this.resizeHandler = function() {
            g.innerWidth || g.innerHeight ? (h = g.innerWidth - 16 - a.flakeRightOffset, l = a.flakeBottom || g.innerHeight) : (h = (f.documentElement.clientWidth || f.body.clientWidth || f.body.scrollWidth) - (!m ? 8 : 0) - a.flakeRightOffset, l = a.flakeBottom || f.documentElement.clientHeight || f.body.clientHeight || f.body.scrollHeight);
            s = f.body.offsetHeight;
            n = parseInt(h / 2, 10)
        };
        this.resizeHandlerAlt = function() {
            h =
                a.targetElement.offsetWidth - a.flakeRightOffset;
            l = a.flakeBottom || a.targetElement.offsetHeight;
            n = parseInt(h / 2, 10);
            s = f.body.offsetHeight
        };
        this.freeze = function() {
            if (a.disabled) return !1;
            a.disabled = 1;
            a.timer = null
        };
        this.resume = function() {
            if (a.disabled) a.disabled = 0;
            else return !1;
            a.timerInit()
        };
        this.toggleSnow = function() {
            a.flakes.length ? (a.active = !a.active, a.active ? (a.show(), a.resume()) : (a.stop(), a.freeze())) : a.start()
        };
        this.stop = function() {
            var c;
            this.freeze();
            for (c = 0; c < this.flakes.length; c++) this.flakes[c].o.style.display =
                "none";
            a.events.remove(g, "scroll", a.scrollHandler);
            a.events.remove(g, "resize", a.resizeHandler);
            a.freezeOnBlur && (m ? (a.events.remove(f, "focusout", a.freeze), a.events.remove(f, "focusin", a.resume)) : (a.events.remove(g, "blur", a.freeze), a.events.remove(g, "focus", a.resume)))
        };
        this.show = function() {
            var a;
            for (a = 0; a < this.flakes.length; a++) this.flakes[a].o.style.display = "block"
        };
        this.SnowFlake = function(c, d, e) {
            var b = this;
            this.type = c;
            this.x = d || parseInt(k(h - 20), 10);
            this.y = !isNaN(e) ? e : -k(l) - 12;
            this.vY = this.vX = null;
            this.vAmpTypes = [1, 1.2, 1.4, 1.6, 1.8];
            this.vAmp = this.vAmpTypes[this.type] || 1;
            this.melting = !1;
            this.meltFrameCount = a.meltFrameCount;
            this.meltFrames = a.meltFrames;
            this.twinkleFrame = this.meltFrame = 0;
            this.active = 1;
            this.fontSize = 10 + 10 * (this.type / 5);
            this.o = f.createElement("div");
            this.o.innerHTML = a.snowCharacter;
            a.className && this.o.setAttribute("class", a.className);
            this.o.style.color = a.snowColor;
            this.o.style.position = t ? "fixed" : "absolute";
            a.useGPU && q.transform.prop && (this.o.style[q.transform.prop] = "translate3d(0px, 0px, 0px)");
            this.o.style.width = a.flakeWidth + "px";
            this.o.style.height = a.flakeHeight + "px";
            this.o.style.fontFamily = "arial,verdana";
            this.o.style.cursor = "default";
            this.o.style.overflow = "hidden";
            this.o.style.fontWeight = "normal";
            this.o.style.zIndex = a.zIndex;
            C.appendChild(this.o);
            this.refresh = function() {
                if (isNaN(b.x) || isNaN(b.y)) return !1;
                a.setXY(b.o, b.x, b.y)
            };
            this.stick = function() {
                r || a.targetElement !== f.documentElement && a.targetElement !== f.body ? b.o.style.top = l + p - a.flakeHeight + "px" : a.flakeBottom ? b.o.style.top = a.flakeBottom +
                    "px" : (b.o.style.display = "none", b.o.style.bottom = "0%", b.o.style.position = "fixed", b.o.style.display = "block")
            };
            this.vCheck = function() {
                0 <= b.vX && 0.2 > b.vX ? b.vX = 0.2 : 0 > b.vX && -0.2 < b.vX && (b.vX = -0.2);
                0 <= b.vY && 0.2 > b.vY && (b.vY = 0.2)
            };
            this.move = function() {
                var c = b.vX * v;
                b.x += c;
                b.y += b.vY * b.vAmp;
                b.x >= h || h - b.x < a.flakeWidth ? b.x = 0 : 0 > c && b.x - a.flakeLeftOffset < -a.flakeWidth && (b.x = h - a.flakeWidth - 1);
                b.refresh();
                l + p - b.y + a.flakeHeight < a.flakeHeight ? (b.active = 0, a.snowStick ? b.stick() : b.recycle()) : (a.useMeltEffect && (b.active && 3 >
                    b.type && !b.melting && 0.998 < Math.random()) && (b.melting = !0, b.melt()), a.useTwinkleEffect && (0 > b.twinkleFrame ? 0.97 < Math.random() && (b.twinkleFrame = parseInt(8 * Math.random(), 10)) : (b.twinkleFrame--, u ? b.o.style.opacity = b.twinkleFrame && 0 === b.twinkleFrame % 2 ? 0 : 1 : b.o.style.visibility = b.twinkleFrame && 0 === b.twinkleFrame % 2 ? "hidden" : "visible")))
            };
            this.animate = function() {
                b.move()
            };
            this.setVelocities = function() {
                b.vX = z + k(0.12 * a.vMaxX, 0.1);
                b.vY = A + k(0.12 * a.vMaxY, 0.1)
            };
            this.setOpacity = function(a, b) {
                if (!u) return !1;
                a.style.opacity =
                    b
            };
            this.melt = function() {
                !a.useMeltEffect || !b.melting ? b.recycle() : b.meltFrame < b.meltFrameCount ? (b.setOpacity(b.o, b.meltFrames[b.meltFrame]), b.o.style.fontSize = b.fontSize - b.fontSize * (b.meltFrame / b.meltFrameCount) + "px", b.o.style.lineHeight = a.flakeHeight + 2 + 0.75 * a.flakeHeight * (b.meltFrame / b.meltFrameCount) + "px", b.meltFrame++) : b.recycle()
            };
            this.recycle = function() {
                b.o.style.display = "none";
                b.o.style.position = t ? "fixed" : "absolute";
                b.o.style.bottom = "auto";
                b.setVelocities();
                b.vCheck();
                b.meltFrame = 0;
                b.melting = !1;
                b.setOpacity(b.o, 1);
                b.o.style.padding = "0px";
                b.o.style.margin = "0px";
                b.o.style.fontSize = b.fontSize + "px";
                b.o.style.lineHeight = a.flakeHeight + 2 + "px";
                b.o.style.textAlign = "center";
                b.o.style.verticalAlign = "baseline";
                b.x = parseInt(k(h - a.flakeWidth - 20), 10);
                b.y = parseInt(-1 * k(l), 10) - a.flakeHeight;
                b.refresh();
                b.o.style.display = "block";
                b.active = 1
            };
            this.recycle();
            this.refresh()
        };
        this.snow = function() {
            var c = 0,
                d = null,
                e, d = 0;
            for (e = a.flakes.length; d < e; d++) 1 === a.flakes[d].active && (a.flakes[d].move(), c++), a.flakes[d].melting &&
                a.flakes[d].melt();
            c < a.flakesMaxActive && (d = a.flakes[parseInt(k(a.flakes.length), 10)], 0 === d.active && (d.melting = !0));
            a.timer && q.getAnimationFrame(a.snow)
        };
        this.mouseMove = function(c) {
            if (!a.followMouse) return !0;
            c = parseInt(c.clientX, 10);
            c < n ? v = -2 + 2 * (c / n) : (c -= n, v = 2 * (c / n))
        };
        this.createSnow = function(c, d) {
            var e;
            for (e = 0; e < c; e++)
                if (a.flakes[a.flakes.length] = new a.SnowFlake(parseInt(k(6), 10)), d || e > a.flakesMaxActive) a.flakes[a.flakes.length - 1].active = -1;
            a.targetElement.appendChild(C)
        };
        this.timerInit = function() {
            a.timer = !0;
            a.snow()
        };
        this.init = function() {
            var c;
            for (c = 0; c < a.meltFrameCount; c++) a.meltFrames.push(1 - c / a.meltFrameCount);
            a.randomizeWind();
            a.createSnow(a.flakesMax);
            a.events.add(g, "resize", a.resizeHandler);
            a.events.add(g, "scroll", a.scrollHandler);
            a.freezeOnBlur && (m ? (a.events.add(f, "focusout", a.freeze), a.events.add(f, "focusin", a.resume)) : (a.events.add(g, "blur", a.freeze), a.events.add(g, "focus", a.resume)));
            a.resizeHandler();
            a.scrollHandler();
            a.followMouse && a.events.add(m ? f : g, "mousemove", a.mouseMove);
            a.animationInterval =
                Math.max(20, a.animationInterval);
            a.timerInit()
        };
        this.start = function(c) {
            if (B) {
                if (c) return !0
            } else B = !0;
            if ("string" === typeof a.targetElement && (c = a.targetElement, a.targetElement = f.getElementById(c), !a.targetElement)) throw Error('Snowstorm: Unable to get targetElement "' + c + '"');
            a.targetElement || (a.targetElement = f.body || f.documentElement);
            a.targetElement !== f.documentElement && a.targetElement !== f.body && (a.resizeHandler = a.resizeHandlerAlt, a.usePixelPosition = !0);
            a.resizeHandler();
            a.usePositionFixed = a.usePositionFixed &&
                !r && !a.flakeBottom;
            if (g.getComputedStyle) try {
                w = "relative" === g.getComputedStyle(a.targetElement, null).getPropertyValue("position")
            } catch (d) {
                w = !1
            }
            t = a.usePositionFixed;
            h && (l && !a.disabled) && (a.init(), a.active = !0)
        };
        a.autoStart && a.events.add(g, "load", y, !1);
        return this
    }(window, document);
}

function fCustomContext()
{
    let text = document.querySelector('body');
    let menu = document.querySelector('.copy-menu');
    let copy = document.querySelector('.copy');
    let reload = document.querySelector('.reload');
    let foward = document.querySelector('.foward');
    let back = document.querySelector('.back');
    
    let fullscreen = document.querySelector('.fullscreen');

    let gridding = document.querySelector('.gridlayout');
    let offgrid = document.querySelector('.gridoff');
    
    var apptheme = document.querySelector(':root');
    var copyText;
    
    gridding.addEventListener('click', () => {
        apptheme.style.setProperty('--border-color', '1px solid var(--foreground-text)')
    });

    offgrid.addEventListener("click", () => {
        apptheme.style.setProperty('--border-color', '1px solid transparent')
    });

    fullscreen.addEventListener('click', () => {
        var el = document.body;
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

        if (requestMethod) 
        { // Native full screen.
            requestMethod.call(el);
        } 
        else if (typeof window.ActiveXObject !== "undefined") 
        { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) 
            {
                wscript.SendKeys("{F11}");
            }
        }
        return false
    });

    foward.addEventListener('click', () => {
        history.forward();
    });

    back.addEventListener('click', () => {
        history.back()
    });

    reload.addEventListener('click', () => {
        location.reload();
    });
    
    text.addEventListener('mousedown', (e) => 
    {
        copyText = window.getSelection().toString();
    })
    
    window.oncontextmenu = (e) => 
    {
        e.preventDefault();
        menu.style.display = 'inline-block';
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        menu.style.left = mouseX + 'px';
        menu.style.top = mouseY + 'px';
    }
    
    window.addEventListener('click', (e) => 
    {
        close(e);
    })
    
    const close = (e, trigger) => 
    {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const menuWidth = menu.clientWidth;
        const menuHeight = menu.clientHeight;
        const menuLeft = Number(menu.style.left.replace('px', ''));
        const menuTop = Number(menu.style.top.replace('px', ''));
    
        if(mouseX < menuLeft || mouseX > menuLeft + menuWidth || mouseY < menuTop || mouseY > menuTop + menuHeight || !trigger) {
            menu.style.display = 'none';
        }
    }

    copy.addEventListener('click', (e) => 
    {
        const el = document.createElement('textarea');
        el.innerHTML = copyText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        close(e, false);
    })
}

// Load Content
init();
