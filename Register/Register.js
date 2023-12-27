let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");

inputs.forEach(input=>{
    input.addEventListener("keyup",()=>{
        let trueMessage = input.nextElementSibling;
        let falseMessage = input.nextElementSibling.nextElementSibling;
        if (input.checkValidity()) {
            trueMessage.style.display = "block";
            falseMessage.style.display = "none"
        }else{
            trueMessage.style.display = "none";
            falseMessage.style.display = "block"
        }
    });
    
})

button.addEventListener("click",(event)=>{
    event.preventDefault
    if(form.checkValidity()){
        AddNewUser()
        form.reset()
    }else{
        alert("Form Düzgün Deyil!")
    }
}
)

function checkUserFromStorage() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users
}

function AddNewUser() {
    let newUser = {};
    inputs.forEach(input => {
        newUser[input.name]= input.value;
    })
    let users = checkUserFromStorage();
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
}