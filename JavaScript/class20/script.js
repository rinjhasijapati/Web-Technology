prompt("Type 'Y' for Yes and 'N' for No");

function validate() {
    var name = document.getElementById("f1").value;
    var password = document.getElementById("f2").value;

    if(name.length < 6){
        alert("Name cannot be less than 6 letters");
        return false;
    }

    if(password.length < 6){
        alert("Password cannot be less than 6 letters");
        document.getElementById("f2").value = "";
        document.getElementById("f2").style.border = "solid 2px Red";
        return false;
    }
}


/*for Post method 
<form action="login.html" method="post">  
It is more secure than 'get' */