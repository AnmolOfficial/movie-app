function auth(){
    var email=document.getElementById("email").value;
    var password= document.getElementById("password").value;
    if(email=="admin123@gmail.com" && password=="gotohell"){
        window.open("sanjana/index.html","_blank");
        alert("Access Granted");
    }
    else{
        alert("Access Denied");
        return;
    }
}