export const navAPI = {
  carouselPosition: 0,
  friendItemWidth: 60,
  elementsOnNav: 8,
  friendsListFilling(navArray, friendsArray) {
    const container = document.querySelector(".friends-carousel-container");
    container.innerHTML = navArray
      .map((user) => {
        const isFriend = friendsArray.some((friend) => friend.id === user.id);
        return `
          <div class="friend-item" title="${user.name} ${user.lastName}">
            <img src="${user.img}" alt="${user.name}">
            ${!isFriend ? `<img class="add-to-friends" src="./images/nav/plus.png" alt="Добавить в друзья">` : ""}
          </div>`;
      })
      .join("");
  },
  carouselShift(direction) {
    const container = document.querySelector(".friends-carousel-container");
    const maxPosition = container.children.length - this.elementsOnNav;
    if (direction === "right" && this.carouselPosition < maxPosition) {
      this.carouselPosition++;
    } else if (direction === "left" && this.carouselPosition > 0) {
      this.carouselPosition--;
    } else {
      this.carouselPosition = direction === "right" ? 0 : maxPosition;
    }
    container.style.transform = `translateX(-${this.carouselPosition * this.friendItemWidth}px)`;
  }
};
