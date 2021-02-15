// function myFunction() {
//     var navToggle = document.getElementById('nav-links')
//     navToggle.classList.toggle('close')
// }

///////////////////      Dom Course Start      ////////////////////

// var myP = document.createElement('p')

//     myPText = document.createTextNode('this paragraph created with javascript')

//     myP.appendChild(myPText)

//     document.body.appendChild(myP)

///////////////////     Find Dom Elements       ////////////////////

// [1] - document.getElementById()
// [2] - document.getElementsByTagName()
// [3] - document.getElementsByClassName()  // Not Compitable With IE 8
// [4] - document.querySelectorAll()        // Not Compitable With IE 8

// var myDiv = document.getElementById('test');
// myDiv.innerHTML = 'Changes By Javascript';

// var myElement = document.getElementsByTagName('div');
// myElement[1].innerHTML = 'Changed By Javascript'; // Will Not Change 

// var myElement = document.getElementsByClassName('test');
// myElement[0].innerHTML = 'Changed By Javascript';

// var myElement = document.querySelectorAll('div.test'); //tag and class 
// myElement[0].innerHTML = 'Changed By Javascript';

///////////////////    Find Element By Objects    /////////////////////
//  document.title
//  document.images its object then access it with index     document.images[0].src
//  document.forms

// var myDiv = document.getElementById('show')
// myDiv.innerHTML = document.title
// myDiv.innerHTML = document.images[1].src + document.images[2. src]
// for (i = 0; i < document.images.length; i++) {
//     document.write(document.images[i].src)
// }
// var myDiv = document.getElementById('show');
// myDiv.innerText = document.forms[0].x2.value
// myDiv.innerText = document.forms[0].x2.type
// myDiv.innerText = document.forms[0].x2.email
//////////////  Get , Set Element Content  ///////////////////
// innerText // Not Standard
// outerText // Not Standard
// innerHTML    Get HTML Content Of An Element
// outerHTML
// textContent  Get Text Content Of An Element 
/////////////  Get , Set Attribute      //////////////////////
// Start Work Area:
// Element.Attribute = Direct Method
// myImg = document.querySelector('img')
// myImg.src = 'http://placehold.it/300'

/////////////  Get , Set Attribute    ////////////////////////
// getAttribute('Attribute Name')
// setAttribute('Attribute Name', 'Attribute Value')
// myImg = document.querySelector('img')
// myImg.getAttribute('src')
// myImg.setAttribute('src', 'http://www.placehold.it/400/100')

/////////////////     Has , Remove Attribute       ///////////////////
// myImg = document.querySelector('img')
// if (myImg.hasAttribute('alt')) {
//     console.log('Yes This Img Has Attribute Alt')
// } else {
//     console.log('No This Element Does Not Have Attribute Alt')
// }
// myImg = document.querySelector('img')
// if (myImg.hasAttribute('alt')) {
//     if (myImg.alt === "") {
//         myImg.setAttribute("alt", 'Default Alternate Text')
//     }
// }
// myImg = document.querySelector('img')
// if (myImg.hasAttribute('alt')) {
//     if (myImg.alt === "") {
//         myImg.removeAttribute('alt');
//     }
// }
/////////////////   ClassList[Item, Contains, Length]  ///////////////
// myDiv = document.getElementById('main');
// if (myDiv.classList.contains('zero')) {
//     console.log('yes this div contain class zero ')
// } else {
//     console.log('no div does not have class zero ')
// }
// myDiv = document.getElementById('main')
// console.log(myDiv.classList.length)
// myDiv = document.getElementById('main')
// console.log(myDiv.classList.item(2))
////////////    index = start from 0    //////////////
////////////    length = start from 1   //////////////
// var myClass = document.getElementById('paragraph')
// myBtn = document.getElementById('btn')
// if (myBtn.innerHTML == myClass.classList[0]) {
//     console.log('yes the paragraph class have the same button text content')
// } else {
//     console.log('no the button text content not have the same paragraph class')
// }
// console.log(myBtn.innerHTML)

/////////////////   ClassList[Add, Remove, Toggle]    ///////////////

// var myDiv = document.getElementById('main');
// myBtn = document.querySelector('button')
// myBtn.onclick = () => {
//     myDiv.classList.add('JS')
//     myDiv.classList.remove('col')
//     myDiv.classList.toggle('hidden')
// }

///////////////////   Element Children   /////////////////////

// myDiv = document.getElementById('main')
// console.log(myDiv.childElementCount)
// console.log(myDiv.children[1].textContent)
// console.log(myDiv.children.length)
// console.log(myDiv.childNodes.length)
// console.log(myDiv.childNodes)

///////////////////     Elements Children    /////////////////////
///////////////////   First And Last Child   /////////////////////

// myDiv = document.getElementById('main')
// console.log(myDiv.firstChild)        
// console.log(myDiv.firstElementChild)
// console.log(myDiv.lastChild)
// console.log(myDiv.lastElementChild)

///////////////////   Elements Children  /////////////////////
///////////////////     Insert Before   /////////////////////

// var myMainDiv = document.getElementById('main');
// //Create Div Element
// myNewElement = document.createElement('div');
// //Create Text Node
// myNewText = document.createTextNode('Hello From Javascript');
// //Append Text To New Element
// myNewElement.appendChild(myNewText)
//     //Append The New ELement To The Main Div 
// myMainDiv.appendChild(myNewText)
// myMainDiv.insertBefore(myNewText, myMainDiv.firstElementChild)

// appendChild Insert it At The End Of

///////////////////   Elements Children  /////////////////////
///////////////////     Append Child   /////////////////////

// var myMainDiv = document.getElementById('main'),

//     //create div element

//     myNewElement = document.createElement('div'),

//     //create another paragraph
//     myNewP = document.createElement('p')

// //create text node

// myText = document.createTextNode('Welcome From Javascript');

// myNewElement.appendChild(myText)

// //append the new element to my main div 

// myMainDiv.appendChild(myNewElement)

// //append new p to the main div 

// myMainDiv.appendChild(myNewP)

///////////////////   Elements Children  /////////////////////
///////////////////     Remove Child     /////////////////////

// myDiv = document.getElementById('main');
// myDiv.removeChild(myDiv.childNodes[1])
// console.log(myDiv.childNodes)

///////////////////    Dom Course END    /////////////////////


// Bom Course Start //

// document.cookie("name=value, expires=Date, path=")
// document.cookie = 'favfont=Droid,';

// Screen
// console.log('Screen Width Is: ' + screen.width)
// console.log('Screen Width Is: ' + screen.height)
// console.log('Screen Available Width Is: ' + screen.availWidth)
// console.log('Screen Available Width Is: ' + screen.availHeight)
// console.log('Screen Color Depth Is :' + screen.colorDepth)

// // window.navigator
// console.log(navigator.appCodeName)
// console.log(navigator.appName)
// console.log(navigator.appVersion)
// console.log(navigator.platform)
// console.log(navigator.cookieEnabled)
// console.log(navigator.language)
// console.log(navigator.onLine)
// console.log(navigator.geolocation)

// open
//window.open(Url, Name Or Attribute, Specification, History Replace)
// document.getElementById('open').onclick = function() {
//     window.open("https://www.google.com", "_blank", "", "")
// }

// count down timer
// var myDiv = document.getElementById("count")

// function countDown() {
//     if (myDiv.textContent <= 0) {
//         myDiv.textContent = 'Done...';
//         clearInterval(myTime)
//     } else {
//         myDiv.textContent -= 1
//     }
// }
// var myTime = setInterval(countDown, 1000);,

// Bom Course End //