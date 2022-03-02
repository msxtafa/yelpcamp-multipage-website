
let cardDisplay = document.querySelector(".card-container");
let cardsContainer = "";



let cardsObj = [

   {
    name:"Mount Ulap",
    desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    img:"/Assets/Camp Images/Compressed Images/Mount Ulap.jpg",
   },

   {
    name:"Calaguas Island",
    desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    img:"/Assets/Camp Images/Compressed Images/Calaguas Island.jpg",
  },

  {
    name:"Onay Beach",
    desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    img:"/Assets/Camp Images/Compressed Images/Onay Beach.jpg",
  },

  {
    name:"Seven Sisters Waterfall",
    desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    img:"/Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg",
  },

  {
    name:"Latik Riverside",
    desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    img:"/Assets/Camp Images/Compressed Images/Latik Riverside.jpg",
  },

  {
    name:"Buloy Springs",
    desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    img:"/Assets/Camp Images/Compressed Images/Buloy Springs.jpg",
  }
       
]

function createCards(){
    for(let i = 0; i < cardsObj.length; i++){
        cardsContainer += initCard(cardsObj[i].name,cardsObj[i].desc,cardsObj[i].img).outerHTML; 
    }
       
    cardDisplay.innerHTML = cardsContainer;
}

function initCard(name,desc,img){
    let card = document.createElement("div");
    card.classList.add("card");

    let cardImage = document.createElement("img");
    cardImage.src =img;

    let cardName = document.createElement("h2");
    cardName.textContent = name;
    cardName.classList.add("placename");
    cardName.setAttribute("data-name", name);

    let cardDesc = document.createElement("p");
    cardDesc.textContent = desc;

    let cardButton = document.createElement("button");
    cardButton.dataset.button = "button";
    cardButton.classList.add("btn-secondary");
    cardButton.textContent = "View Campground";

    let btnLink = document.createElement("a");
    btnLink.href = "/dist/camps.html";
    
    btnLink.appendChild(cardButton);
  
    card.append(cardImage,cardName,cardDesc,btnLink);
 
  return card;
}

createCards();


let searchInput = document.querySelector("[data-search]");
let cards = document.querySelectorAll(".card");

function filterCards(){
 
    searchInput.addEventListener("input", function(e){
    value = e.target.value.toLowerCase();
    
    cards.forEach(card =>{
    let isVisible = card.childNodes[1].dataset.name.toLowerCase().includes(value);
    card.classList.toggle("d-none", !isVisible);
    })
    
    })
}

filterCards();



