"use strict"
// Random Password Generator

// let alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '$', '@', '#', '%', '&', '*'];
 
//  let outPut = document.querySelector('.password');

//   let arr = function (value){
//     let key = [];
//     for(let i = 0; i < 12; i++){
//      key.push(value[Math.floor(Math.random() * value.length) * 1]);
//     }
//   return key;
//   }

// document.querySelector('.click').addEventListener("click", function(){ 
//   let password = arr(alphabeth);
//   console.log(password.join(' '));
//   outPut.textContent = password.join(' ') ;
//   document.querySelector('.message').textContent = "Your password is"
// })


 
  const numbers = [1,2,3,4,5,6,7,8,9,0];

  const smallAlphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const capitalAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L',
  'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const symbols = ['@','#','$','%','&','*'];

  let restart = [];


document.querySelector('.numbers').addEventListener('change', function(e){
  if(e.target.checked){
    for(let i = 0; i < numbers.length; i++){
      restart.push(numbers[i]);
    }
  }else{ 
  for(let i = numbers.length - 1; i >= 0; i--){
    restart.pop(numbers[i]);
  }
  }
  console.log(restart);
})

document.querySelector('.small-alphabets').addEventListener('change', function(e){
  if(e.target.checked){
    for(let i = 0; i < smallAlphabets.length; i++){
      restart.push(smallAlphabets[i]);
    }
  }else{ 
    for(let i = smallAlphabets.length - 1; i >= 0; i--){
      restart.pop(smallAlphabets[i]);
    }
  }
  console.log(restart);
})

document.querySelector('.capital-alphabets').addEventListener('change', function(e){
  if(e.target.checked){
    for(let i = 0; i < capitalAlphabets.length; i++){
      restart.push(capitalAlphabets[i]);
    }
  }else{ 
    for(let i = capitalAlphabets.length - 1; i >= 0; i--){
      restart.pop(capitalAlphabets[i]);
    }
  }
  console.log(restart);
})

document.querySelector('.symbols').addEventListener('change', function(e){
  if(e.target.checked){
    for(let i = 0; i < symbols.length; i++){
      restart.push(symbols[i]);
    }
  }else{ 
    for(let i = symbols.length - 1; i >= 0; i--){
      restart.pop(symbols[i]);
    }
  }
  console.log(restart);
})

 let outPut = document.querySelector('.password');

  let arr = function (value){
    let key = [];
    for(let i = 0; i < 12; i++){
     key.push(value[Math.floor(Math.random() * value.length) * 1]);
    }
  return key;
  }

document.querySelector('.click').addEventListener("click", function(){ 
  let password = arr(restart);
  console.log(password.join(' '));
  outPut.textContent = password.join(' ') ;
  document.querySelector('.message').textContent = "Your password is";
})
