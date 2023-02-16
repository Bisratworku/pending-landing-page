let match = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
const input = document.getElementById("input");
const buttion = document.querySelector(".buttion")
const hide = document.querySelector(".hide")
const email = document.querySelector(".email")
function error () {
     if(input.value.match(match) == null) {
        email.classList.add("red");
        hide.classList.remove("hide")
        hide.classList.add("show")
        input.value = null
     }else {
        email.classList.remove("red");
        hide.classList.add("hide")
        hide.classList.remove("show")
     }
    
}



buttion.addEventListener("click", error)
