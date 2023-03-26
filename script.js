
let numero = document.getElementById("numero");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");


const sumar = () =>{
    return numero.innerText++;
}

const restar = () =>{
    // console.log(numero);
    // return numero.innerText--;
    numero.innerText <= 0 ? numero.innerText = 0 : numero.innerText--;

    
}