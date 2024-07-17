function addData() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    localStorage.setItem("userEmail",email);
    localStorage.setItem("userPassword",pass);
}