let choices=document.querySelectorAll('.choice')
let result=document.querySelector("#msg");
let usercount=document.querySelector('#userCount');
let compcount=document.querySelector('#compCount')
let userCount=0;
let compCount=0;
let userWinner=(user,userChoice,compchoice)=>{
    if(user){
        result.innerText=`You win! ${userChoice} beats ${compchoice}`;
        result.style.backgroundColor="green";
        userCount++;
        usercount.innerText=userCount;
    }
    else{
        result.innerText="You lost!";
        result.style.backgroundColor="red";
        compCount++;
        compcount.innerText=compCount;
    }
}
let checkWinner=(userChoice)=>{
    let compchoice=selectCompChoice();
    if(userChoice===compchoice){
        result.innerText="Draw the game.Play again";
    }
    else{
        let user=true;
        if(userChoice==="rock"){
            user=compchoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            user=compchoice==="scissor"?false:true;
        }
        else{
            user=compchoice==="rock"?false:true;
        }
        userWinner(user,userChoice,compchoice);
    }
}
let selectCompChoice=()=>{
    let gameVal=['rock','paper','scissor'];
    let compchoice=gameVal[Math.floor(Math.random()*2)]
    return compchoice;
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id');
        checkWinner(userChoice);
    })
})