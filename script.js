
const form = document.createElement("form");


const nameLabel = document.createElement("label");
nameLabel.innerText = "Name: ";
form.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter your name";
nameInput.required = true;
form.appendChild(nameInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


const emailLabel = document.createElement("label");
emailLabel.innerText = "Email: ";
form.appendChild(emailLabel);


const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";
emailInput.required = true;
form.appendChild(emailInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


const passwordLabel = document.createElement("label");
passwordLabel.innerText = "Password: ";
form.appendChild(passwordLabel);


const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Enter password";
passwordInput.required = true;
form.appendChild(passwordInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";
form.appendChild(submitBtn);


form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert(
        `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nPassword: ${passwordInput.value}`
    );
});


document.getElementById("formContainer").appendChild(form);