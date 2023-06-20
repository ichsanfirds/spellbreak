function Spellbuild(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var kelamin = document.getElementsByClassName("kelamin");
    var quantity = document.getElementById("quantity").value;
    var address = document.getElementById("address").value;
    var aggrement = document.getElementById("aggrement");
    var button = document.getElementById("button");


    if(fullname == ""){
        alert("Fullname must be filled");
        return false;
    }

    else if(lettersonly(fullname) == false){
        alert("Fullname must consist of letters only");
        return false;
    }

    else if(email == ""){
        alert("Email must be filled");
        return false;
    }

    else if(!email.includes('@') || !email.includes('.')){
        alert("Email Must Contain '@' and '.'");
        return false;
    }

    else if(email.indexOf('@')+1 == email.indexOf('.') || email.indexOf('@')-1 == email.indexOf('.')){
        alert("On Email, '@' and '.' cannot be side to side");
        return false;
    }

    else if (simbolsimbol(email) == false){
        alert("Email must not contain symbols others than ‘@’ and ‘.’");
        return false;
    }

    else if(username.length < 6){
        alert("Username length must be greater than 6 characters");
        return false;
    }

    else if(username.includes(' ')){
        alert("Username cannot contain space character (‘ ‘)");
        return false;
    }

    else if(password.length < 8){
        alert("Password length must be greater than 8 characters");
        return false;
    }

    else if (alphanumeric(password) == false){
        alert("Password must be alphanumeric (contain letter and digit)");
        return false;
    }

    else if(repassword != password){
        alert("Repassword must be the same with Password");
        return false;
    }

    else if(kelamin[0].checked == false && kelamin[1].checked == false){
        alert("Gender must be chosen");
        return false;
    }

    else if(quantity == 0){
        alert("Quantity must be greater than 0");
        return false;
    }

    else if(!address.endsWith(" Street")){
        alert("Address Must ends with ‘ Street’ (case sensitive)");
        return false;
    }

    else if(aggrement.checked == false){
        alert("Aggreement must be Checked");
        return false;
    }

    else{
        alert("Thank You For your Purchase");
        document.getElementById("form").submit();
    }
    
}

function lettersonly(fullname){
    var number = ['1','2','3','4','5','6','7','8','9','0'];
   
    for (var i = 0; i < fullname.length; i++){
        if(number.includes(fullname.charAt(i))){
            return false;
        }
    }
    return true;
}

function simbolsimbol(email){
    var symbol = ['`','~','!','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']',
    '}',';',':','|','\\',';',':','\'','\"',',','<','>','/','?'];
   
    for(var i = 0; i < email.length; i++){
        if(symbol.includes(email.charAt(i))){
            return false;
        }
    }
    return true;
}

function alphanumeric(password){
    var number = [];
    for (var i = 48; i <= 57 ; i++) {
        number.push(i);
    }

    if(isNaN(password) == true){
        for (var i = 0; i < password.length; i++) {
        if(number.includes(password.charCodeAt(i)) ){
            return true;
            }
        }
        return false;
    }
    else{
        return false;
    }
    return true;
}