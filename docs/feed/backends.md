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

<br>

# disabled
`disabled` is a bool statement that if true/false can disable buttons, text editors or inputs within ECHO which is used
during the case that an assignment is pass its due date or a specific field is suppose to be disabled.

<br>

# app-[dark/light]-theme
Will return a theme of choice either `app-dark-theme` or `app-light-theme` that changes the entire websites core theme from dark or light
there are also sub themes like `--primary-default` which is the sub theme you choose in the /theme/ page.

<br>

# Agilix 
**Agilix** is the leading company that hosts ECHO and several branches of it from high school to high school and acts as the host for all of it, 
this means its the primary source and includes several branches itself.
<br>
<br>
[Agilix Home-page](https://agilix.com/) <br>
[Agilix Api Server](https://api.agilixbuzz.com/) <br>
[Agilix Echo NTN](https://echo-ntn.org/)
<br>
<br>
Here is several Branches of this domain in use:
<details>
  <table class="common-table">
    <tbody>
        <tr>
            <td>iaris.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>vwcs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 24, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>wdmcs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>ialjh.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 27, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>bulldogtech.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 24, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>centralcoastnewtech.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 23, 2017</span></div>
            </td>
        </tr>
        <tr>
            <td>wwis.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>rogershs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>August 2, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>rossbeatty.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>jhspblacademy.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>wda.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>bendigo.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>June 26, 2017</span></div>
            </td>
        </tr>
        <tr>
            <td>bellevillenewtech.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>tcs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>alpenahs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 16, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 2, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>napahigh.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>polaristechcharter.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>October 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>gradebook.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 19, 2020</span></div>
                <div><span>Date of the last update:</span> <span>November 12, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>lakecityhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 21, 2017</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>lps.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 18, 2019</span></div>
                <div><span>Date of the last update:</span> <span>May 24, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>antiochparent.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>July 13, 2020</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>clevelandhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>September 23, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>silveradoms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 26, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>rms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 13, 2020</span></div>
                <div><span>Date of the last update:</span> <span>April 13, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>avonms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 17, 2018</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>canyonhillsms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>parramarisths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>jeffcoparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>danvillems.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>bellepointcenter.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 8, 2020</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>dashboards.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 20, 2021</span></div>
                <div><span>Date of the last update:</span> <span>September 30, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>burkehs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 25, 2018</span></div>
                <div><span>Date of the last update:</span> <span>March 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>atcenter.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>March 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>hhcap.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>July 4, 2022</span></div>
                <div><span>Date of the last update:</span> <span>October 30, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>ypsilantint.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 23, 2017</span></div>
            </td>
        </tr>
        <tr>
            <td>lansingparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 21, 2021</span></div>
                <div><span>Date of the last update:</span> <span>June 21, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>zebra.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>June 21, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>cedarsinta.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 2, 2020</span></div>
                <div><span>Date of the last update:</span> <span>March 2, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>westwoodhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>September 24, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>nvusdparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 19, 2018</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>meridianhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>July 22, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>ntam.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>nti.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 16, 2019</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>bluegrassms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>scvi.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>reynoldsburgparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 26, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>laacademiacharter.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 23, 2019</span></div>
                <div><span>Date of the last update:</span> <span>September 23, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>tricreek.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>April 13, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>renaissance.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 21, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>wwhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>June 8, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>sfnths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 2, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>buchtelclc.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 21, 2019</span></div>
                <div><span>Date of the last update:</span> <span>October 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>lrms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>vanwertms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>July 22, 2019</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>techvalleyhigh.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>arkadelphiaparent.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 3, 2022</span></div>
                <div><span>Date of the last update:</span> <span>November 11, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>chandler.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 18, 2017</span></div>
                <div><span>Date of the last update:</span> <span>August 20, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>blythevillems.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 24, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>lasgs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 28, 2018</span></div>
                <div><span>Date of the last update:</span> <span>March 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>mccorkle.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 29, 2018</span></div>
                <div><span>Date of the last update:</span> <span>October 21, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>zionbths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>comalisd.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 6, 2021</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>wsoi.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 2, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>snths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 20, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>goshenschools.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 21, 2019</span></div>
                <div><span>Date of the last update:</span> <span>December 16, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>fsmilitaryacademy.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 24, 2021</span></div>
                <div><span>Date of the last update:</span> <span>May 24, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>pieperranchms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 26, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>lpamesquite.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>nams.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 27, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>nexgen.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>brown-episd.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>mnths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>eastbayia.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 26, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>vanwerths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>arkadelphiahs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>pddvca.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>February 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>les.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>March 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>thelinc.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 21, 2017</span></div>
                <div><span>Date of the last update:</span> <span>March 2, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>pinckneynt.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 25, 2018</span></div>
                <div><span>Date of the last update:</span> <span>March 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>explorespace.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>wwps.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>hams.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>September 28, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>fischerms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 2, 2020</span></div>
                <div><span>Date of the last update:</span> <span>November 2, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>stage-dashboards.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 12, 2022</span></div>
                <div><span>Date of the last update:</span> <span>May 14, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>dekalbfusion.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>September 28, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>cassopolispd.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 13, 2020</span></div>
                <div><span>Date of the last update:</span> <span>April 13, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>lakelandparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 26, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>pbhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 29, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>wwes.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>June 8, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>mths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 27, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>nte.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 16, 2019</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>merps.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 21, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>newtechhigh.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 5, 2016</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>episdgs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>May 24, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>www.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 5, 2019</span></div>
                <div><span>Date of the last update:</span> <span>June 15, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>gnta.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 21, 2019</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>wwpn.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>philippims.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 5, 2016</span></div>
                <div><span>Date of the last update:</span> <span>July 23, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>chandlerelem.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 17, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>lsi.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 27, 2019</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>echo.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>scottsburghs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 5, 2016</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>samueli.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>clive.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>December 6, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>cingsteamhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>wintonwoodsparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 24, 2019</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>acmechs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 18, 2019</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>davinci.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>February 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>amcanhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 23, 2017</span></div>
            </td>
        </tr>
        <tr>
            <td>hillcresths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 29, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>thunderbayjh.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 16, 2019</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>excelsiorspringshs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 27, 2020</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>arvadahs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 23, 2019</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>towles.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>cassopolishs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>wwms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>pftsta.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 27, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>trumannps.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 22, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>riverschool.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 24, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 19, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>satellite.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>userspace.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>January 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>stilwell.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>nto.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>blythevillehs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>samadamses.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>gtelem.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 17, 2018</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>pdwdmcs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 18, 2017</span></div>
                <div><span>Date of the last update:</span> <span>July 23, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>bellselem.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 13, 2020</span></div>
                <div><span>Date of the last update:</span> <span>April 13, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>alleghanyhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>February 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>cassopolisms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>gradebookhelp.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>July 16, 2020</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>waggonerroad.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>September 28, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>lowellms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 24, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>compassa.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 5, 2016</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>anths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 31, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>bridgesacademy.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>indian-hills.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>goshenms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>July 23, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>napajes.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>December 16, 2019</span></div>
                <div><span>Date of the last update:</span> <span>December 16, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>hmes.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 28, 2018</span></div>
                <div><span>Date of the last update:</span> <span>October 22, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>alleghanyparents.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>February 25, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>srhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>dekalbhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>shs-mpusd.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 24, 2017</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>encoreacademy.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>April 26, 2021</span></div>
                <div><span>Date of the last update:</span> <span>December 7, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>parentdomain.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 25, 2017</span></div>
                <div><span>Date of the last update:</span> <span>May 28, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>the9ximpact.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 18, 2019</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>goshenhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>November 2, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>modelelementary.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 29, 2018</span></div>
                <div><span>Date of the last update:</span> <span>January 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>viking.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>January 25, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>lpaplano.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>August 17, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>lowell-hs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>March 2, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>everetths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>December 16, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>wintonwoods.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>June 8, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>meridianjhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 22, 2018</span></div>
            </td>
        </tr>
        <tr>
            <td>goshems.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>December 16, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>ccnth.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 21, 2019</span></div>
                <div><span>Date of the last update:</span> <span>June 21, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>hillcountrycollege.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 25, 2021</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>hhca.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 3, 2022</span></div>
                <div><span>Date of the last update:</span> <span>November 11, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>lakelandms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>August 26, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>leadingedgehs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>August 26, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>newtechccms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 19, 2018</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>acms.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>May 27, 2019</span></div>
                <div><span>Date of the last update:</span> <span>May 27, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>bonsallhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>June 24, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>bellearlycollege.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 28, 2020</span></div>
                <div><span>Date of the last update:</span> <span>September 28, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>haldane-ems.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 21, 2019</span></div>
                <div><span>Date of the last update:</span> <span>December 7, 2020</span></div>
            </td>
        </tr>
        <tr>
            <td>vanwertes.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>July 22, 2019</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>help.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>cnths.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>March 27, 2017</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>hscrosscounty.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>cedarhs.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>September 27, 2021</span></div>
                <div><span>Date of the last update:</span> <span>September 27, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>the9xparent.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>November 18, 2019</span></div>
                <div><span>Date of the last update:</span> <span>November 18, 2019</span></div>
            </td>
        </tr>
        <tr>
            <td>crestview.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>eta.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>October 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>woodsacademy.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 26, 2018</span></div>
                <div><span>Date of the last update:</span> <span>April 26, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>etheltaylor.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 21, 2021</span></div>
                <div><span>Date of the last update:</span> <span>June 21, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>episd.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>August 26, 2019</span></div>
                <div><span>Date of the last update:</span> <span>May 23, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>coppell.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>January 23, 2017</span></div>
                <div><span>Date of the last update:</span> <span>June 21, 2021</span></div>
            </td>
        </tr>
        <tr>
            <td>greenvilleec.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>July 4, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>carolina.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>February 25, 2019</span></div>
                <div><span>Date of the last update:</span> <span>August 15, 2022</span></div>
            </td>
        </tr>
        <tr>
            <td>amaceosmith.echo-ntn.org</td>
            <td>
                <div><span>First seen at:</span> <span>June 26, 2017</span></div>
                <div><span>Date of the last update:</span> <span>October 3, 2022</span></div>
            </td>
        </tr>
    </tbody>
  </table>
</details>
