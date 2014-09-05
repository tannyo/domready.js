# Support domReady for New and Old Browsers

A domReady function handles DOMContentLoaded events in your browser. The DOMContentLoaded event allows you to add behavior or change the HTML of a page after the HTML has loaded and before the onload event which happens after the complete page, including images has loaded. This allows you to add menu, tree behavior, AJAX functionality or anything else without having to wait for all items on a page to load. You may have experienced the need for a DOMContentLoaded event on a page that includes drop down menus or a tabbed interface which doesn't work until all images have loaded. Using the DOMContentLoaded event allows you to add the behavior before images and objects have loaded, giving a better user experience. The domReady function is similiar to the jQuery ready method without requiring jQuery.

If you do not have to support old browsers, really IE 5.5-8 then use a DOMContentLoaded event with:

    document.addEventListener('DOMContentLoaded', function(){
      // Your code here.
    });

## Usage

    <script src="path/to/domready.min.js"></script>

To add a domReady event in your javascript call:

    domReady(function() {
      // Your code here.
    });

## Browser Support

Tested in the latest versions of Chrome, Firefox, Safari, IE 5.5 - 11, iOS, and Android.

## Issues

Have a bug? Please create an [issue](https://github.com/tannyo/domready.js/issues) here on GitHub!

## Contributing

Want to contribute? Great! Just fork the project, make your changes and open a [pull request](https://github.com/tannyo/domready.js/pulls).

## Changelog
* 0.10 26 May 2008 TKO Created by Tanny O'Haley
* 0.15 18 Mar 2014 TKO Changed to create only one global variable, domReady.
* 0.20 03 Sep 2014 TKO Ran through JSLint and cleaned up code.

## License

The MIT License (MIT)

Copyright (c) 2014 [Tanny O'Haley](http://tanny.ica.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
