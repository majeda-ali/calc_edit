
let res =document.getElementById('result');
document.addEventListener("click" ,(event)=>{
   console.log(event.target.value)
res.innerText+= event.target.value.trim(); //5

let num1 ,num2; let opra ; let ind;let resul ; 
 for (ind = 0; ind < res.length; ind++) { 
     if (typeof parseFloat(res[ind] =='number')) {
          num1+=parseFloat(res[ind]); continue; 
        } else {
             opra = res[ind]; ind++; break; 
            }
        }
        
for (let index = ind; index <res.length; index++) {
              if (typeof parseFloat(res[index] =='number')) { 
                  num2+=parseFloat(res[ind]); 
                }
            } 
switch (opra) {
                case '+': resul = num1 +num2; break;
                case '-': resul = num1 -num2; break;
                case '*': resul = num1 *num2; break;
                case '/': resul = num1 /num2; break; 
            } 
  
document.getElementById("result").innerText=resul; 
let clean=document.getElementById("ac");
clean.onclick=()=>{
    clean=  document.getElementById('result').innerHTML ="";

}});
