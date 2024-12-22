> The DOM (Document Object Model) is a programming interface that lets JavaScript access and manipulate HTML and CSS of a webpage.DOM is automatically created by the browser when the html loads

IMPORTANT TO NOTE : The DOM is not the part of javascript as per the ecmascript standards. There is nothing as DOM in javascript

> The DOM and DOM methods are actually the part of webAPI's, The web api's are like the libraries that browser impliement and that we can acess from the javaScript code

> Basic DOM Tree Structure:
> css
> Copy code
> Document
> └── html

       ├── head
       │    ├── title
       │    └── meta
       └── body
            ├── header
            │    └── h1
            ├── main
            │    ├── section
            │    │    └── p
            │    ├── article
            │    │    ├── h2
            │    │    └── p
            │    └── div
            └── footer

Here's a shorter and easier explanation of the DOM tree nodes:

- Document: The entire HTML document,This serves as an entry point in the DOM.

- html: The first child element of Document and is the root element of the document.
  children's of head > meta: Document metadata like encoding or author. > title: The title of the document (shown in the browser tab).

  Children's of html

  > head: Contains metadata like the title and external file links.
  > body: Contains the visible content (headers, paragraphs, divs).

---

// An event listener is a method used to detect and respond to specific events on an element, such as a 'click' or 'dblclick'. It requires two arguments: the first specifies the type of event to listen for, and the second is the callback function that defines the actions to perform when the event occurs.
