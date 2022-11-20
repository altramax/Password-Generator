"use strict"
// Random Password Generator

let alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '$', '@', '#', '%', '&', '*'];
 
 let outPut = document.querySelector('.password');

  let arr = function (value){
    let key = [];
    for(let i = 0; i < 12; i++){
     key.push(value[Math.floor(Math.random() * value.length) * 1]);
    }
  return key;
  }

document.querySelector('.click').addEventListener("click", function(){ 
  let password = arr(alphabeth);
  console.log(password.join(' '));
  outPut.textContent = password.join(' ') ;
  document.querySelector('.message').textContent = "Your password is"
})

