let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebutn =document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turn= true;//playerx,playery
let count = 0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame =()=>{
    turn= true;
    count = 0;
   EnaableBoxe();
   msgcontainer.classList.add("hide");
   
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
    
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="0";
            turn=true;
        }
        box.disabled =true;
        count++;
         let iswinner=checkwinner();

         if(count ==9 && !iswinner){
            gameDraw();
         }
     });
});
const gameDraw =()=> {
    msg.innerText =`Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxe();
};
const disableBoxe =()=> {
    for(let box of boxes){
        box.disabled =true;
    }
};
const EnaableBoxe =()=> {
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
};
const showWinner=(winner)=> {
    msg.innerText =`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxe();
}
const checkwinner =() =>{
    for(pattern of winPatterns){
        
        let pos1val =boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;
        
           if(pos1val!="" && pos2val !="" && pos3val !=""){
            if(pos1val==pos2val && pos2val==pos3val){  
                showWinner(pos1val);
            }
           }

    }
};
 
newgamebutn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

