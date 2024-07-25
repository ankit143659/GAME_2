let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new_button");
let mssgContainer=document.querySelector(".mssg_container");
let mssg=document.querySelector("#mssg");

let turnO=true;
let a=0;

const winprediction=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        };
        box.disabled=true;
        checkwinner();
    })
})
const resetgame=()=>{
    enablebox();
    turnO=true;
    mssgContainer.classList.add("hide");

}

const checkwinner=()=>{
    for(pattern of winprediction){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
             showWinner(posVal1);
             a++;   
            };
        };
    };
};

const noOnewin = () => {
    mssg.innerText= "Game is Tie !!!";
    mssgContainer.classList.remove("hide");
    disablebox();
}

const showWinner = (winner) => {
    mssg.innerText= `Congratulation, Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disablebox();
    reset.classList.add("hide")
}

const disablebox=()=>{
    boxes.forEach((b)=>{
        b.disabled=true;
    
    })
};
const enablebox=()=>{
    boxes.forEach((b)=>{
        b.disabled=false;
        b.innerText=""
    })
};
reset.addEventListener('click',()=>{
    resetgame();
})
newbtn.addEventListener('click',()=>{
    resetgame();
    reset.classList.remove("hide");
})