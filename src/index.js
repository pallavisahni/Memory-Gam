document.addEventListener("DOMContentLoaded", () => {
  // card game : card arrays:

  const cards = [
    {
      name: "fries",
      image: " /images/fries.png",
    },
    {
      name: "cheeseburger",
      image: " /images/cheeseburger.png",
    },
    {
      name: "hotdog",
      image: " /images/hotdog.png",
    },
    {
      name: "ice-cream",
      image: " /images/ice-cream.png",
    },
    {
      name: "milkshake",
      image: " /images/milkshake.png",
    },
    {
      name: "pizza",
      image: " /images/pizza.png",
    },
    {
      name: "fries",
      image: " /images/fries.png",
    },
    {
      name: "cheeseburger",
      image: " /images/cheeseburger.png",
    },
    {
      name: "hotdog",
      image: " /images/hotdog.png",
    },
    {
      name: "ice-cream",
      image: " /images/ice-cream.png",
    },
    {
      name: "milkshake",
      image: "/images/milkshake.png",
    },
    {
      name: "pizza",
      image: " /images/pizza.png",
    },
  ];

  cards.sort(() => 0.5 - Math.random());
  console.log(cards);
  let cardChosen = [];
  let cardChosenId = [];

  const grid = document.querySelector(".grid");
  const result = document.querySelector("#results");

  function createBoard() {
    for (let i in cards) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cards[cardId].name);
    cardChosenId.push(cardId);

    this.setAttribute("src", cards[cardId].image);
    this.setAttribute("data-id", cardId);
    if (cardChosen.length === 2) {
      console.log("in");
      setTimeout(checkForMatch, 500);
    }
  }
  let score = 0;
  let cardsWon = [];
  function checkForMatch() {
    let matchCard = document.querySelectorAll("img");
    let optn1 = cardChosenId[0];
    let optn2 = cardChosenId[1];
    console.log(cardChosenId[0] + cardChosenId[1]);
    if (optn1 === optn2) {
      alert("You clicked the same image");
      matchCard[optn1].setAttribute("src", "/images/blank.png");
    } else if (cardChosen[0] === cardChosen[1]) {
      alert("Match Found!");
      matchCard[optn1].setAttribute("src", " /images/white.png");
      matchCard[optn2].setAttribute("src", " /images/white.png");
      matchCard[optn1].removeEventListener("click", flipCard);
      matchCard[optn2].removeEventListener("click", flipCard);
      cardsWon.push(cardChosen);
    } else {
      matchCard[optn1].setAttribute("src", " /images/blank.png");
      matchCard[optn2].setAttribute("src", " /images/blank.png");
    }
    cardChosen = [];
    cardChosenId = [];
    result.textContent = cardsWon.length;

    if (cardsWon.length === 6)
      result.textContent = "Congratulations! you won :-) ";
  }
  createBoard();
});
