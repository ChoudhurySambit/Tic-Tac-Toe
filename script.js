let music = new Audio('music.mp3');
let game =false;
let count=0;
let turn1=new Audio("game1.mp3");
let winner = new Audio ("winner.mp3");
function musicplay(){
    if (!game){
        turn1.play();
    }
}
let turn = "X";
function Changeturn() {
    return turn === "X" ? "0" : "X";
}
const checkwinner = () => {
    let boxtexts = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2 ,5,5,0],
        [3, 4, 5,5,15,0],
        [6, 7, 8,5,25,0],
        [0, 3, 6,-5,15,90],
        [1, 4, 7,5,15,90],
        [2, 5, 8,15,15,90],
        [0, 4, 8,5,15,45],
        [2, 4, 6,5,15,135],
    ];
    wins.forEach(e=> {
        let p= document.getElementsByTagName("img");
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !=="")) {
            document.getElementById('n').innerText=boxtexts[e[0]].innerText + "won";
            game = true;
            p[0].removeAttribute("class",'pop');
            document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            let a=document.getElementById('l'); 
            a.style.width="20vw";
            turn1.pause();
            winner.play();
            if ( window.screen.availWidth>850){
                a.style.width="20vw"
            }
            else{
                a.style.width="0vw";
            }

        }
    })

}
function Reset(){
    count=0;
    let boxtexts=document.querySelectorAll(".box-text");
    Array.from(boxtexts).forEach(e =>{
        e.innerText="";
    })
    turn="X";
    game=false;
    document.getElementById('n').innerText = "Turn For " + turn;
    let p= document.getElementsByTagName("img");
    p[0].setAttribute("class","pop");
    let a=document.getElementById('l');      
        a.style.width="0vw";
        winner.pause();
        turn1.play();
}
let boxs = document.getElementsByClassName("box");
console.log(boxs)
Array.from(boxs).forEach(element => {
    let boxtexts = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxtexts.innerText == "") {
            boxtexts.innerText = turn;
            turn = Changeturn();
            music.play();
            checkwinner();
            if (!game) {
                document.getElementById('n').innerText = "Turn For " + turn;
                let a=document.getElementById('l');      
                a.style.width="0vw";
                count++;
                console.log(count)
            }
        }
    })
})
    if (count>8){
        Reset();
    }