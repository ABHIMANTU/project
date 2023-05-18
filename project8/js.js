const send = document.querySelector("#sender");
send.addEventListener("keyup", function(){
    let text = this.value;
    
    text = text.trim();
    let words = text.split(" ");
    // let cleanlist = words.filter(function(elm){
    //     return elm != " ";
    // });

    let charCodeArr = [];

    for(let i = 0; i < words.length; i++){
        for(let j =0; j< text.length; j++){
            let code = words[i][j].charCodeAt(i);
            charCodeArr.push(code);
        }
    }

    console.log(charCodeArr);

    












    


    

});

// const ab =  getCharCodes("I like JavaScript");
// console.log(ab);

// let charCodeArr = [];
// for(let i = 0; i < s.length; i++){
//     let code = s.charCodeAt(i);
//     charCodeArr.push(code);
// }




// let eny = [];

//     for(let i = 0 ; i< charCodeArr.length; i++){
//         const count =  charCodeArr[i]+2;
//         eny.push(count);
//     }

//     console.log(eny);


//     let decode = [];
//     for(let i = 0; i < eny.length; i++){
//         let code1 = eny.fromCharCode(i);
//         decode.push(code1);
//     }
//     console.log(decode);