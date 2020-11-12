var mainCell = document.getElementsByClassName("cell-main");  //table row
var cell = document.getElementsByClassName("cell");  //tableData
const cellData = document.querySelectorAll(".cell-data");
var playerTurn = document.querySelector('.player-turn');

var currentPlayer = 1
let winner;
playerTurn.textContent = "player 1's turn"

for(i=0;i<cell.length;i++){
    cell[i].addEventListener("click",(e)=>{
        console.log(e.target.parentElement.id + ","+Array.from(e.target.parentNode.children).indexOf(e.target));
    })
}

Array.prototype.forEach.call(cell, (cell)=>{
    cell.addEventListener("click", changeColor)
    cell.style.backgroundColor = "white";
});
function changeColor(e){
    let column = Array.from(e.target.parentNode.children).indexOf(e.target)
    let row = [];

    for(let i = 5; i > -1; i--){
        if(mainCell[i].children[column].style.backgroundColor == "white"){
            row.push(mainCell[i].children[column])
        if(currentPlayer === 1){
            row[0].style.backgroundColor = "#ff4534"
            if(xCheck() || yCheck() || diagonalCheck1() || diagonalCheck2()){
                return alert("player 1 wins");
            }
            else if(checkForDraw()){
                return alert("its a draw")
            }
            else{
                playerTurn.textContent = "player 2's turn"
            return currentPlayer =2
            }
    }
        else{
            row[0].style.backgroundColor = "#333479"
            if(xCheck() || yCheck() || diagonalCheck1() || diagonalCheck2()){
                return alert("player 2 wins")
            }
            else if(checkForDraw()){
                return alert("its a draw")
            }
            else{
                playerTurn.textContent = "player 1's turn"
            return currentPlayer =1
            }
 
        } 
    }
    }

}
function checkWinner(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'white' && one !== undefined);
}

function xCheck(){
    for (let row = 0; row < mainCell.length; row++){
        for (let col =0; col < 4; col++){
           if (checkWinner(mainCell[row].children[col].style.backgroundColor,mainCell[row].children[col+1].style.backgroundColor, 
                                mainCell[row].children[col+2].style.backgroundColor, mainCell[row].children[col+3].style.backgroundColor)){
               return true;
           }
        }
    }
}

function yCheck(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (checkWinner(mainCell[row].children[col].style.backgroundColor, mainCell[row+1].children[col].style.backgroundColor,
                                mainCell[row+2].children[col].style.backgroundColor,mainCell[row+3].children[col].style.backgroundColor)){
                return true;
            };
        }   
    }
}

function diagonalCheck1(){
    for(let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if (checkWinner(mainCell[row].children[col].style.backgroundColor, mainCell[row+1].children[col+1].style.backgroundColor,
                mainCell[row+2].children[col+2].style.backgroundColor,mainCell[row+3].children[col+3].style.backgroundColor)){
                    return true;
                }
            }
        }
}

function diagonalCheck2(){
    for(let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
            if (checkWinner(mainCell[row].children[col].style.backgroundColor, mainCell[row-1].children[col+1].style.backgroundColor,
                mainCell[row-2].children[col+2].style.backgroundColor,mainCell[row-3].children[col+3].style.backgroundColor)){
                    return true;
            }
        }
    }
}

function checkForDraw(){
    let gridArray = []
    for (i=0; i < cell.length; i++){
        if (cell[i].style.backgroundColor !== 'white'){
            gridArray.push(cell[i]);
        }
    }
    if (gridArray.length === cell.length){
        return true;
    }
}
