document.getElementById("submit").onclick = function(){
    number = document.getElementById("number").value;
    if(number <= 0){
        document.getElementById("labelTwo").innerHTML = "You haven't entered a number";
    }
    else if(number % 2 == 0){
        document.getElementById("labelTwo").innerHTML = "Even";
    }
    else if(number % 2 != 0){
        document.getElementById("labelTwo").innerHTML = "Odd";

    }
}