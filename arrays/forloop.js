var colors = ["red", "orange", "yellow", "green"];
window.setTimeout(function() {
    for(var i = 0; i < colors.length; i++) {
        alert(colors[i]);
    }
},500);





// note:
// Chrome browser behaves a little strangely when using alert, prompt, or confirm functions. It doesn't display the HTML on the page until after the popup has been closed. This is problematic since our HTML contains instructions for the user to be able to use the app we're building.

// You can avoid this by wrapping your JS code in the following setTimeout function:
// window.setTimeout(function() {
//     // put all of your JS code from the lecture here
// },500);99