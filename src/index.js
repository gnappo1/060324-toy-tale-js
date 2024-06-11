//! Global Variables
let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const target = document.querySelector("#toy-collection")

//! Callback Helpers
function fetchToys() {
  return fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toys => toys.forEach(toy => {
    // 1. build the required HTML structure
    //!================ APPROACH 1 =================================

    // target.innerHTML += `<div class="card">
    //   <h2>${toy.name}</h2>
    //   <img src=${toy.image} class="toy-avatar" alt="${toy.name}"/>
    //   <p>${toy.likes} Likes</p>
    //   <button class="like-btn" id=${toy.id}>Like ❤️</button>
    // </div>`
    // const toyBtn = document.querySelector(`#${toy.id}`)
    // toyBtn.addEventListener("click", (e) => {})



    //!================ APPROACH 2 - IKEA STYLE =================================
    // 2. Decide in which EXISTING html node to append each new toy tile
    const div = document.createElement("div")
    div.className = "card"
    // div.classList.add("card")
    const h2 = document.createElement("h2")
    h2.innerText = toy.name
    const img = document.createElement("img")
    img.src = toy.image
    img.alt = toy.name
    img.classList.add("toy-avatar")
    const p = document.createElement("p")
    p.innerText = `${toy.likes} Likes`
    const button = document.createElement("button")
    button.classList.add("like-btn")
    button.id = toy.id
    button.innerText = "Like ❤️"
    button.addEventListener("click", (e) => {
      //! we need to update the like number in the <p> tag (ONLY THE NUMBER!!!!)
      console.log("NONSENSE!!!")
      p.innerText = `${++toy.likes} Likes`
    })

    div.append(h2, img, p, button)
    target.append(div)
    // 3. Append each toy in there
  }))

}

//! Event Listeners 
addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});


//! Start the logic
fetchToys()

// });



//TODO
// FORM SUBMISSION STEPS (aka submit event callback steps)

// 1. NO PAGE REFRESHES EVEEEEEEER -> e.preventDefault()
// 2. DATA VALIDATION: conditional statement saying "if any of the following values is missing, then alert the user and return"
// 3. Package data into an object and pass the object to whomever needs it! DON'T FORGET ABOUT ID GENERATION!!!
// 4. Invoke the callback renderToy and pass the newly packaged object to it
// 5. Empty the form

//TODO BONUS
//! Include the fetch call to add PERSISTANCE - optimistically or pessimistically, up to you!