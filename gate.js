// 1. Create an HTML page with:
// - A `<textarea>` input field.
// - A `<p>` tag showing "0 characters" by default, since the `textarea` field is empty.

// **Task**:
// As the user types in the <textarea>, update the <p> tag to show the current character count in real time. 

// let textarea = document.getElementById("textarea");

// textarea.addEventListener("input", function(e){
//   e.preventDefault();
//   let paragraph = document.getElementById("paragraph")
//   let count = textarea.value.split("").length;
//   paragraph.innerHTML = `<h4>${count} characters</h4>`
// //   console.log(count)
// })


const textarea = document.getElementById("textarea");
const paragraph = document.getElementById("paragraph");

textarea.addEventListener("input", () => {
  const count = textarea.value.length; // Simplified the character count calculation
  paragraph.textContent = `${count} characters`; // Use textContent for plain text
});


// let c = 0;
// textarea.addEventListener("input", function(e){
//     c++;
//     document.querySelector("#paragraph").textContent = c;
// })


// let container = document.querySelector(".container")
// let button = document.getElementById("button")
// button.addEventListener("click", function(e){
//    e.preventDefault()
//    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
//    let random = Math.floor(Math.random() * colors.length);
//    container.style.backgroundColor = colors[random];
// //    console.log(random)

// })
// console.log()