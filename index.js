import { playerAPI } from "./playerAPI.js";
import { navAPI } from "./navAPI.js";
import { ratingAPI } from "./ratingAPI.js";


const startButton = document.querySelector(".to-the-university");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const ratingButton = document.querySelector(".rating");
const btnCloseRatingWindow = document.querySelector(".rating-window__button-close-rating");

const data = {
    rating: [
        { id: "123", name: "Владимир", lastName: "Ларионов", img: "./images/male.png", points: "463" },
        { id: "9", name: "Владимир", lastName: "Сергеев", img: "./images/male.png", points: "521" },
        { id: "231", name: "Вениамин", lastName: "Васильев", img: "./images/male.png", points: "865" },
        { id: "321", name: "Мария", lastName: "Логинова", img: "./images/female.png", points: "865" },
        { id: "492", name: "Борис", lastName: "Казанцев", img: "./images/male.png", points: "784" },
        { id: "452", name: "Полина", lastName: "Калинина", img: "./images/female.png", points: "225" },
        { id: "796", name: "Даниил", lastName: "Воробьёв", img: "./images/male.png", points: "642" },
        { id: "4", name: "Эрик", lastName: "Аксёнов", img: "./images/male.png", points: "150" },
        { id: "1155", name: "Иван", lastName: "Иванов", img: "./images/male.png", points: "100" },
        { id: "12145", name: "Артем", lastName: "Алексеев", img: "./images/male.png", points: "1000" }
    ],
    friends: [
        { id: "9", name: "Владимир", lastName: "Сергеев", img: "./images/male.png" },
        { id: "4", name: "Эрик", lastName: "Аксёнов", img: "./images/male.png" },
        { id: "15411", name: "Ирина", lastName: "Чеснокова", img: "./images/female.png" },
        { id: "15564", name: "Дарина", lastName: "Боброва", img: "./images/female.png" }
    ]
};


const friendsContainerArray = [...data.friends, {
    id: "796", name: "Даниил", lastName: "Воробьёв", img: "./images/male.png", points: "642"
}, ...data.friends, ...data.friends];

navAPI.friendsListFilling(friendsContainerArray, data.friends);
ratingAPI.fillRatingBoard(data.rating, data.friends);

startButton.addEventListener("click", () => playerAPI.playerGo());
arrowRight.addEventListener("click", () => navAPI.carouselShift("right"));
arrowLeft.addEventListener("click", () => navAPI.carouselShift("left"));
ratingButton.addEventListener("click", () => ratingAPI.toggleRatingWindow(true));
btnCloseRatingWindow.addEventListener("click", () => ratingAPI.toggleRatingWindow(false));
