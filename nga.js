const a =document.getElementById("input")
var num = Math.ceil(Math.random()*100);
var count = 1;
console.log(num);
fun = () =>{
if(a.value===''){
    document.getElementById("result").innerHTML = "plese enter value before check"
    document.getElementById("result").style.color = "coral";
    document.getElementById("result").style.width="bold";
}
else{

let input = parseInt(a.value)
console.log(input)


    if(input == num){
        document.getElementById("result").innerHTML = "Congratulations!!! you have got the number in "+ count +" Tries"
          document.getElementById("result").style.color = "white";
    }
    else if(input>num){
        document.getElementById("result").innerHTML = "Try with lesser number";
          document.getElementById("result").style.color = "white";
        count++;
    }
    else{
        document.getElementById("result").innerHTML = "Try with grater number"
          document.getElementById("result").style.color = "white";
        count++;
    
    }
}
}


