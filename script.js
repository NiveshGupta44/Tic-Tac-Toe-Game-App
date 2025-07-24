let boxes =  document.querySelectorAll(".box");
let reset = document.querySelector("#btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;
const winpattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
boxes.forEach((box) => {
box.addEventListener("click", () =>{
    console.log("Box was clicked");
if(turnO){
    box.innerText="O";
    turnO = false;
}
else{
    box.innerText="X"
    turnO = true;
}
box.disabled= true
checkwinner();
});
});
const checkwinner=()=>{
    let Winner=false;
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern [0]].innerText;
        let pos2 = boxes[pattern [1]].innerText;
        let pos3 = boxes[pattern [2]].innerText;
        if(pos1 !=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
                Winner=true;
                return;
            }
        }
    }
let filledboxes =[...boxes].every(box=>box.innerText !="");
if(filledboxes&&!Winner){
    msg.innerText='Match is Tie';
    msgcontainer.classList.remove("hide");
    disable();
}
}
const disable=()=>{
    for (let box of boxes) {
        box.disabled= true;
        
    }
}
const enable=()=>{
    for (let box of boxes) {
        box.disabled= false;
        box.innerText="";
        
    }
}
const showwinner =(winner) =>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
}
const resetbtn =()=>{
    turnO = true;
enable();
msgcontainer.classList.add("hide");
}
reset.addEventListener("click",resetbtn);