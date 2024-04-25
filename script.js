let cardArray = [
    {
       "name": "CSS",
       "img" : "./photo/img1.png",
    
    },
    {
        "name": "HTML",
        "img" : "./photo/img2.png",
    },
    {
        "name": "JQuery",
        "img" : "./photo/img3.png",
    },
    {
        "name": "JS",
        "img" : "./photo/img4.png",
    },
    {
        "name": "Node",
        "img" : "./photo/img5.png",
    },
    {
        "name": "Phyton",
        "img" : "./photo/img6.png",
    },
];

const parentDiv = document.querySelector("#card-section");
// 2 Step doublicate each card // Array(12)
const gameCard = cardArray.concat(cardArray);
console.log(gameCard);
// Step 3 
// const myNumbers = (Array) => {
//     for(let i = Array.length - 1; i > 0; i++){
//       let j = Math.floor = Math.random() + (i + 1) ;
//       let temp = Array[j]; 
//      Array[j] = Array[j]; 
//     Array[j] = temp; 
//     }
//     return Array
// }
let shuffledChild = Array.from(gameCard).sort(() => 0.5- Math.random())


//  same and  same  card 2  step 5
let clickCount = 0;
let firstcard = "";
let secondcard = "";
// .card-selected step 4
// styling the match card
const card_matches = () => {
   let card_selected = document.querySelectorAll('.card_selected');
   card_selected.forEach((curentElm) => {
    curentElm.classList.add('card_match');
   } )
};



// 7 step
const resetGame = () => {
    clickCount = 0;
    firstcard = "";
    secondcard = "";
  

    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curentElem) => {
     curentElem.classList.remove('card_selected');
    } )
}
parentDiv.addEventListener('click',(event) => {
let curCard = event.target;
if(curCard.id === "card-section"){return false};
clickCount++;
if(clickCount < 3){
   
    if(clickCount === 1){
         firstcard = curCard.parentNode.dataset.name;
         curCard.parentNode.classList.add('card_selected');
    }else{
        secondcard = curCard.parentNode.dataset.name; 
        curCard.parentNode.classList.add('card_selected'); 
    }
    if(firstcard !== "" && secondcard !== ""){
        if(firstcard === secondcard){
            // curCard.classList.add('card_match');
         setTimeout ( () => {
            card_matches()
            resetGame()
         },1000)
            
        }else{
            setTimeout (() => {
                 resetGame()
            },1000)
            
        }
    }
  
}


});

// Step 1 to add the card
for(let i = 0; i<shuffledChild.length; i++){
    const childDiv = document.createElement( "div");
    childDiv.classList.add("card");
    childDiv.dataset.name = shuffledChild[i].name;
    // img
    childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
  


    // last step
    // front_div
    const front_div = document.createElement("div");
    front_div.classList.add('front-card')
    // back_div
    const back_div = document.createElement("div");
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv);


    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);
}
