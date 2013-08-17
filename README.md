# CSSReload.JS

Script that reloads all CSS page in a given time interval.
This time interval can be setted on setup function, if nothing is setted, the script will ask to user how long time he want the refresh page.

## Why use?

The idea of this script is to improve your workflow, with it you will have your page CSS automatically updated, so you can have the experience of "live editing" without installing anything on your editor or on your browser.

## How it works?

This script fetches all the CSS files that you are using on the page (note that the file must contain the ```rel="stylesheet"``` attribute.

Upon finding the CSS files, it will trigger a counter with a certain time period (which can be set by you) and will check whether there were changes in the file, and will update the page with the modifications (if any), preventing you from getting refreshing the page every time you want to see a change in style.

This script does not use jQuery, so it is very light, simple, and can be used without the worry of having to load the entire library.

## How to use?
There are several ways to use this script, here are two ways:

* Load the cssreload.js file in anywhere of your page, you can use something like:
```<script src="cssreload.js" type="text/javascript" ></script>```

* Place the source code, along with scripts on your page and use the function ```CssReload.setup()```  when you want update automatically the page style.

**Remember to pass the parameter in the setup function, which must be a number that represents the refresh interval in seconds.**
