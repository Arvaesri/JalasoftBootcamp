


function validateForm(){
    const email = document.getElementById("t2");

    email.addEventListener("input", (event) => {
        if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!(JS message)");
        } else {
        email.setCustomValidity("");
        }
    });
}


// add new text to list
function create_element(){
    const list = document.getElementById("cupcakes");
    const input = document.getElementById("ingredient_input").value;
    var li = document.createElement("li");
    li.textContent = input;
    // li.appendChild(document.createTextNode(input));
    list.append(li);
}


// Click to delete item elements
const items = document.getElementsByClassName("list_element")

for (var i = 0 ; i < items.length; i++) {
    items[i].addEventListener('click' , (event) => {
        event.target.remove();
        } ) ; 
    }




