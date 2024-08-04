let currentplayer = "X";
array = Array(9).fill(null);


function whowon(){
    if(array[0]!==null && array[0]==array[1] && array[1]==array[2] ||
       array[3]!==null && array[3]==array[4] && array[4]==array[5] ||
       array[6]!==null && array[6]==array[7] && array[7]==array[8] ||
       array[0]!==null && array[0]==array[3] && array[3]==array[6] ||
       array[1]!==null && array[1]==array[4] && array[4]==array[7] ||
       array[2]!==null && array[2]==array[5] && array[5]==array[8] ||
       array[0]!==null && array[0]==array[4] && array[4]==array[8] ||
       array[2]!==null && array[2]==array[4] && array[4]==array[6] ){

            document.write(`WINNER IS ${currentplayer}`);
            return;
        }

    if(!array.some(e => e===null)){
        document.write("DRAW !!");
        return;
    }
};

function handleclick(el){
    const id = Number(el.id);
    if(array[id]!==null){
        return;
    }
    

    array[id] = currentplayer;
    el.innerText = currentplayer;
    whowon();
    if(currentplayer == "X"){
        currentplayer = "O";
    }
    else{
        currentplayer = "X";
    }
    
    
    
    
};