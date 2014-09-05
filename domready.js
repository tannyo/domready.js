// domready.js | v0.2
//
// DOMContentLoaded event handler. Works for browsers that don't support the DOMContentLoaded event.
//
// MIT licensed
// Modification Log:
// Date     Initial Description
// 26 May 2008 TKO Created by Tanny O'Haley
// 18 Mar 2014 TKO Changed to create only one global variable, domReady.
// 03 Sep 2014 TKO Ran through JSLint and cleaned up code.

/*global addEvent, escape, unescape */

// Create the domReady event handler once.
if (typeof domReady !== "function") {
  var domReady = (function () {
    // Array of domReady event handlers.
    var events = {}, domReadyID = 1, bDone = false;

    // Function that adds domReady listeners to the array.
    function add(handler) {
      // handler must be a function
      if (typeof handler !== "function") {
        return;
      }

      // Assign each event handler a unique ID. If the handler has an ID, it
      // has already been added to the events object or been run.
      if (!handler.$$domReadyID) {
        handler.$$domReadyID = domReadyID++;
        // store the event handler in the hash table
        events[handler.$$domReadyID] = handler;

        // If the domReady event has happened, run the function.
        if (bDone) {
          handler();
        }
      }
    }

    // Function to process the domReady events array.
    function run() {
      var i;

      // quit if this function has already been called
      if (bDone) {
        return;
      }

      // Flag this function so we don't do the same thing twice
      bDone = true;

      // iterates through array of registered functions
      for (i in events) {
        if (events.hasOwnProperty(i)) {
          events[i]();
        }
      }
    }

    function init() {
      // If addEventListener supports the DOMContentLoaded event.
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", run, false);
      }

      // Just in case window.onload happens first, add it to onload using an available method.
      if (window.addEventListener) {
        window.addEventListener("load", run, false);
      } else if (window.attachEvent) {
        window.attachEvent("onload", run);
      }


      /* for windows Internet Explorer */
      /*@cc_on
        @if (@_win32 || @_win64)
        document.write("<script id=__ie_onload defer src=\"//:\"><\/script>");
        var script = document.getElementById("__ie_onload");
        script.onreadystatechange = function () {
          if (this.readyState == "complete") {
            run(); // call the onload handler
          }

          // hack: calling 'children' property changes node's readyState from 'loaded' to complete
          // (if script was loaded normally) or to 'loading' - if error detected. This will throw an
          // error if the script loaded successfully and not if there is an error.
          try {
            script.children;
          } catch(e) {
          }
        };
        @end
      @*/
    }

    init();
    return add;
  }());
}
