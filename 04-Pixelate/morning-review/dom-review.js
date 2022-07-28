/*  
document.getElementById('foo')
document.getElementByClassName('col-12')
document.getElementsByTagName('p')
document.querySelector('.q') // returns first element it finds with class name q
document.querySelectorAll('div.container') // returns all divs with class of container


// Don't forget that these methods return array-like objects!
const allDivs = Array.from(document.getElementsByTagName('div'))
allDivs.forEach(div =>  etc... ) // Yay! This will be fine!
*/


/*
 1. Go to Wikipedia page
 2. First challenge
   - console.dir(document.querySelectorAll('p'))
   
   */
   
  /*
Extra Challenges
*/

// -----------------------------------------------------

// Turn every <p> node's text green
const allParagraphElements = document.querySelectorAll("p"); // Select all <p>.
const asArray = Array.from(allParagraphElements); // Turn that array-like object in to a REAL array.
asArray.forEach(pElement => { // Loop through ...
  pElement.style.color = "green"; // ... update the inline CSS style for each element to have color:green;
});

// -----------------------------------------------------

// Change every <a> node so that it will link to the page for Star Wars.
const allLinkElements = Array.from(document.querySelectorAll("a")); // Combining some steps from previous example.
allLinkElements.forEach(a => {
  a.href = "https://en.wikipedia.org/wiki/Star_Wars"; // Setting the "href" attribute of each <a>.
});

// -----------------------------------------------------

// Make the page much cuter by replacing the main picture in the article with a picture of a puppy.

// This image does not have its own ID or class, so this is the most reliable way of selecting I could find.
// There is a <td> element it has as a parent that has the class .infobox-image,
// I use that and ask for the <img> element found as a descendant.
const mainImage = document.querySelector(".infobox-image img");
// Update the <img src> attribute.
mainImage.src = "https://learndotresources.s3.amazonaws.com/workshop/5a7b63826759b0000495a518/dom-cody.png";

// -----------------------------------------------------

/*
    Extra challenging!
    Write a function that will search the DOM tree recursively for all instances of the term "DOM", 
    and replace it with the term "KITTEN".
*/

// This recursive function will first be called with the body element/node of the page, and recursive visit child nodes.
const replaceTextAndLookAtChildren = (domNode) => {


    if (domNode.nodeName === "#text") {
        domNode.textContent = domNode.textContent.replaceAll("DOM", "Kitten");
    }
    const thisElementsChildNodes = Array.from(domNode.childNodes);

    thisElementsChildNodes.forEach(childNode => { 
        replaceTextAndLookAtChildren(childNode); 
    });

};

// I start my recursive traversal at the top node of the visual page, and let the recursive calls eventually visit every node on the page.
replaceTextAndLookAtChildren(document.body);
  