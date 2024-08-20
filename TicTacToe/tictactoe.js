let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn =document.querySelector("#newbtn");
let  msg =document.querySelector(".msg");
let Winner = document.querySelector("#Winner");
let newgamebtn = document.querySelector("#newgamebtn");

let turnX = true;
let count =0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

const resetgame = ()=>{
    turnX= true;
    count = 0;
    enablebxs();
    msg.classList.add("hide");
  
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnX){
            box.innerText = "X";
            turnX= false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled =true;

        count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});

const gameDraw = () => {
    Winner.innerText = `Game was a Draw.`;
    msg.classList.remove("hide");
    disablebxs();
  };

const disablebxs = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enablebxs = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};


const showWinner = (winner)=>{
    Winner.innerText = `Congratulations winner is ${winner}`;
    msg.classList.remove("hide");

    disablebxs();
};

const checkWinner = ()=>{
    for(let pattern of winPattern){
            let pos1Val =  boxes[pattern[0]].innerText;
            let pos2Val =  boxes[pattern[1]].innerText;
            let pos3Val =  boxes[pattern[2]].innerText;
       
       if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val );
            showWinner(pos1Val);
            return true;
        }
       }
    }
};

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);
