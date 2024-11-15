export const ratingAPI = {
  fillRatingBoard(ratingArray, friendsArray) {
    const sortedArray = [...ratingArray].sort((a, b) => b.points - a.points);
    const container = document.querySelector(".rating-players-container");
    container.innerHTML = sortedArray
      .map(
        (player, index) => `
        <div class="player-info__item ${friendsArray.some((friend) => friend.id === player.id) ? "friend" : ""}">
          <p class="rating">${index + 1}</p>
          <img src="${player.img}" alt="${player.name}">
          <p class="name">${player.name}</p>
          <p class="exp">${player.points}</p>
        </div>
      `
      )
      .join("");
  },
  toggleRatingWindow(show) {
    document.querySelector(".rating-container").style.transform = show ? "translateY(600px)" : "translateY(0)";
    document.querySelector(".game-mode").classList.toggle("pause", show);
  }
};
