let timer = 30;
let scA = 0; 
let scB = 0;
let round = 0;
let str;
let x = 0;
function rock(){
    x=0;
    document.getElementById("leftImg").src="rock.png";
    go();
}
function paper(){
    x=1;
    document.getElementById("leftImg").src="paper.png";
    go();
}
function scissors(){
    x=2;
    document.getElementById("leftImg").src="scissors.png";
    go();
}
function go(){
    //console.log(x);
    round ++;
    let y = parseInt(Math.random()*3);
    
    //0 - rock , 1 - paper , 2 - scissors
    if(y == 0){
        document.getElementById("rightImg").src="rock.png";
    }
    else if (y == 1){
        document.getElementById("rightImg").src="paper.png";
    }
    else{
        document.getElementById("rightImg").src="scissors.png";
    }

    if((x==0&&y==2)||(x==1&&y==0)||(x==2&&y==1)){
        scA++;
        str = (scA,scB) => "Player 1 : "+scA+"   -   Player 2 : "+scB;
        document.getElementById("pScore").innerHTML = str(scA,scB);
        
    }
    else if ((y==0&x==2)||(y==1&&x==0)||(y==2&&x==1)){
        scB++;
        str = (scA,scB) => "Player 1 : "+scA+"   -   Player 2 : "+scB;
        document.getElementById("pScore").innerHTML = str(scA,scB);
        
    }
    



    
}