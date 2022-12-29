let match = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
function error() {
    const div = document.getElementById("div");//this is the div that contains input.
    const input = document.getElementById("input").value;//and this is the input field
    if(match.test(input) == false) {
        div.style.border = "1px solid hsl(354, 100%, 66%)";
        let element = document.createElement("div");
        element.id = "click";
        div.appendChild(element);
        document.getElementById("click").innerText = "Please Provide valid email addredss"
    }
}