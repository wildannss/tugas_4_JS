let andi = 158;
let budi = 175;
let cika = 155;

function tugas4(){
    if(andi > budi){
        if(andi > cika){
            return 'andi paling tinggi';
        }else{return 'cika paling tinggi';}        
    }else{
        if(budi > cika){
            return 'budi paling tinggi';
        }
    }
}
console.log(tugas4());

function urutan(){
    let urut = 'urutan yang tertinggi sampai terpendek adalah ';
    //Paling Tinggi
    if(andi > budi){
        if(andi > cika){
            return urut+'andi';
        }else{return urut+'cika';}        
    }else{
        if(budi > cika){
            return urut+'budi';
        }
    }
    //Paling Pendek
    if(andi < budi){
        if(andi < cika){
            return urut+' andi';
        }        
    }
    if(budi < cika){
        if(budi < andi){
            return urut+' budi';
        }        
    }
    if(cika < budi){
        if(cika < andi){
            return urut+' cika';
        }        
    }
}
console.log(urutan());