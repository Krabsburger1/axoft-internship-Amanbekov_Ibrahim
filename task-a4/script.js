const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email !== "@" || password.length >= 6) {
    console.log("success");
} else {
    console.log("error");
}
