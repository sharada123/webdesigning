let string=" ";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e) =>{
    //console.log(e.target.innerText);
    if(e.target.innerText == '='){
        string = eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerText == 'AC'){
        string = " ";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerText == 'DEL'){
        string = string.substring(0, string.length-1);
        document.querySelector('input').value=string;
    }
    else{
        string = string + e.target.innerText;
        // console.log(string);
         document.querySelector('input').value=string;
    }
   
})
})