function checkData() {
    event.preventDefault();
    var enterEmail = document.getElementById("email").value;
    var enterPass = document.getElementById("pass").value;

    var getEmail=localStorage.getItem("userEmail");
    var getPass=localStorage.getItem("userPassword");

    if(enterEmail == getEmail)
    {
        if(enterPass == getPass)
        {
            alert("Login Successful");
            window.location.assign("ShoppingCart.html")
        }
        else
        {
            alert("Wrong Password");
        }
    }
    else
    {
        alert("Invalid Details");
    }
}