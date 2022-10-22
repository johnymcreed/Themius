# Introduction
This page doesn't contain a lot because there is not a lot i can explain here lol, to put it simply
you are allowed to edit anything in the page until i figure out a way to add different customizations you could add if you
felt like you didn't like the RGB or didn't like the font or ect.

Just edit stuff from the `:root` like provided

<!-- As you can imagine this also cannot be changed -->
<pre class="prettyprint lang-css"><script type="text/plain" class="pre-script">:root
{
   /* Background Elements */
   --ng-background: var(--background);
   --ng-card-background: var(--card-background);
   
   /* Link Color */
   --ng-link-color: var(--link-color);
   
   /* Fonts */
   --ng-default-font: 'Source Sans Pro', sans-serif; /* Overrides Default ECHO Font */
   /* Other Optional Fonts:
        - 'Roboto Condensed', sans-serif
        - 'Raleway', sans-serif
   */
   
   /* unused cuz i didn't break them this time */
   /*--ng-fab-font: "Font Awesome 5 Brands";
   --ng-far-font: "Font Awesome 5 Pro";*/
   
   /* Non-Overrided Colors */
   --ng-linear-gradient: #235a7c 0%, #5c5ca3 52%, #367683 100%;
   --ng-white: white;
   --ng-black: black;
   --ng-grey: #3e3e3e;
   --ng-tree-node-bg: #727272b0;
   --ng-paste-color: #6c6c6d;
   
   /* Visuals */
   --ng-visually-removed: none;
   --ng-visually-hidden: hidden;
   --ng-visually-visible: visible;
   
   /* RGB-Settings; Color Palette */
   --ng-rgb-ease-fit: 30s; /* length in animation */
   --ng-rgb-fit: 50s; /* time till the animation repeats */
   --ng-rgb-ts-colors: #ff24006e, #e81d1d52, #e8b71d59, #bce81d59, #1de8404f, #1ddde866, #2b1de857, #dd00f354, #dd00f378;
   --ng-rgb-colors: #c91c00, #c02d2d, #c59b17, #b8bc0e, #1c9a31, #269298, #2b1de8, #a518b4, #90199c;
}</script></pre>

Note that elements like `--background` are provided by ECHO due to stylus putting these styles at the bottom of the page
which allows me to use the websites already added :root stuff.