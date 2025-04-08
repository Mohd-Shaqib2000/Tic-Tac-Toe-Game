let boxes=document.querySelectorAll(".box");                  // line 43 use of it
let resetBtn=document.querySelector("#reset-btn");
           
let newGameBtn = document.querySelector("#new-btn");          // write in last  or call   99
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winPatterns = [                                    // multiple array
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//for eventListener use arrow function
boxes.forEach((box) => {                             //arrow functon     best way for making functions
box.addEventListener("click", () =>{                // eventListner for click mouse
    if(turnO===true){
        box.innerText = "O";               // write text inside the boxes by this
        turnO = false;
    }

    else{
        box.innerText = "X";
        turnO = true;
    }

    box.disabled = true;
    checkWinner();                     // function call
});
})



const resetGame = () =>{
    turnO = true;
    enableBoxes();                  // call function
    msgContainer.classList.add("hide");
};




const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};



const showWinner = (winner) => {
msg.innerText = `Congratulations, Winner is ${winner}`;
console.log(msg.innerText,winner);
msgContainer.classList.remove("hide");
disabledBoxes();
}





const checkWinner = () => {

for(let pattern of winPatterns){

let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val!="" && pos2val!="" && pos1val!=""){
if(pos1val=== pos2val && pos2val=== pos3val){
showWinner(pos1val);      // call function

    }
}
}
}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);