function myfunct(){
    let n1 = document.getElementById("i1").value;
    n1 = Number(n1);
    let sum = 0;
    let cnt = 0;
    if(isNaN(n1)){
        alert("Please enter valid Number!!");
    }
    if(n1 == 0 || n1 == "" || n1 == " "){
        alert("Please enter a Value");
    }
    while(n1 > 0){
        sum += n1 % 10;
        n1 = Math.floor(n1 / 10);
    }
    let border = (sum/5);
    const box = document.getElementById("sqr");
    document.getElementById("sqr").style.transitionDelay = "5s";

    box.style.width = sum + "px";
    box.style.height = sum + "px";
    box.style.backgroundColor = "black";
    box.style.borderRadius = border + "px";
    box.style.marginLeft = "40%";
}
