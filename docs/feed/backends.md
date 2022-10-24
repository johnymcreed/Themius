# Introduction
This will be the biggest page out of all the pages from this docs website, it contains a lot of how the website functions and almost every classing element
the website contains from `tags` to `scripts` to give you almost every detail of the website.

Unless you understand `CSS`, `HTML`, or `PHP` I would recommend not using this page for anything as it will not
give you any benifents.

<br>

# root
Not used for a lot other than Global css variables for the website mainly to give everything an automation with changing through themes like
`dark-mode` or `light-mode` which both have custom variables in `:root`.

<br>

# ng-star-inserted
`ng-star-inserted` is the websites global class used for everything, like `app-tree.ng-star-inserted` or from simple things like
div elements or text elements.

<br>

# app-root
Based off `:root` but is a tag element that presents any elements in it with global effects from several classes like `app-theme`
and `body` with there specific classings respectfully.

<br>

# router-outlet

Router outlet is literally its name, it presents the outlet of the websites router (i believe). im not 100% sure if that is what is completely does
but i know its something like that.

<br>

# app-login
Used before the case that you are not logged in to ECHO which then provides the interface with a login screen. This is the same for any Account until they
have logged into the website.

<br>

# app-after-login
Used during the case that you have logged in to ECHO with your account and provides the interface for you. Note this case can switch based on your account status
these can be the following: <br>
&ensp; `Student` - Simple access (Allows commenting, editing, submitting) <br>
&ensp; `Teacher` - Advanced access (Allows creation of work, editing, kicking of students, grading, ect) <br>
&ensp; `Administrator` - Complete access (Allows everything)

<br>

# isPasted
`isPasted` is a paste detection system created within `comments-ct` and `fr-element` that gives a div element an id
`#IsPasted` that teachers can see when submitted even if edited after being pasted.

