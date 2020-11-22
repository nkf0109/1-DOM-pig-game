/**
 * DOM and DOM Manipulation
 */

 // 1. DOM (Document Object Model)?
 //     * Representation of an HTML document
 //     * There will be a DOM object for each pair of tags

 // Example:
/*
  <body>
    <section>
      <p>A paragraph with a 
          <a>link</a>
      </p>
      <p>Another paragraph.</p>
    </section>
    
    <section>
      <img src="x.jpg" alt="The DOM"></img>
    </section>
  </body>
*/

// {/* <body>
//     <h1>DOM Demo</h1>

//     <p id="greeting"></p>

//     <h3 class="large greeting">Large greeting!</h3>
// </body> */}

// Ask user to input a name
var person = prompt("Please enter your name");

if (person != null) {
    // document.getElementById('greeting')      =>      Get the HTML element
    document.getElementById('greeting').innerHTML = "Hello" + person + "! Are you hungry ah?";
}

var h3Array = document.getElementsByClassName("large greeting");
h3Array[0].innerHTML = "Hello" + person + "! Welcome back!";
