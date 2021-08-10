let getID = id => document.getElementById(id);
let passRegExp = /^[a-zA-Z]{2,20}$/;

getID('firstName').oninput = function(){
  let firstName = passRegExp.test(this.value);
  if(firstName){
    this.style.backgroundImage = `url("images/galochka-green.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.borderColor = 'green';
    this.style.borderStyle = 'solid';
    this.style.borderWidth = '3px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".firstAttention").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".firstAttention").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

getID('lastName').oninput = function(){
  let lastName = passRegExp.test(this.value);
  if(lastName){
    this.style.backgroundImage = `url("images/galochka-green.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.borderColor = 'green';
    this.style.borderStyle = 'solid';
    this.style.borderWidth = '3px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".lastAttention").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".lastAttention").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

let email = /^[a-z0-9\-.]+@[a-z]+\.[a-z]+$/;
getID('email').oninput = function(){
  let passEmail = email.test(this.value);
  if(passEmail){
    this.style.backgroundImage = `url("images/galochka-green.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.borderColor = 'green';
    this.style.borderStyle = 'solid';
    this.style.borderWidth = '3px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".email").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".email").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

let password = /^\w{8,15}$/;
getID('password').oninput = function(){
  let passPassword = password.test(this.value);
  if(passPassword){
    this.style.backgroundImage = `url("images/galochka-green.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.borderColor = 'green';
    this.style.borderStyle = 'solid';
    this.style.borderWidth = '3px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".password").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".password").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

let testFirst;
let testLast;
let testEmail;
let testPassword;
getID('firstName').onchange = function(){
  testFirst = passRegExp.test(getID('firstName').value);
  console.log(testFirst);
  ableButton();
}
getID('lastName').onchange = function(){
  testLast = passRegExp.test(getID('lastName').value);
  console.log(testLast);
  ableButton();
}
getID('email').onchange = function(){
  testEmail = email.test(getID('email').value);
  console.log(testEmail);
  ableButton();
}

getID('password').onchange = function(){
  testPassword = password.test(getID('password').value);
  console.log(testPassword);
  ableButton();
}

// function ableButton() {
  // let testAgree = getID("agree");
  // let testSignUp = getID("signUp");
//   if(testFirst && testLast && testEmail && testPassword){
//     testAgree.disabled = false;
//     console.log('welcome');
//       testAgree.onclick = function() {
//         if(testAgree.checked == true) {
//           testSignUp.disabled = false;
//         }
//       }
//   }
//   else if((testFirst == false) || (testLast == false) || (testEmail == false) || (testPassword == false)) {
//     testAgree.disabled = true;
//       if(testAgree.disabled == true){
//         testSignUp.disabled = true;
//         testAgree.checked = false;
//       }
//   }
// }
// function ableButton() {
  // let testAgree = getID("agree");
  // let testSignUp = getID("signUp");
  // if(testFirst && testLast && testEmail && testPassword){
  //   testAgree.disabled = false;
  //   console.log('welcome');
  // }
  //  if((testFirst == false) || (testLast == false) || (testEmail == false) || (testPassword == false) || (testAgree.checked == false)) {
  //   testAgree.disabled = true;
  //     if(testAgree.disabled == true){
  //       testSignUp.disabled = true;
  //       testAgree.checked = false;
  //     }
  // }
// }

getID('agree').onclick = function() {
  ableButton();
}

function ableButton() {
  let testAgree = getID("agree");
  let testSignUp = getID("signUp");
  if((testFirst == true) && (testLast == true) && (testEmail == true) && (testPassword == true) && (testAgree.checked == true)) {
    testSignUp.disabled = false;
  }
  else{
    testSignUp.disabled = true;
  }
}



function galochkaGreen() {
  this.style.backgroundImage = `url("images/galochka-green.png")`;
  this.style.backgroundSize = '20px 20px';
  this.style.borderColor = 'green';
  this.style.borderStyle = 'solid';
  this.style.borderWidth = '3px';
  this.style.backgroundRepeat = 'no-repeat';
  this.style.backgroundPositionX = 'right';
  this.style.backgroundPositionY = 'center';
}

getID("signUp").onclick = function(){
  this.style.backgroundColor = 'rgb(16, 16, 177)';
  document.querySelector(".grey").hidden = false;
}

getID('startExploring').onclick = function(){
  this.style.backgroundColor = 'rgb(197, 133, 13)';
  window.location.reload();
}